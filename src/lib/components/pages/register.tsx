import Image from "next/image";
import { background } from "~/lib/assets/images";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import GoogleIcon from "../ui/icons/google";
import Link from "next/link";

export default function Register() {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center p-3">
      <Image
        src={background}
        alt="beautiful coffeeshop"
        fill
        objectFit="cover"
        objectPosition="right"
      />
      <div className="bg-black/50 absolute h-full w-full z-10" />
      <Card className="z-20 site-section">
        <CardHeader>
          <h1 className="text-lg text-center">
            Hi, Selamat Datang di <br />
            <strong className="text-3xl font-semibold text-primary">
              Coffeeshopedia
            </strong>
          </h1>
        </CardHeader>
        <CardContent>
          <Button className="w-full flex flex-row justify-center items-center gap-2">
            <GoogleIcon width={20} height={20} /> Sign up using Google
          </Button>
          <p className="text-sm mt-2 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-semibold">
              Log in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
