import { z } from "zod";

const UserDataZodValidation = z.object({
    firstName : z.string(),
    lastName : z.string(),
    email: z.string(),
    role : z.enum(['user','admin','vendor']),
    image : z.string().optional(),
    password : z.string(),
    dateOfBirth : z.string().optional()  
})

export default UserDataZodValidation