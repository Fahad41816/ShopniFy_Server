import { z } from "zod";

const CategoryZodValidation = z.object({
    name: z.string(),
    image: z.string()
})

export default CategoryZodValidation; 