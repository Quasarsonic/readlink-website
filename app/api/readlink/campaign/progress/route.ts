import { NextResponse } from "next/server";
import { readlinkApiJson } from "@/lib/readlink-api";

type CampaignProgressResponse = {
  profileComplete?: boolean;
  bookCount?: number;
  libraryBookCount?: number;
};

export async function GET() {
  try {
    const progress = await readlinkApiJson<CampaignProgressResponse>("/campaign/progress");
    const bookCount =
      typeof progress.bookCount === "number"
        ? progress.bookCount
        : typeof progress.libraryBookCount === "number"
          ? progress.libraryBookCount
          : 0;

    return NextResponse.json({
      profileComplete: Boolean(progress.profileComplete),
      bookCount,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unable to load campaign progress",
        profileComplete: null,
        bookCount: null,
      },
      { status: 500 },
    );
  }
}
