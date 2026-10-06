import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { email, password } = body;

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      console.error("❌ ADMIN_EMAIL or ADMIN_PASSWORD is missing");

      return NextResponse.json(
        {
          success: false,
          error: "Admin login is not configured.",
        },
        { status: 500 }
      );
    }

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          error: "Email and password are required.",
        },
        { status: 400 }
      );
    }

    // Check admin credentials
    if (email !== adminEmail || password !== adminPassword) {
      console.log("❌ Failed admin login attempt:", email);

      return NextResponse.json(
        {
          success: false,
          error: "Invalid email or password.",
        },
        { status: 401 }
      );
    }

    // Create secure HTTP-only login cookie
    const response = NextResponse.json({
      success: true,
      message: "Login successful.",
    });

    response.cookies.set("techcore_admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    console.log("✅ Admin login successful:", email);

    return response;
  } catch (error) {
    console.error("❌ Admin login error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}