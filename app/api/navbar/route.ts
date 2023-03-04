import { NextRequest, NextResponse } from "next/server";

export async function GET(params: NextRequest) {
  return NextResponse.json({
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  });
}
