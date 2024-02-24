import Image from "next/image"
import Link from "next/link"

import { Button } from "../ui/button"
import { Card, CardContent, CardHeader } from "../ui/card"
import GoogleIcon from "../ui/icons/google"
import { background } from "~/lib/assets/images"

export default function Login() {
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
          <Button className="flex w-full flex-row items-center justify-center gap-2">
            <GoogleIcon width={20} height={20} /> Sign in using Google
          </Button>
          <p className="mt-2 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-semibold text-primary">
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
