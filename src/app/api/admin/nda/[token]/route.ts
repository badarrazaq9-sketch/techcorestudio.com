import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const runtime = "nodejs";

export async function GET(
  request: NextRequest,
  context: {
    params: Promise<{ token: string }>;
  }
) {
  try {
    const { token } = await context.params;

    if (!token) {
      return NextResponse.json(
        { error: "NDA token is required" },
        { status: 400 }
      );
    }

    // Find NDA by secure token
    const { data: nda, error: ndaError } = await supabase
      .from("website_ndas")
      .select(
        `
        id,
        lead_id,
        created_at,
        token,
        status,
        client_name,
        client_email,
        nda_version,
        signed_at
        `
      )
      .eq("token", token)
      .maybeSingle();

    if (ndaError) {
      console.error("NDA lookup error:", ndaError);

      return NextResponse.json(
        { error: "Unable to load NDA" },
        { status: 500 }
      );
    }

    if (!nda) {
      return NextResponse.json(
        { error: "NDA not found or link is invalid" },
        { status: 404 }
      );
    }

    // Get related website questionnaire
    let lead = null;

    if (nda.lead_id) {
      const { data: leadData, error: leadError } = await supabase
        .from("website_questionnaires")
        .select(
          `
          id,
          client_name,
          email,
          phone,
          business_name,
          industry,
          business_slogan,
          purpose
          `
        )
        .eq("id", nda.lead_id)
        .maybeSingle();

      if (leadError) {
        console.error("Lead lookup error:", leadError);
      }

      lead = leadData ?? null;
    }

    return NextResponse.json({
      nda: {
        id: nda.id,
        createdAt: nda.created_at,
        status: nda.status,
        clientName: nda.client_name,
        clientEmail: nda.client_email,
        ndaVersion: nda.nda_version,
        signedAt: nda.signed_at,
      },
      lead,
      company: {
        name: "TechCore Studio",
        website: "https://techcorestudio.com",
        email: "info@techcorestudio.com",
        representative: "Ryan Haster",
        title: "Sr. Business Consultant",
      },
    });
  } catch (error) {
    console.error("Public NDA API error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}