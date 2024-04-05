import { z } from "zod"

 export const signupValidation = z.object({
    name:z.string().min(3,{message:'name too short'}),
    username: z.string().min(2,{message:'username too short'}),
    email:z.string().email(),
    password:z.string().min(8,'passwor must be at least 8 character')
})

 export const signinValidation = z.object({
    email:z.string().email(),
    password:z.string().min(8,'passwor must be at least 8 character')
})
 export const PostValidation = z.object({
    caption:z.string().min(5).max(2200),
    file:z.custom<File[]>(),
    location:z.string().min(2).max(100),
    tags:z.string()
})
