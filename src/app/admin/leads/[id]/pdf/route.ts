import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabase } from "@/lib/supabase";
import { generateQuestionnairePDF } from "@/lib/pdf/questionnaire";

export async function GET(
  request: Request,
  context: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    // Check admin login
    const cookieStore = await cookies();
    const session = cookieStore.get(
      "techcore_admin_session"
    );

    if (session?.value !== "authenticated") {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized",
        },
        { status: 401 }
      );
    }

    // Get lead ID from URL
    const { id } = await context.params;

    const leadId = Number(id);

    if (!Number.isInteger(leadId)) {
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
    console.log("📄 Generating questionnaire PDF");
    console.log("🆔 Lead ID:", leadId);
    console.log("========================================");

    // Get questionnaire from Supabase
    const { data: lead, error } = await supabase
      .from("website_questionnaires")
      .select("*")
      .eq("id", leadId)
      .single();

    if (error) {
      console.error("❌ Supabase error:", error);

      return NextResponse.json(
        {
          success: false,
          error: "Failed to find questionnaire.",
        },
        { status: 500 }
      );
    }

    if (!lead) {
      return NextResponse.json(
        {
          success: false,
          error: "Questionnaire not found.",
        },
        { status: 404 }
      );
    }

    console.log("✅ Questionnaire found.");
    console.log(
      "👤 Client:",
      lead.client_name
    );

    // Generate PDF
    console.log("📄 Creating PDF...");

    const pdfBuffer =
      await generateQuestionnairePDF(lead);

    console.log("✅ PDF generated.");
    console.log(
      "📦 PDF size:",
      `${Math.round(
        pdfBuffer.length / 1024
      )} KB`
    );

    // Safe filename
    const safeName =
      String(
        lead.client_name || "Client"
      )
        .trim()
        .replace(
          /[^a-zA-Z0-9-_ ]/g,
          ""
        )
        .replace(
          /\s+/g,
          "-"
        )
        .slice(0, 60) || "Client";

    const filename =
      `Website-Requirements-${safeName}-${lead.id}.pdf`;

    console.log(
      "📥 Download filename:",
      filename
    );

    // Return PDF
    return new NextResponse(
      new Uint8Array(pdfBuffer),
      {
        status: 200,

        headers: {
          "Content-Type":
            "application/pdf",

          "Content-Disposition":
            `attachment; filename="${filename}"`,

          "Content-Length":
            String(pdfBuffer.length),

          "Cache-Control":
            "no-store",
        },
      }
    );
  } catch (error) {
    console.error(
      "❌ PDF generation failed:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to generate PDF.",
      },
      { status: 500 }
    );
  }
}