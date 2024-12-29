import { convexAuthNextjsMiddleware, createRouteMatcher, nextjsMiddlewareRedirect } from "@convex-dev/auth/nextjs/server";

const isPublicPage = createRouteMatcher(["/signin"]);

export default convexAuthNextjsMiddleware(async (request, {convexAuth}) =>{
  if (!isPublicPage(request) && !(await convexAuth.isAuthenticated())){
    return nextjsMiddlewareRedirect(request, "/signin")
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};