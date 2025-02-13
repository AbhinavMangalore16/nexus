import { FcGoogle } from "react-icons/fc";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa";
import { SignInFlow } from "../types";
import { useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";

interface SignInCardProps {
    setState: (state: SignInFlow) => void;
}

export const SignInCard = ({ setState }: SignInCardProps) => {
    const { signIn } = useAuthActions();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const signInProvider = (value: "google" | "github")=>{
        signIn(value);
    }
    
    return (
        <Card className="h-full w-full p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle>
                    Log in to continue
                </CardTitle>
                <CardDescription>
                    Use your email or another service to continue
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                    <Input
                        disabled={false}
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder="Email"
                        type="email"
                        required
                        className="
                        border border-[#663399] 
                        rounded-lg 
                        shadow-md 
                        focus:ring-[#663399] 
                        focus:border-[#663399] 
                        hover:shadow-lg 
                        transition-all 
                        duration-200 
                        ease-in-out
                        "
                    />
                    <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
                        We won&apos;t share your email with anyone
                    </p>
                    <Input
                        disabled={false}
                        value={password}
                        onChange={(e) => { setPassword(e.target.value)}}
                        placeholder="Password"
                        type="password"
                        required
                        className="
                        border border-[#663399] 
                        rounded-lg 
                        shadow-md 
                        focus:ring-[#663399] 
                        focus:border-[#663399] 
                        hover:shadow-lg 
                        transition-all 
                        duration-200 
                        ease-in-out
                        "
                    />

                    <Button className="w-full bg-[#663399] hover:bg-[#7C43B4] text-white">
                        Continue
                    </Button>
                </form>
                <Separator />
                <div className="flex flex-col gap-y-2.5">
                    <Button
                        disabled={false}
                        onClick={() =>  signInProvider("google")}
                        variant="outline"
                        size="sm"
                        className="
                        w-full 
                        relative 
                        hover:bg-[#E3D1F9] 
                        transition-all 
                        duration-200 
                        ease-in-out
                        "
                    >
                        <FcGoogle className="size-5" />
                        Continue with Google
                    </Button>
                    <Button
                        disabled={false}
                        onClick={() =>  signInProvider("github")}
                        variant="outline"
                        size="sm"
                        className="
                        w-full 
                        relative 
                        hover:bg-[#E3D1F9] 
                        transition-all 
                        duration-200 
                        ease-in-out
                        "
                    >
                        <FaGithub className="size-5" />
                        Continue with Github
                    </Button>
                </div>

                <p className="text-xs text-muted-foreground">
                    Don't have an account? <span onClick={() => setState("signUp")} className="text-cyan-500 hover:underline cursor-pointer">
                        Sign Up</span>
                </p>
            </CardContent>
        </Card>
    );
};
