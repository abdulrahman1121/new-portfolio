import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // For now, just log the message and return success
  // You can set up email functionality later with Resend or another service
  console.log("Contact form submission:", {
    name,
    email,
    message,
    timestamp: new Date().toISOString()
  });

  // Simulate successful email send
  return NextResponse.json({ 
    success: true,
    message: "Thank you for your message! I'll get back to you soon."
  });
}
