import {type NextRequest, NextResponse} from "next/server";
import {AppMiddleware, isTool} from "@trycreo/ui/dist/lib/utils";

export async function middleware(request: NextRequest) {

    if (isTool(request)) {
        return AppMiddleware(request);
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        // "/((?!_next/static|_next/image|favicon.ico).*)",
        "/((?!api/|_next/|_static/|_vercel|login|[\\w-]+\\.\\w+).*)",
    ],
};