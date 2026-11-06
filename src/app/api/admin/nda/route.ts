import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";

import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    // ========================================
    // 1. CHECK ADMIN LOGIN
    // ========================================

    const cookieStore = await cookies();
    const session = cookieStore.get("techcore_admin_session");

    if (session?.value !== "authenticated") {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized",
        },
        { status: 401 }
      );
    }

    // ========================================
    // 2. READ REQUEST
    // ========================================

    const body = await request.json();

    const leadId = Number(body.leadId);

    if (!Number.isInteger(leadId) || leadId <= 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid lead ID.",
        },
        { status: 400 }
      );
    }

    console.log("");
    console.log("========================================");
    console.log("📝 Creating NDA");
    console.log("🆔 Lead ID:", leadId);
    console.log("========================================");

    // ========================================
    // 3. FIND QUESTIONNAIRE LEAD
    // ========================================

    const { data: lead, error: leadError } = await supabase
      .from("website_questionnaires")
      .select(
        "id, client_name, email, business_name"
      )
      .eq("id", leadId)
      .single();

    if (leadError) {
      console.error(
        "❌ Failed to find lead:",
        leadError
      );

      return NextResponse.json(
        {
          success: false,
          error: "Failed to find questionnaire lead.",
        },
        { status: 500 }
      );
    }

    if (!lead) {
      return NextResponse.json(
        {
          success: false,
          error: "Questionnaire lead not found.",
        },
        { status: 404 }
      );
    }

    console.log("✅ Lead found");
    console.log("👤 Client:", lead.client_name);
    console.log("📧 Email:", lead.email);

    // ========================================
    // 4. CHECK FOR EXISTING PENDING NDA
    // ========================================

    const { data: existingNda, error: existingError } =
      await supabase
        .from("website_ndas")
        .select(
          "id, token, status, client_name, client_email, nda_version"
        )
        .eq("lead_id", leadId)
        .eq("status", "pending")
        .maybeSingle();

    if (existingError) {
      console.error(
        "❌ Failed checking existing NDA:",
        existingError
      );

      return NextResponse.json(
        {
          success: false,
          error: "Failed to check existing NDA.",
        },
        { status: 500 }
      );
    }

    // If there is already a pending NDA,
    // return the existing link instead of creating duplicates.
    if (existingNda) {
      const origin = new URL(request.url).origin;

      const clientUrl =
        `${origin}/nda/${existingNda.token}`;

      console.log("ℹ️ Existing pending NDA found.");
      console.log("🆔 NDA ID:", existingNda.id);

      return NextResponse.json({
        success: true,
        message: "Existing pending NDA returned.",
        nda: {
          id: existingNda.id,
          leadId,
          status: existingNda.status,
          clientName: existingNda.client_name,
          clientEmail: existingNda.client_email,
          ndaVersion: existingNda.nda_version,
          clientUrl,
        },
      });
    }

    // ========================================
    // 5. GENERATE SECURE TOKEN
    // ========================================

    const token = crypto.randomBytes(32).toString("hex");

    console.log("🔐 Secure NDA token generated.");

    // ========================================
    // 6. CREATE NDA
    // ========================================

    const { data: nda, error: ndaError } =
      await supabase
        .from("website_ndas")
        .insert({
          lead_id: leadId,
          token,
          status: "pending",
          client_name: lead.client_name || null,
          client_email: lead.email || null,
          nda_version: "1.0",
        })
        .select(
          "id, lead_id, token, status, client_name, client_email, nda_version, created_at"
        )
        .single();

    if (ndaError) {
      console.error(
        "❌ Failed to create NDA:",
        ndaError
      );

      return NextResponse.json(
        {
          success: false,
          error: "Failed to create NDA.",
        },
        { status: 500 }
      );
    }

    // ========================================
    // 7. CREATE CLIENT URL
    // ========================================

    const origin = new URL(request.url).origin;

    const clientUrl = `${origin}/nda/${token}`;

    console.log("✅ NDA created successfully.");
    console.log("🆔 NDA ID:", nda.id);
    console.log("🔗 Client URL:", clientUrl);

    // ========================================
    // 8. RETURN RESULT
    // ========================================

    return NextResponse.json({
      success: true,
      message: "NDA created successfully.",
      nda: {
        id: nda.id,
        leadId: nda.lead_id,
        status: nda.status,
        clientName: nda.client_name,
        clientEmail: nda.client_email,
        ndaVersion: nda.nda_version,
        createdAt: nda.created_at,
        clientUrl,
      },
    });
  } catch (error) {
    console.error(
      "❌ NDA API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to create NDA.",
      },
      { status: 500 }
    );
  }
}