import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabaseAdmin = createClient(
  "https://vqdqyeybtvbokvilhndh.supabase.co",
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nome, email, whatsapp, lead_magnet } = body;

  if (!nome || !email || !lead_magnet) {
    return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
  }

  const { error } = await supabaseAdmin
    .from("leads")
    .insert([{ nome, email, whatsapp: whatsapp || "", lead_magnet }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
