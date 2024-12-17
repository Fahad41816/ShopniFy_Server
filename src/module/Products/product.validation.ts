import { string, z } from "zod";

const ProductZodValidation = z.object({
  shopId: z.string(),
  title: z.string(),
  image: z.string(),
  stock: z.number(),
  categoryId: z.string(),
  price: z.number(),
  tags: z.string().array(),
});

export default ProductZodValidation;