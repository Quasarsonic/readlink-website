import { NextResponse } from "next/server";
import { readlinkApiJson } from "@/lib/readlink-api";

export async function POST() {
  try {
    const portal = await readlinkApiJson("/billing/portal", { method: "POST" });
    return NextResponse.json(portal);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to open billing portal" },
      { status: 500 },
    );
  }
}
