import { FcGoogle } from "react-icons/fc"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa";
export const SignInCard = () => {
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
                    <Input disabled={false}
                        value=""
                        onChange={() => { }}
                        placeholder="Email"
                        type="email"
                        required
                    />
                    <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
                        We won&apos;t share your email with anyone
                    </p>
                    <Input disabled={false}
                        value=""
                        onChange={() => { }}
                        placeholder="Password"
                        type="password"
                        required
                    />
                    <Button type="submit">
                        Continue
                    </Button>
                </form>
                <Separator />
                <div className="flex flex-col gap-y-2.5">
                    <Button disabled={false}
                        onClick={() => { }}
                        variant="outline"
                        size="sm"
                        className="w-full relative"
                    >
                        <FcGoogle className="size-5" />
                        Continue with Google
                    </Button>
                    <Button disabled={false}
                        onClick={() => { }}
                        variant="outline"
                        size="sm"
                        className="w-full relative"
                    >
                        <FaGithub className="size-5" />
                        Continue with Github
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                    Don't have an account? <span className="text-cyan-500 hover:underline cursor-pointer">
                        Sign Up</span>
                </p>
            </CardContent>
        </Card>
    )
}