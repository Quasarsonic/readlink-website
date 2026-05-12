import { NextResponse } from "next/server";
import { readlinkApiJson } from "@/lib/readlink-api";

export async function GET() {
  try {
    const plans = await readlinkApiJson("/billing/plans");
    return NextResponse.json(plans);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to load plans" },
      { status: 500 },
    );
  }
}
