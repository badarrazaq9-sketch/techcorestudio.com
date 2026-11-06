import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import PDFDocument from "pdfkit";

export const runtime = "nodejs";

type PdfSection = {
  number: string;
  title: string;
  body: string;
};

const COLORS = {
  navy: "#071A33",
  navy2: "#0B2545",
  blue: "#1677FF",
  lightBlue: "#EAF3FF",
  text: "#182230",
  muted: "#657184",
  border: "#DCE4EE",
  white: "#FFFFFF",
  watermark: "#E8EEF5",
  footer: "#7A8798",
  card: "#F7F9FC",
};

const PAGE = {
  width: 612,
  height: 792,
  left: 48,
  right: 48,
  top: 118,
  bottom: 58,
};

function clean(value: FormDataEntryValue | null): string {
  if (typeof value !== "string") return "";
  return value.trim();
}

function safeFileName(value: string) {
  return (
    value
      .replace(/[^a-z0-9]+/gi, "-")
      .replace(/^-+|-+$/g, "")
      .toLowerCase() || "client"
  );
}

/* =========================================================
   PAGE HEADER / WATERMARK / FOOTER
   ========================================================= */

function drawPageChrome(
  doc: PDFKit.PDFDocument,
  companyName: string,
  website: string,
  pageNumber: number
) {
  const pageWidth = PAGE.width;
  const pageHeight = PAGE.height;

  // =======================================================
  // PAGE BACKGROUND
  // =======================================================

  doc
    .save()
    .rect(0, 0, pageWidth, pageHeight)
    .fill(COLORS.white)
    .restore();

  // =======================================================
  // WATERMARK
  // =======================================================

  doc
    .save()
    .opacity(0.055)
    .fillColor(COLORS.navy)
    .font("Helvetica-Bold")
    .fontSize(48)
    .text(companyName.toUpperCase(), 0, 355, {
      width: pageWidth,
      align: "center",
    })
    .fontSize(28)
    .text("CONFIDENTIAL", 0, 410, {
      width: pageWidth,
      align: "center",
    })
    .restore();

  // =======================================================
  // TOP HEADER
  // =======================================================

  doc
    .save()
    .rect(0, 0, pageWidth, 91)
    .fill(COLORS.navy)
    .restore();

  // Blue diagonal accent
  doc
    .save()
    .moveTo(pageWidth - 105, 91)
    .lineTo(pageWidth, 30)
    .lineTo(pageWidth, 91)
    .closePath()
    .fill(COLORS.blue)
    .restore();

  doc
    .save()
    .moveTo(pageWidth - 65, 91)
    .lineTo(pageWidth, 50)
    .lineTo(pageWidth, 91)
    .closePath()
    .fill("#42A5FF")
    .restore();

  // Company name
  doc
    .font("Helvetica-Bold")
    .fontSize(18)
    .fillColor(COLORS.white)
    .text(companyName.toUpperCase(), PAGE.left, 24, {
      width: 260,
    });

  doc
    .font("Helvetica")
    .fontSize(8)
    .fillColor("#C9D6E5")
    .text(
      "CONFIDENTIAL BUSINESS DOCUMENT",
      PAGE.left,
      50
    );

  // Website
  if (website) {
    doc
      .font("Helvetica")
      .fontSize(8.5)
      .fillColor("#D9E4F1")
      .text(website, pageWidth - 220, 31, {
        width: 150,
        align: "right",
      });
  }

  // =======================================================
  // FOOTER
  // =======================================================

const footerY = pageHeight - PAGE.bottom - 10;
  doc
    .save()
    .moveTo(PAGE.left, footerY - 10)
    .lineTo(pageWidth - PAGE.right, footerY - 10)
    .lineWidth(0.7)
    .strokeColor(COLORS.border)
    .stroke()
    .restore();

  doc
    .font("Helvetica-Bold")
    .fontSize(7.5)
    .fillColor(COLORS.navy)
    .text(companyName.toUpperCase(), PAGE.left, footerY);

  doc
    .font("Helvetica")
    .fontSize(7.5)
    .fillColor(COLORS.footer)
    .text("CONFIDENTIAL", pageWidth / 2 - 45, footerY, {
      width: 90,
      align: "center",
    });

  doc
    .font("Helvetica")
    .fontSize(7.5)
    .fillColor(COLORS.footer)
    .text(
      String(pageNumber).padStart(2, "0"),
      pageWidth - PAGE.right - 35,
      footerY,
      {
        width: 35,
        align: "right",
      }
    );
}

/* =========================================================
   NDA SECTION
   ========================================================= */

function drawSection(
  doc: PDFKit.PDFDocument,
  section: PdfSection
) {
  const contentWidth =
    PAGE.width - PAGE.left - PAGE.right;

  const headingHeight = 30;

  // Set font BEFORE measuring text.
  doc.font("Helvetica").fontSize(10);

  const bodyHeight = doc.heightOfString(section.body, {
    width: contentWidth - 8,
    lineGap: 4,
  });

  const requiredHeight =
    headingHeight + bodyHeight + 25;

  // Keep heading and body together whenever possible.
  if (
    doc.y + requiredHeight >
    PAGE.height - PAGE.bottom
  ) {
    doc.addPage();
  }

  const headingY = doc.y;

  // =======================================================
  // NUMBER BLOCK
  // =======================================================

  doc
    .save()
    .roundedRect(
      PAGE.left,
      headingY,
      28,
      28,
      5
    )
    .fill(COLORS.blue)
    .restore();

  doc
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor(COLORS.white)
    .text(section.number, PAGE.left, headingY + 8, {
      width: 28,
      align: "center",
    });

  // =======================================================
  // SECTION TITLE
  // =======================================================

  doc
    .font("Helvetica-Bold")
    .fontSize(12)
    .fillColor(COLORS.navy)
    .text(
      section.title.toUpperCase(),
      PAGE.left + 40,
      headingY + 7
    );

  const titleWidth = doc.widthOfString(
    section.title.toUpperCase()
  );

  // =======================================================
  // BLUE LINE
  // =======================================================

  doc
    .moveTo(
      PAGE.left + 40 + titleWidth + 14,
      headingY + 14
    )
    .lineTo(
      PAGE.width - PAGE.right,
      headingY + 14
    )
    .lineWidth(0.8)
    .strokeColor("#A8CFFF")
    .stroke();

  doc.y = headingY + 40;

  // =======================================================
  // SECTION BODY
  // =======================================================

  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(COLORS.text)
    .text(section.body, {
      width: contentWidth,
      lineGap: 4,
      align: "left",
    });

  doc.y += 19;
}

/* =========================================================
   INFORMATION CARD
   ========================================================= */

function drawInfoCard(
  doc: PDFKit.PDFDocument,
  title: string,
  items: Array<[string, string]>
) {
  const x = PAGE.left;

  const width =
    PAGE.width - PAGE.left - PAGE.right;

  const rows = Math.ceil(items.length / 2);
  const rowHeight = 47;
  const headerHeight = 30;

  const height =
    headerHeight + rows * rowHeight;

  if (
    doc.y + height >
    PAGE.height - PAGE.bottom
  ) {
    doc.addPage();
  }

  const y = doc.y;

  // =======================================================
  // CARD BACKGROUND
  // =======================================================

  doc
    .save()
    .roundedRect(
      x,
      y,
      width,
      height,
      6
    )
    .fill(COLORS.card)
    .restore();

  doc
    .roundedRect(
      x,
      y,
      width,
      height,
      6
    )
    .lineWidth(0.7)
    .strokeColor(COLORS.border)
    .stroke();

  // =======================================================
  // CARD HEADER
  // =======================================================

  doc
    .save()
    .roundedRect(
      x,
      y,
      width,
      headerHeight,
      6
    )
    .fill(COLORS.lightBlue)
    .restore();

  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(COLORS.navy)
    .text(
      title.toUpperCase(),
      x + 12,
      y + 10
    );

  // =======================================================
  // CARD CONTENT
  // =======================================================

  items.forEach(([label, value], index) => {
    const column = index % 2;
    const row = Math.floor(index / 2);

    const cellX =
      x +
      column * (width / 2) +
      12;

    const cellY =
      y +
      headerHeight +
      row * rowHeight +
      9;

    doc
      .font("Helvetica-Bold")
      .fontSize(7)
      .fillColor(COLORS.muted)
      .text(
        label.toUpperCase(),
        cellX,
        cellY
      );

    doc
      .font("Helvetica")
      .fontSize(9)
      .fillColor(COLORS.text)
      .text(
        value || "Not provided",
        cellX,
        cellY + 13,
        {
          width: width / 2 - 25,
          ellipsis: true,
        }
      );
  });

  doc.y = y + height + 22;
}

/* =========================================================
   SIGNATURE BLOCK
   ========================================================= */

function drawSignatures(
  doc: PDFKit.PDFDocument,
  companyName: string,
  representative: string,
  representativeTitle: string,
  clientName: string
) {
  const available =
    PAGE.height - PAGE.bottom - doc.y;

  if (available < 245) {
    doc.addPage();
  }

  const y = doc.y;

  // =======================================================
  // SIGNATURE TITLE
  // =======================================================

  doc
    .font("Helvetica-Bold")
    .fontSize(12)
    .fillColor(COLORS.navy)
    .text(
      "SIGNATURES",
      PAGE.left,
      y
    );

  // =======================================================
  // SIGNATURE DESCRIPTION
  // =======================================================

  doc
    .font("Helvetica")
    .fontSize(9.5)
    .fillColor(COLORS.text)
    .text(
      "By signing below, the parties acknowledge that they have read, understood, and agree to be bound by the terms and conditions of this Non-Disclosure Agreement.",
      PAGE.left,
      y + 25,
      {
        width:
          PAGE.width -
          PAGE.left -
          PAGE.right,
        lineGap: 4,
      }
    );

  const cardY = y + 82;

  const gap = 16;

  const cardWidth =
    (
      PAGE.width -
      PAGE.left -
      PAGE.right -
      gap
    ) / 2;

  const cardHeight = 155;

  // =======================================================
  // COMPANY CARD
  // =======================================================

  doc
    .roundedRect(
      PAGE.left,
      cardY,
      cardWidth,
      cardHeight,
      6
    )
    .fillAndStroke(
      "#F7F9FC",
      COLORS.border
    );

  // =======================================================
  // CLIENT CARD
  // =======================================================

  doc
    .roundedRect(
      PAGE.left + cardWidth + gap,
      cardY,
      cardWidth,
      cardHeight,
      6
    )
    .fillAndStroke(
      "#F7F9FC",
      COLORS.border
    );

  // =======================================================
  // CARD HEADERS
  // =======================================================

  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(COLORS.navy)
    .text(
      companyName.toUpperCase(),
      PAGE.left + 12,
      cardY + 12,
      {
        width: cardWidth - 24,
      }
    );

  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(COLORS.navy)
    .text(
      "CLIENT",
      PAGE.left +
        cardWidth +
        gap +
        12,
      cardY + 12
    );

  // =======================================================
  // SIGNATURE LINES
  // =======================================================

  const lineY = cardY + 85;

  doc
    .moveTo(
      PAGE.left + 12,
      lineY
    )
    .lineTo(
      PAGE.left +
        cardWidth -
        12,
      lineY
    )
    .strokeColor("#8794A6")
    .stroke();

  doc
    .moveTo(
      PAGE.left +
        cardWidth +
        gap +
        12,
      lineY
    )
    .lineTo(
      PAGE.left +
        cardWidth * 2 +
        gap -
        12,
      lineY
    )
    .strokeColor("#8794A6")
    .stroke();

  // =======================================================
  // COMPANY SIGNATORY
  // =======================================================

  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(COLORS.text)
    .text(
      representative ||
        "Authorized Representative",
      PAGE.left + 12,
      lineY + 10
    );

  doc
    .font("Helvetica")
    .fontSize(8)
    .fillColor(COLORS.muted)
    .text(
      representativeTitle ||
        "Authorized Representative",
      PAGE.left + 12,
      lineY + 25
    );

  // =======================================================
  // CLIENT SIGNATORY
  // =======================================================

  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(COLORS.text)
    .text(
      clientName,
      PAGE.left +
        cardWidth +
        gap +
        12,
      lineY + 10
    );

  doc
    .font("Helvetica")
    .fontSize(8)
    .fillColor(COLORS.muted)
    .text(
      "Authorized Signature",
      PAGE.left +
        cardWidth +
        gap +
        12,
      lineY + 25
    );

  // =======================================================
  // DATES
  // =======================================================

  doc
    .font("Helvetica")
    .fontSize(8)
    .fillColor(COLORS.muted)
    .text(
      "Date: __________________________",
      PAGE.left + 12,
      cardY + 128
    );

  doc.text(
    "Date: __________________________",
    PAGE.left +
      cardWidth +
      gap +
      12,
    cardY + 128
  );

  doc.y =
    cardY +
    cardHeight +
    10;
}

/* =========================================================
   POST
   ========================================================= */

export async function POST(request: Request) {
  try {
    // =======================================================
    // ADMIN AUTH
    // =======================================================

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

    // =======================================================
    // FORM DATA
    // =======================================================

    const formData =
      await request.formData();

    const companyName =
      clean(formData.get("companyName")) ||
      "TechCore Studio";

    const website =
      clean(formData.get("website")) ||
      "https://techcorestudio.com";

    const companyEmail =
      clean(
        formData.get("companyEmail")
      );

    const companyPhone =
      clean(
        formData.get("companyPhone")
      );

    const representative =
      clean(
        formData.get("representative")
      ) ||
      "Ryan Haster";

    const representativeTitle =
      clean(
        formData.get(
          "representativeTitle"
        )
      ) ||
      "Sr. Business Consultant";

    const clientName =
      clean(
        formData.get("clientName")
      );

    const clientEmail =
      clean(
        formData.get("clientEmail")
      );

    const clientPhone =
      clean(
        formData.get("clientPhone")
      );

    const businessName =
      clean(
        formData.get("businessName")
      );

    const agreementTitle =
      clean(
        formData.get(
          "agreementTitle"
        )
      ) ||
      "Non-Disclosure Agreement";

    const effectiveDate =
      clean(
        formData.get(
          "effectiveDate"
        )
      ) ||
      new Date().toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      );

    const projectPurpose =
      clean(
        formData.get(
          "projectPurpose"
        )
      );

    const term =
      clean(
        formData.get("term")
      ) ||
      "This Agreement shall remain in effect for three (3) years from the Effective Date.";

    const governingLaw =
      clean(
        formData.get(
          "governingLaw"
        )
      ) ||
      "This Agreement shall be governed by and construed in accordance with the laws of the United States and the applicable state jurisdiction. Any disputes arising under this Agreement shall be subject to the jurisdiction of the appropriate courts within such state.";

    if (
      !clientName ||
      !clientEmail
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Client name and client email are required.",
        },
        { status: 400 }
      );
    }

    // =======================================================
    // OPTIONAL LOGO
    // =======================================================

    const logo =
      formData.get("logo");

    let logoBuffer:
      | Buffer
      | null = null;

    if (
      logo instanceof File &&
      logo.size > 0
    ) {
      if (
        logo.size >
        5 * 1024 * 1024
      ) {
        return NextResponse.json(
          {
            success: false,
            error:
              "Logo must be smaller than 5 MB.",
          },
          { status: 400 }
        );
      }

      if (
        !logo.type.startsWith(
          "image/"
        )
      ) {
        return NextResponse.json(
          {
            success: false,
            error:
              "Logo must be an image.",
          },
          { status: 400 }
        );
      }

      logoBuffer = Buffer.from(
        await logo.arrayBuffer()
      );
    }

    console.log("");
    console.log(
      "========================================"
    );
    console.log(
      "📄 GENERATING NDA PDF"
    );
    console.log(
      "👤 Client:",
      clientName
    );
    console.log(
      "📧 Email:",
      clientEmail
    );
    console.log(
      "========================================"
    );

    // =======================================================
    // CREATE PDF
    // =======================================================

    const doc =
      new PDFDocument({
        size: "LETTER",
        margins: {
          top: PAGE.top,
          bottom: PAGE.bottom,
          left: PAGE.left,
          right: PAGE.right,
        },
        info: {
          Title:
            agreementTitle,
          Author:
            companyName,
          Subject:
            "Non-Disclosure Agreement",
        },
      });

    const chunks: Buffer[] =
      [];

    doc.on(
      "data",
      (chunk) => {
        chunks.push(chunk);
      }
    );

    const pdfPromise =
      new Promise<Buffer>(
        (resolve, reject) => {
          doc.on(
            "end",
            () => {
              resolve(
                Buffer.concat(
                  chunks
                )
              );
            }
          );

          doc.on(
            "error",
            reject
          );
        }
      );

    // =======================================================
    // PAGE CHROME
    // =======================================================

    let pageNumber = 1;

    drawPageChrome(
      doc,
      companyName,
      website,
      pageNumber
    );

    doc.y = PAGE.top;

    doc.on(
      "pageAdded",
      () => {
        pageNumber += 1;

        drawPageChrome(
          doc,
          companyName,
          website,
          pageNumber
        );

        doc.y = PAGE.top;
      }
    );

    // =======================================================
    // OPTIONAL LOGO
    // =======================================================

    if (logoBuffer) {
      try {
        doc.image(
          logoBuffer,
          PAGE.left,
          PAGE.top - 8,
          {
            fit: [120, 42],
            valign: "center",
          }
        );
      } catch {
        // Ignore invalid optional logo.
      }
    }

    // =======================================================
    // TITLE
    // =======================================================

    doc
      .font("Helvetica-Bold")
      .fontSize(25)
      .fillColor(COLORS.navy)
      .text(
        agreementTitle.toUpperCase(),
        PAGE.left,
        doc.y + 5,
        {
          width:
            PAGE.width -
            PAGE.left -
            PAGE.right,
        }
      );

    doc.y += 5;

    doc
      .font("Helvetica")
      .fontSize(8.5)
      .fillColor(COLORS.muted)
      .text(
        "CONFIDENTIAL BUSINESS INFORMATION",
        PAGE.left,
        doc.y + 6
      );

    doc.y += 25;

    // =======================================================
    // AGREEMENT INFORMATION
    // =======================================================

    drawInfoCard(
      doc,
      "Agreement Information",
      [
        [
          "Company",
          companyName,
        ],
        [
          "Effective Date",
          effectiveDate,
        ],
        [
          "Representative",
          representative,
        ],
        [
          "Title",
          representativeTitle,
        ],
        [
          "Website",
          website,
        ],
        [
          "Email",
          companyEmail,
        ],
      ]
    );

    // =======================================================
    // CLIENT INFORMATION
    // =======================================================

    drawInfoCard(
      doc,
      "Client Information",
      [
        [
          "Client Name",
          clientName,
        ],
        [
          "Client Email",
          clientEmail,
        ],
        [
          "Business Name",
          businessName,
        ],
        [
          "Client Phone",
          clientPhone,
        ],
      ]
    );

    // =======================================================
    // 01 PARTIES
    // =======================================================

    drawSection(doc, {
      number: "01",
      title: "Parties",
      body: `This Non-Disclosure Agreement ("Agreement") is entered into between ${companyName} ("Company") and ${clientName} ("Client").`,
    });

    // =======================================================
    // 02 PURPOSE
    // =======================================================

    drawSection(doc, {
      number: "02",
      title: "Purpose",
      body:
        projectPurpose ||
        "The Parties wish to explore a potential business relationship. During these discussions, either Party may disclose confidential or proprietary information. The purpose of this Agreement is to protect such information from unauthorized use or disclosure.",
    });

    // =======================================================
    // 03 CONFIDENTIAL INFORMATION
    // =======================================================

    drawSection(doc, {
      number: "03",
      title:
        "Definition of Confidential Information",
      body:
        "Confidential Information includes, but is not limited to, business plans, project concepts, software architecture, source code, technical documentation, UI/UX designs, wireframes, Figma designs, prototypes, user flows, product roadmaps, financial information, customer information, login credentials, APIs, trade secrets, marketing strategies, and any other information disclosed in written, electronic, verbal, or any other form that is identified as confidential or would reasonably be considered confidential.",
    });

    // =======================================================
    // 04 OBLIGATIONS
    // =======================================================

    drawSection(doc, {
      number: "04",
      title:
        "Confidentiality Obligations",
      body:
        "Each Party agrees to maintain the confidentiality of all Confidential Information, use Confidential Information solely for evaluating and discussing the proposed project, not disclose Confidential Information to any third party without prior written consent, and take reasonable measures to protect Confidential Information from unauthorized access, use, or disclosure.",
    });

    // =======================================================
    // 05 EXCLUSIONS
    // =======================================================

    drawSection(doc, {
      number: "05",
      title: "Exclusions",
      body:
        "This Agreement shall not apply to information that is or becomes publicly available through no breach of this Agreement; was lawfully known by the receiving Party before disclosure; is independently developed without reference to the Confidential Information; is lawfully obtained from a third party without confidentiality restrictions; or must be disclosed pursuant to applicable law or a valid court order.",
    });

    // =======================================================
    // 06 OWNERSHIP
    // =======================================================

    drawSection(doc, {
      number: "06",
      title: "Ownership",
      body:
        "All Confidential Information shall remain the sole property of the disclosing Party. Nothing contained in this Agreement shall be interpreted as granting any license, ownership rights, or intellectual property rights to the receiving Party.",
    });

    // =======================================================
    // 07 TERM
    // =======================================================

    drawSection(doc, {
      number: "07",
      title: "Term",
      body: term,
    });

    // =======================================================
    // 08 RETURN / DESTRUCTION
    // =======================================================

    drawSection(doc, {
      number: "08",
      title:
        "Return or Destruction",
      body:
        "Upon written request of the disclosing Party, the receiving Party shall promptly return or securely destroy all Confidential Information, including copies, summaries, notes, and electronic records, and certify such destruction if requested.",
    });

    // =======================================================
    // 09 REMEDIES
    // =======================================================

    drawSection(doc, {
      number: "09",
      title: "Remedies",
      body:
        "Any unauthorized use or disclosure of Confidential Information shall constitute a breach of this Agreement. The disclosing Party shall be entitled to seek all remedies available under applicable law, including injunctive relief and monetary damages, where appropriate.",
    });

    // =======================================================
    // 10 GOVERNING LAW
    // =======================================================

    drawSection(doc, {
      number: "10",
      title: "Governing Law",
      body: governingLaw,
    });

    // =======================================================
    // 11 SIGNATURES
    // =======================================================

    drawSignatures(
      doc,
      companyName,
      representative,
      representativeTitle,
      clientName
    );

    // =======================================================
    // FINALIZE
    // =======================================================

    doc.end();

    const pdfBuffer =
      await pdfPromise;

    const filename =
      `NDA-${safeFileName(
        clientName
      )}.pdf`;

    console.log(
      "✅ NDA PDF generated successfully."
    );

    return new NextResponse(
      pdfBuffer as BodyInit,
      {
        status: 200,
        headers: {
          "Content-Type":
            "application/pdf",
          "Content-Disposition":
            `attachment; filename="${filename}"`,
          "Content-Length":
            String(
              pdfBuffer.length
            ),
          "Cache-Control":
            "no-store",
        },
      }
    );
  } catch (error) {
    console.error(
      "❌ NDA PDF generation error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to generate NDA PDF.",
      },
      { status: 500 }
    );
  }
}