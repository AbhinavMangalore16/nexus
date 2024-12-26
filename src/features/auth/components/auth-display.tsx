"use client";

import { useState } from "react";
import { SignInFlow } from "../types";
import { SignInCard } from "./signin-card";
import { SignUpCard } from "./signup-card";

export const AuthDisplay = () =>{
    const [state, setState] = useState<SignInFlow>("signIn");
    return (
        <div className="h-full flex items-center justify-center bg-[#51287A]">
            <div className="md: h-auto w-[400px]">
                {state === "signIn" ? <SignInCard setState={setState}/>:<SignUpCard setState={setState}/>}
            </div>
        </div>
    );
};