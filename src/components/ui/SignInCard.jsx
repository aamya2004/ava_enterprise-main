import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const SignInCard = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center lg:text-sm xl:text-sm ">
      <Card className="flex flex-col items-center w-4/5 h-4/5 ">
        <CardHeader className=" w-full  pt-10">
          <CardTitle className="text-slate-200 text-4xl lg:text-2xl font-bold">Sign Up</CardTitle>
        </CardHeader>
        <CardContent className="lg:w-full">
          <div className="flex flex-col gap-4 lg:gap-3 py-2 lg:py-0">
            <div  className="flex flex-col gap-2">
              <p className="text-slate-200 font-medium">Email Address</p>
              <Input type="email" placeholder="Enter Your Email" className ="rounded-lg border-white-1 w-[320px] h-[44px] bg-transparent text-slate-200 text-md lg:text-sm lg:w-full lg:h-1/2"/>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-slate-200 font-medium">Password</p>
              <Input type="password" placeholder="Enter Password" className =" lg:w-full rounded-lg border-white-1 w-[320px] h-[44px] bg-transparent text-slate-200 lg:h-1/2 text-md" />
            </div>
          </div>
        </CardContent>
        {/* <Button  asChild className="text-slate-200 w-[320px] h-[44px] rounder-lg bg-gradient-to-r from-fuchsia-600 to-purple-600">
         <Link className="hover:text-slate-200 " href="/dashboard">Sign Up</Link>
        </Button> */}
        <div className="w-[320px] h-[44px] lg:w-full flex justify-center  ">
          <button aschild className="rounded-lg text-slate-200 hover:text-white w-full h-full bg-gradient-to-r from-fuchsia-600 to-purple-600
          lg:w-5/6 lg:h-3/4">
            <Link  href="/dashboard">Sign Up</Link>
          </button>
        </div>
        <CardFooter className = "lg:w-full">
          <p className="pt-4 lg:pt-3 text-start text-sm text-slate-300 lg:text-justify lg:text-xs lg:px-2">
            By Clicking on Sign up, you agree to our Terms of Service and
            Privacy policy.
          </p>
        </CardFooter>
        <div className="border-t border-white my-4 w-60 "></div>
      </Card>
    </div>
  );
};

export default SignInCard;
