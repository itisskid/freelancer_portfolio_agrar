import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Hier könnte ein Webhook-Forwarding stattfinden
    // Für Demo: nur validieren und zurückgeben
    if (!body?.name || !body?.email || !body?.message || !body?.consent) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

