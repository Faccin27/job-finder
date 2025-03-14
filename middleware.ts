import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log("Middleware executado para:", req.nextUrl.pathname);

  const token = req.cookies.get("token")?.value;
  console.log("Token encontrado:", token);

  if (!token) {
    console.log("Sem token, redirecionando para login.");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-auth-token", token);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/profile", "/admin"],
};
