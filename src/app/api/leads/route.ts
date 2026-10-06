import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request: NextRequest) {
  try {
    console.log("");
    console.log("========================================");
    console.log("📊 ADMIN LEADS API");
    console.log("========================================");

    // Check admin login session
    const session = request.cookies.get(
      "techcore_admin_session"
    );

    if (!session || session.value !== "authenticated") {
      console.log("❌ Unauthorized admin request");

      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized",
        },
        { status: 401 }
      );
    }

    console.log("✅ Admin session verified");

    // ========================================
    // FETCH WEBSITE QUESTIONNAIRE LEADS
    // ========================================

    console.log(
      "📥 Fetching website questionnaire leads..."
    );

    const {
      data: websiteLeads,
      error: websiteError,
    } = await supabase
      .from("website_questionnaires")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (websiteError) {
      console.error(
        "❌ Website leads error:",
        websiteError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Failed to fetch website questionnaire leads.",
        },
        { status: 500 }
      );
    }

    console.log(
      `✅ Website leads found: ${
        websiteLeads?.length || 0
      }`
    );

    // ========================================
    // FETCH CONTACT LEADS
    // ========================================

    console.log("📥 Fetching contact leads...");

    const {
      data: contactLeads,
      error: contactError,
    } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (contactError) {
      console.error(
        "❌ Contact leads error:",
        contactError
      );

      return NextResponse.json(
        {
          success: false,
          error: "Failed to fetch contact leads.",
        },
        { status: 500 }
      );
    }

    console.log(
      `✅ Contact leads found: ${
        contactLeads?.length || 0
      }`
    );

    // ========================================
    // RETURN DATA
    // ========================================

    const totalWebsiteLeads =
      websiteLeads?.length || 0;

    const totalContactLeads =
      contactLeads?.length || 0;

    console.log(
      `📊 Total leads: ${
        totalWebsiteLeads + totalContactLeads
      }`
    );

    console.log("========================================");
    console.log("✅ ADMIN LEADS API COMPLETE");
    console.log("========================================");
    console.log("");

    return NextResponse.json({
      success: true,

      websiteLeads: websiteLeads || [],

      contactLeads: contactLeads || [],

      totals: {
        website: totalWebsiteLeads,
        contact: totalContactLeads,
        all:
          totalWebsiteLeads +
          totalContactLeads,
      },
    });
  } catch (error) {
    console.error("");
    console.error("========================================");
    console.error("❌ ADMIN LEADS API ERROR");
    console.error("========================================");
    console.error(error);
    console.error("");

    return NextResponse.json(
      {
        success: false,
        error: "Failed to load leads.",
      },
      { status: 500 }
    );
  }
}