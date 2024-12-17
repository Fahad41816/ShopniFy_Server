import express from "express";
import cors from "cors";
import route from "./routers";
import GlobalErrorHandler from "./Error/GlobalErrorHandler";
 

  

const app = express();

app.use(cors({
  origin:["http://localhost:5173", "https://sandbox.sslcommerz.com", "https://shopnify-kappa.vercel.app"],
  credentials: true
}));
app.use(express.json());


app.use('/api/v1/', route)

app.get("/", async (req, res) => {
  res.status(200).json({
    success: true,
    status: 200,
    message: "ShopNiFy server..",
  });
});

app.use(GlobalErrorHandler)


export default app;
