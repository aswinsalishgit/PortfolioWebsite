"use server";

import { supabase } from "../../lib/supabase";
import { redirect } from "next/navigation";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function submitInquiry(formData: FormData) {
  const name = (formData.get("name") as string) || "";
  const email = (formData.get("email") as string) || "";
  const role = (formData.get("role") as string) || "";
  const message = (formData.get("message") as string) || "";

  if (!name || !email || !role || !message) {
    throw new Error("Missing required fields");
  }

  // 1. Store in Supabase
  const { error } = await supabase
    .from("contact_inquiries")
    .insert([
      { name, email, role, message }
    ]);

  if (error) {
    console.error("Supabase Error:", error);
    throw new Error("Failed to log mission parameters.");
  }

  // 2. Send Email Notification via Resend
  try {
    await resend.emails.send({
      from: "Portfolio Inquiry <hello@aswinsalish.me>",
      to: "aswinpulikottil@gmail.com",
      replyTo: email, // This allows you to reply directly to the sender
      subject: `Portfolio Inquiry: ${name} (${role})`,
      html: `
        <div style="font-family: 'Helvetica', 'Arial', sans-serif; background: #f9f9f9; padding: 40px; color: #1a1a1a;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 40px; border: 1px solid #eeeeee; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
            <h2 style="margin: 0 0 30px 0; font-size: 20px; border-bottom: 2px solid #ccff00; padding-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">
              New Project Inquiry
            </h2>
            
            <div style="margin-bottom: 30px;">
              <p style="margin: 5px 0; color: #666; font-size: 12px; text-transform: uppercase;">From</p>
              <p style="margin: 0; font-size: 16px; font-weight: bold;">${name}</p>
            </div>

            <div style="margin-bottom: 30px;">
              <p style="margin: 5px 0; color: #666; font-size: 12px; text-transform: uppercase;">Contact Info</p>
              <p style="margin: 0; font-size: 16px;">${email}</p>
            </div>

            <div style="margin-bottom: 30px;">
              <p style="margin: 5px 0; color: #666; font-size: 12px; text-transform: uppercase;">Category</p>
              <p style="margin: 0; font-size: 16px;">${role}</p>
            </div>

            <div style="margin-top: 40px; padding-top: 30px; border-top: 1px solid #eeeeee;">
              <p style="margin: 0 0 15px 0; color: #666; font-size: 12px; text-transform: uppercase;">Message Details</p>
              <div style="background: #fcfcfc; padding: 25px; border-left: 3px solid #ccff00; line-height: 1.6; font-size: 15px; color: #333; font-style: italic;">
                "${message}"
              </div>
            </div>

            <p style="margin-top: 50px; font-size: 11px; color: #999; text-align: center; text-transform: uppercase; letter-spacing: 2px;">
              Sent via aswinsalish.me
            </p>
          </div>
        </div>
      `,
    });
  } catch (emailError) {
    // We don't want to crash the whole process if only the email fails
    console.error("Resend Error:", emailError);
  }

  redirect("/contact/success");
}
