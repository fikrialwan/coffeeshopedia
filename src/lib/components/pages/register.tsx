import Image from "next/image"
import Link from "next/link"

import { Button } from "../ui/button"
import { Card, CardContent, CardHeader } from "../ui/card"
import GoogleIcon from "../ui/icons/google"
import { background } from "~/lib/assets/images"

export default function Register() {
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
            <GoogleIcon width={20} height={20} /> Sign up using Google
          </Button>
          <p className="mt-2 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-primary">
              Log in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
