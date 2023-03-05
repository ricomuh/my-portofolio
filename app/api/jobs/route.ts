import { NextRequest, NextResponse } from "next/server";

export async function GET(params: NextRequest) {
  return NextResponse.json({
    jobs: [
      "Frontend Developer.",
      "Backend Programmer.",
      "College Student.",
      "Game Developer.",
    ],
  });
}
