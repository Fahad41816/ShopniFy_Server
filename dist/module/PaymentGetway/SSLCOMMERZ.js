"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.sslcommerz = void 0;
const config_1 = __importDefault(require("../../config"));
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
// @ts-ignore
const sslcommerz_lts_1 = __importDefault(require("sslcommerz-lts"));
const client_1 = require("@prisma/client");
const crypto_1 = __importDefault(require("crypto"));
const store_id = config_1.default.sslcommerz_StoreId;
const store_passwd = config_1.default.sslcommerz_StorePass;
const is_live = false; //true for live, false for sandbox
const generateTranId = () => {
  return `TXN-${crypto_1.default.randomBytes(8).toString("hex")}`;
};
const prisma = new client_1.PrismaClient();
const sslcommerzPaymentProccess = (0, CatchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body.shippingAddress);
    const tranId = generateTranId();
    const data = {
      total_amount: req.body.totalPrice,
      currency: "BDT",
      tran_id: tranId, // use unique tran_id for each api call
      success_url: `https://shopnifyserver.vercel.app/api/v1/payment/sslcommerz/PaymentSuccess/${tranId}`,
      fail_url: "http://localhost:5173/fail",
      cancel_url: "http://localhost:5173/cancel",
      ipn_url: "http://localhost:3030/ipn",
      shipping_method: "Courier",
      product_name: "Computer.",
      product_category: "Electronic",
      product_profile: "general",
      cus_name: "Customer Name",
      cus_email: "customer@example.com",
      cus_add1: "Dhaka",
      cus_add2: "Dhaka",
      cus_city: "Dhaka",
      cus_state: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: "01711111111",
      cus_fax: "01711111111",
      ship_name: "Customer Name",
      ship_add1: "Dhaka",
      ship_add2: "Dhaka",
      ship_city: "Dhaka",
      ship_state: "Dhaka",
      ship_postcode: 1000,
      ship_country: "Bangladesh",
    };
    const sslcz = new sslcommerz_lts_1.default(store_id, store_passwd, is_live);
    sslcz.init(data).then((apiResponse) =>
      __awaiter(void 0, void 0, void 0, function* () {
        // Redirect the user to payment gateway
        let GatewayPageURL = apiResponse.GatewayPageURL;
        try {
          yield prisma.$transaction((prisma) =>
            __awaiter(void 0, void 0, void 0, function* () {
              const OrderResult = yield prisma.order.create({
                data: {
                  tranId: tranId,
                  billingAddress: req.body.billingAddress,
                  shippingAddress: req.body.shippingAddress,
                  status: "Pending",
                  paymentMethod: req.body.paymentMethod,
                  totalPrice: req.body.totalPrice,
                  userId: req.body.userId,
                },
              });
              // Create order items
              const orderItems = req.body.productData.map((product) => ({
                orderId: OrderResult.id,
                productId: product.id,
                quantity: product.Qty,
                price: product.price,
              }));
              yield prisma.orderItem.createMany({
                data: orderItems,
              });
              res.send(GatewayPageURL);
              console.log("Redirecting to: ", GatewayPageURL);
              console.log("Order and order items saved successfully.");
            })
          );
        } catch (error) {
          console.error("Transaction failed: ", error);
          res.status(500).send("Failed to process order.");
        }
      })
    );
  })
);
const sslcommerzPaymentSuccess = (0, CatchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const tranId = req.params.tranId;
    console.log(tranId);
    // Fetch the order first using tranId to get the corresponding id
    const order = yield prisma.order.findUnique({
      where: {
        tranId: tranId, // Use tranId to find the order
      },
    });
    if (!order) {
      res.status(404).send("Order not found.");
      return;
    }
    // Now that we have the order, we can update its status using its id
    const Result = yield prisma.order.update({
      where: {
        id: order.id, // Use the order id to perform the update
      },
      data: {
        status: "Complete",
      },
    });
    console.log(Result);
    res.redirect("http://localhost:5173/PaymentSuccess");
  })
);
exports.sslcommerz = {
  sslcommerzPaymentProccess,
  sslcommerzPaymentSuccess,
};
