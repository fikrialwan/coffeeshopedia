"use client"

import Image from "next/image"
import Link from "next/link"

import * as z from "zod"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader } from "../ui/card"
import GoogleIcon from "../ui/icons/google"
import { background } from "~/lib/assets/images"
import { Input } from "../ui/input"
import { createClient } from "~/lib/utils/supabase/client"
import { useRouter } from "next/navigation"
import { useToast } from "../ui/use-toast"
import { ToastAction } from "../ui/toast"
import { Form, FormControl, FormField, FormMessage } from "../ui/form"
import { useForm } from "react-hook-form"
import { formLoginSchema } from "~/lib/schema/auth.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Label } from "../ui/label"
import { useState } from "react"

export default function Login() {
  const router = useRouter()
  const { toast } = useToast()

  const [isLoading, setLoading] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formLoginSchema>>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const onSubmit = async (values: z.infer<typeof formLoginSchema>) => {
    setLoading(true)
    const { email, password } = values
    const supabase = createClient()

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setLoading(false)
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    } else {
      setLoading(false)
      return router.push("/cms")
    }
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-3">
      <Image
        src={background}
        alt="beautiful coffeeshop"
        fill
        objectFit="cover"
        objectPosition="right"
      />
      <div className="absolute z-10 size-full bg-black/50" />
      <Card className="site-section z-20">
        <CardHeader>
          <h1 className="text-center text-lg">
            Hi, Selamat Datang di <br />
            <strong className="text-3xl font-semibold text-primary">
              Coffeeshopedia
            </strong>
          </h1>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <FormControl>
                      <Input id="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <FormControl>
                      <Input id="password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                )}
              />
              <Button className="mt-2 w-full" disabled={isLoading}>
                {isLoading ? "Loading..." : "Sign In"}
              </Button>
            </form>
          </Form>
          <p className="mt-2 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-semibold text-primary">
              Sign up
            </Link>
          </p>
          <p className="py-4 text-center">OR</p>
          <Button
            variant="outline"
            className="flex w-full flex-row items-center justify-center gap-2"
          >
            <GoogleIcon width={20} height={20} /> Sign in using Google
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
