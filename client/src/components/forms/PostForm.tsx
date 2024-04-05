"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

import { Textarea } from "../ui/textarea"
import FileUploader from "../shared/FileUploader"
import { Input } from "../ui/input"
import { PostValidation } from "@/lib/validations"


type posts ={
    caption:string,
    location:string,
    tags:[],
    imageUrl:string
}



type PostFormProps ={
    post?: posts
}

const PostForm = ({post}:PostFormProps) => {
    const form = useForm<z.infer<typeof PostValidation>>({
        resolver: zodResolver(PostValidation),
        defaultValues: {
            caption: post ? post?.caption: " ",
            file:[],
            location: post ? post?.location: "",
            tags:post ? post.tags.join(","):""
        }
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof PostValidation>) {

        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full flex max-w-5xl flex-col gap-9">
                <FormField
                    control={form.control}
                    name="caption"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">Caption</FormLabel>
                            <FormControl>
                                <Textarea className="shad-textarea custom-scrollbar" {...field} />
                            </FormControl>
                            <FormMessage className="shad-form_message" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="file"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">Add Photos</FormLabel>
                            <FormControl>
                                <FileUploader
                                fieldChange={field.onChange}
                                mediaUrl={post?.imageUrl}
                                />
                            </FormControl>
                            <FormMessage className="shad-form_message" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">Add Locaion</FormLabel>
                            <FormControl>
                                <Input type="text" className="shad-input" {...field} />
                            </FormControl>
                            <FormMessage className="shad-form_message" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">Add Tags (separated by comma " , ")</FormLabel>
                            <FormControl>
                                <Input type="text" className="shad-input" placeholder="Art, Expression, Learn" {...field} />
                            </FormControl>
                            <FormMessage className="shad-form_message" />
                        </FormItem>
                    )}
                />
                <div className="flex gap-4 items-center jus">
                    <Button type="button" className="shad-button_dark_4">Cancel</Button>
                    <Button type="submit" className="shad-button_primary whitespace-nowrap">Submit</Button>
                </div>
            </form>
        </Form>
    );
}

export default PostForm;