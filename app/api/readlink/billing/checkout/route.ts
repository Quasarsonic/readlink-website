import { NextResponse } from "next/server";
import { readlinkApiJson } from "@/lib/readlink-api";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const checkout = await readlinkApiJson("/billing/checkout", {
      method: "POST",
      body: JSON.stringify(body),
    });
    return NextResponse.json(checkout);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to start checkout" },
      { status: 500 },
    );
  }
}
