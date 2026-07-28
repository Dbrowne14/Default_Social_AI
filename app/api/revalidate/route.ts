import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";
import { parseBody } from "next-sanity/webhook";

type SanityWebhookBody = {
  _type?: string;
  slug?: string;
};

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;

  if (!secret) {
    return Response.json(
      { message: "Missing SANITY_REVALIDATE_SECRET" },
      { status: 500 },
    );
  }

  try {
    const { isValidSignature, body } =
      await parseBody<SanityWebhookBody>(request, secret);

    if (!isValidSignature) {
      return Response.json(
        { message: "Invalid webhook signature" },
        { status: 401 },
      );
    }

    revalidatePath("/", "layout");

    return Response.json({
      revalidated: true,
      documentType: body?._type ?? null,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Sanity revalidation failed:", error);

    return Response.json(
      { message: "Unable to revalidate website" },
      { status: 500 },
    );
  }
}