import { NextResponse } from "next/server";
import { readlinkApiJson } from "@/lib/readlink-api";

export async function GET() {
  try {
    const status = await readlinkApiJson("/billing/status");
    return NextResponse.json(status);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to load billing status" },
      { status: 500 },
    );
  }
}
