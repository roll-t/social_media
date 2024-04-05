
import { zodResolver } from "@hookform/resolvers/zod"

import { useForm } from "react-hook-form"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Link, useNavigate } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { signupValidation } from '@/lib/validations/index';

import { useToast } from "@/components/ui/use-toast"

import { z } from "zod"
import Loader from "@/components/shared/Loader"
import { useState } from "react"


const SignupForm = () => {
    const { toast } = useToast()
    const navigate = useNavigate();

    const isLoading = false;
    const [isLogin, setIsLogin] = useState(true)

    const form = useForm<z.infer<typeof signupValidation>>({
        resolver: zodResolver(signupValidation),
        defaultValues: {
            username: "",
            name: "",
            email: "",
            password: ""
        },
    })


    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof signupValidation>) {
        if (isLogin) {
            form.reset()
            navigate('/sign-in')
        } else {
            return toast({ title: "Sign up failed. Please try again." })
        }
    }

    return (
        <>
            <Form {...form}>
                <div className="sm:w-420 flex-center flex-col">
                    <img src="/assets/images/logo.svg" alt="" />
                    <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">create a new account</h2>
                    <p className="text-light-3 small-medium mt-2 md:base-regular">To use Snapgram enter your account detail</p>
                </div>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-1/2 mt-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="shad-button_primary" type="submit">
                        {
                            isLoading ? (
                                <div className="flex-center gap-2">
                                    <Loader /> Loading...
                                </div>
                            ) : "Sign up"
                        }
                    </Button>

                    <p className="text-small-ragular text-light-2 text-center mt-2">Already have a account?
                        <Link className=" text-primary-500 ml-1" to="/sign-in">log in</Link>
                    </p>
                </form>
            </Form>
        </>
    );
}

export default SignupForm;