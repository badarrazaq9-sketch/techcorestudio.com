import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

type QuestionnaireData = {
  id?: number;
  created_at?: string;

  client_name?: string;
  email?: string;
  phone?: string;
  industry?: string;

  business_name?: string;
  business_slogan?: string;

  logo_choice?: string;
  color_preferences?: string;

  has_website?: string;
  existing_website_url?: string;
  purpose?: string;
  competitors?: string;

  payment_integration?: string;
  specific_requirements?: string;
  content_pages?: string;
  other_suggestions?: string;

  has_domain?: string;
  domain_provider?: string;
  domain_username?: string;

  has_hosting?: string;
  hosting_provider?: string;
  hosting_username?: string;

  notes?: string;
};

const LOGO_PATH = path.join(
  process.cwd(),
  "public",
  "TechCoreStudio Logo-01.png"
);

export async function generateQuestionnairePDF(
  data: QuestionnaireData
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: "A4",
        margin: 50,
        info: {
          Title: `Website Project Requirements - ${
            data.client_name || "Client"
          }`,
          Author: "TechCore Studio",
          Subject: "Website Project Requirements",
        },
      });

      const chunks: Buffer[] = [];

      doc.on("data", (chunk) => {
        chunks.push(Buffer.from(chunk));
      });

      doc.on("end", () => {
        resolve(Buffer.concat(chunks));
      });

      doc.on("error", reject);

      /*
       * ========================================
       * BRAND COLORS
       * ========================================
       */

      const blue = "#2563EB";
      const dark = "#111827";
      const gray = "#6B7280";
      const lightGray = "#F3F4F6";
      const borderGray = "#E5E7EB";
      const green = "#059669";

      /*
       * ========================================
       * HEADER / LOGO
       * ========================================
       */

      if (fs.existsSync(LOGO_PATH)) {
        try {
         doc.image(LOGO_PATH, 50, 42, {
  fit: [150, 55],
  valign: "center",
});
        } catch (logoError) {
          console.error(
            "⚠️ Could not load TechCore logo:",
            logoError
          );

          doc
            .fillColor(dark)
            .font("Helvetica-Bold")
            .fontSize(20)
            .text("TECHCORE STUDIO", 50, 55);
        }
      } else {
        console.warn(
          "⚠️ TechCore logo not found:",
          LOGO_PATH
        );

        doc
          .fillColor(dark)
          .font("Helvetica-Bold")
          .fontSize(20)
          .text("TECHCORE STUDIO", 50, 55);
      }

      /*
       * Header right side
       */

      doc
        .fillColor(gray)
        .font("Helvetica")
        .fontSize(8)
        .text(
          "WEBSITE PROJECT REQUIREMENTS",
          350,
          55,
          {
            width: 195,
            align: "right",
          }
        );

      doc
        .fillColor(dark)
        .font("Helvetica-Bold")
        .fontSize(18)
        .text(
          "Website Project Requirements",
          50,
          125
        );

      doc
        .fillColor(gray)
        .font("Helvetica")
        .fontSize(9)
        .text(
          "Client questionnaire and project requirements",
          50,
          150
        );

      /*
       * ========================================
       * PROJECT SUMMARY CARD
       * ========================================
       */

      const summaryY = 180;

      doc
        .roundedRect(
          50,
          summaryY,
          doc.page.width - 100,
          82,
          8
        )
        .fillColor(lightGray)
        .fill();

      doc
        .fillColor(dark)
        .font("Helvetica-Bold")
        .fontSize(11)
        .text(
          data.business_name ||
            data.client_name ||
            "Website Project",
          65,
          summaryY + 14
        );

      doc
        .fillColor(gray)
        .font("Helvetica")
        .fontSize(8)
        .text(
          "CLIENT",
          65,
          summaryY + 38
        );

      doc
        .fillColor(dark)
        .font("Helvetica")
        .fontSize(9)
        .text(
          data.client_name || "Not provided",
          65,
          summaryY + 51
        );

      doc
        .fillColor(gray)
        .fontSize(8)
        .text(
          "LEAD ID",
          300,
          summaryY + 38
        );

      doc
        .fillColor(dark)
        .fontSize(9)
        .text(
          String(data.id || "N/A"),
          300,
          summaryY + 51
        );

      doc
        .fillColor(gray)
        .fontSize(8)
        .text(
          "SUBMITTED",
          405,
          summaryY + 38
        );

      doc
        .fillColor(dark)
        .fontSize(9)
        .text(
          data.created_at
            ? new Date(
                data.created_at
              ).toLocaleDateString()
            : new Date().toLocaleDateString(),
          405,
          summaryY + 51
        );

      doc.y = summaryY + 100;

      /*
       * ========================================
       * CLIENT INFORMATION
       * ========================================
       */

      addSection(
        doc,
        "Client Information",
        blue,
        borderGray
      );

      addField(
        doc,
        "Client Name",
        data.client_name
      );

      addField(
        doc,
        "Email",
        data.email
      );

      addField(
        doc,
        "Phone",
        data.phone
      );

      addField(
        doc,
        "Industry",
        data.industry
      );

      /*
       * ========================================
       * BUSINESS INFORMATION
       * ========================================
       */

      addSection(
        doc,
        "Business Information",
        blue,
        borderGray
      );

      addField(
        doc,
        "Business Name",
        data.business_name
      );

      addField(
        doc,
        "Business Slogan",
        data.business_slogan
      );

      /*
       * ========================================
       * LOGO & BRANDING
       * ========================================
       */

      addSection(
        doc,
        "Logo & Branding",
        blue,
        borderGray
      );

      addField(
        doc,
        "Logo Choice",
        data.logo_choice
      );

      addField(
        doc,
        "Color Preferences",
        data.color_preferences
      );

      /*
       * ========================================
       * WEBSITE INFORMATION
       * ========================================
       */

      addSection(
        doc,
        "Website Information",
        blue,
        borderGray
      );

      addField(
        doc,
        "Has Existing Website",
        data.has_website
      );

      addField(
        doc,
        "Existing Website",
        data.existing_website_url,
        true
      );

      addField(
        doc,
        "Website Purpose",
        data.purpose,
        true
      );

      addField(
        doc,
        "Competitors / Inspiration",
        data.competitors,
        true
      );

      /*
       * ========================================
       * FEATURES & REQUIREMENTS
       * ========================================
       */

      addSection(
        doc,
        "Features & Requirements",
        blue,
        borderGray
      );

      addField(
        doc,
        "Payment Integration",
        data.payment_integration
      );

      addField(
        doc,
        "Specific Requirements",
        data.specific_requirements,
        true
      );

      addField(
        doc,
        "Content / Pages",
        data.content_pages,
        true
      );

      addField(
        doc,
        "Other Suggestions",
        data.other_suggestions,
        true
      );

      /*
       * ========================================
       * DOMAIN
       * ========================================
       */

      addSection(
        doc,
        "Domain",
        blue,
        borderGray
      );

      addField(
        doc,
        "Has Domain",
        data.has_domain
      );

      addField(
        doc,
        "Domain Provider",
        data.domain_provider
      );

      addField(
        doc,
        "Domain Username",
        data.domain_username
      );

      /*
       * ========================================
       * HOSTING
       * ========================================
       */

      addSection(
        doc,
        "Hosting",
        blue,
        borderGray
      );

      addField(
        doc,
        "Has Hosting",
        data.has_hosting
      );

      addField(
        doc,
        "Hosting Provider",
        data.hosting_provider
      );

      addField(
        doc,
        "Hosting Username",
        data.hosting_username
      );

      /*
       * ========================================
       * CLIENT NOTES
       * ========================================
       */

      addSection(
        doc,
        "Client Notes",
        blue,
        borderGray
      );

      addField(
        doc,
        "Notes",
        data.notes,
        true
      );

      /*
       * ========================================
       * SECURITY NOTICE
       * ========================================
       */

      if (doc.y > doc.page.height - 180) {
        doc.addPage();
      }

      doc.moveDown(1);

      const securityY = doc.y;

      doc
        .roundedRect(
          50,
          securityY,
          doc.page.width - 100,
          65,
          8
        )
        .fillColor("#FFF7ED")
        .fill();

      doc
        .fillColor("#9A3412")
        .font("Helvetica-Bold")
        .fontSize(10)
        .text(
          "Security Notice",
          65,
          securityY + 12
        );

      doc
        .fillColor("#7C2D12")
        .font("Helvetica")
        .fontSize(8)
        .text(
          "Domain and hosting passwords are intentionally excluded from this document.",
          65,
          securityY + 30,
          {
            width: doc.page.width - 130,
          }
        );

      /*
       * ========================================
       * CLIENT VERIFICATION
       * ========================================
       */

      doc.moveDown(1.2);

      if (doc.y > doc.page.height - 230) {
        doc.addPage();
      }

      addSection(
        doc,
        "Client Verification",
        green,
        borderGray
      );

      doc
        .fillColor(gray)
        .font("Helvetica")
        .fontSize(9)
        .text(
          "This document summarizes the information provided through the website questionnaire. Please review the requirements above and confirm that they accurately represent your project.",
          {
            width: doc.page.width - 100,
            lineGap: 3,
          }
        );

      doc.moveDown(1.2);

      const lineWidth = 210;

      doc
        .strokeColor("#9CA3AF")
        .lineWidth(0.7)
        .moveTo(50, doc.y)
        .lineTo(50 + lineWidth, doc.y)
        .stroke();

      doc
        .fillColor(gray)
        .fontSize(8)
        .text(
          "Client Name",
          50,
          doc.y + 6
        );

      doc
        .moveTo(310, doc.y - 1)
        .lineTo(520, doc.y - 1)
        .stroke();

      doc
        .fillColor(gray)
        .fontSize(8)
        .text(
          "Date",
          310,
          doc.y + 6
        );

      doc.moveDown(2.5);

      doc
        .moveTo(50, doc.y)
        .lineTo(260, doc.y)
        .stroke();

      doc
        .fillColor(gray)
        .fontSize(8)
        .text(
          "Client Confirmation / Approval",
          50,
          doc.y + 6
        );

      /*
       * ========================================
       * FOOTER
       * ========================================
       */

      addFooter(doc);

      /*
       * ========================================
       * FINISH PDF
       * ========================================
       */

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
}

/*
 * ========================================
 * SECTION TITLE
 * ========================================
 */

function addSection(
  doc: PDFKit.PDFDocument,
  title: string,
  color: string,
  borderColor: string
) {
  if (doc.y > doc.page.height - 130) {
    doc.addPage();
  }

  doc.moveDown(0.8);

  const sectionY = doc.y;

  doc
    .fillColor(color)
    .roundedRect(
      50,
      sectionY,
      4,
      18,
      2
    )
    .fill();

  doc
    .fillColor("#111827")
    .font("Helvetica-Bold")
    .fontSize(12)
    .text(
      title,
      64,
      sectionY + 2
    );

  doc
    .strokeColor(borderColor)
    .lineWidth(0.7)
    .moveTo(50, sectionY + 26)
    .lineTo(
      doc.page.width - 50,
      sectionY + 26
    )
    .stroke();

  doc.y = sectionY + 38;
}

/*
 * ========================================
 * FIELD
 * ========================================
 */

function addField(
  doc: PDFKit.PDFDocument,
  label: string,
  value?: unknown,
  wide = false
) {
  const text =
    value === null ||
    value === undefined ||
    String(value).trim() === ""
      ? "Not provided"
      : String(value);

  if (doc.y > doc.page.height - 110) {
    doc.addPage();
  }

  const startY = doc.y;

  doc
    .fillColor("#6B7280")
    .font("Helvetica-Bold")
    .fontSize(8)
    .text(
      label.toUpperCase(),
      50,
      startY,
      {
        width: doc.page.width - 100,
      }
    );

  doc
    .fillColor("#111827")
    .font("Helvetica")
    .fontSize(9)
    .text(
      text,
      50,
      startY + 13,
      {
        width: wide
          ? doc.page.width - 100
          : doc.page.width - 100,
        lineGap: 3,
      }
    );

  doc.moveDown(0.65);
}

/*
 * ========================================
 * FOOTER
 * ========================================
 */

function addFooter(
  doc: PDFKit.PDFDocument
) {
  const footerY =
    doc.page.height - 38;

  doc
    .strokeColor("#E5E7EB")
    .lineWidth(0.5)
    .moveTo(50, footerY - 8)
    .lineTo(
      doc.page.width - 50,
      footerY - 8
    )
    .stroke();

  doc
    .fillColor("#9CA3AF")
    .font("Helvetica")
    .fontSize(7.5)
    .text(
      "TechCore Studio • Website Project Requirements",
      50,
      footerY,
      {
        width: 300,
      }
    );

  doc
    .text(
      "Confidential Project Document",
      300,
      footerY,
      {
        width: 245,
        align: "right",
      }
    );
}