// /app/api/send/route.js
import { Resend } from 'resend';
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) { // Accepting req object as a parameter
  try {
    const { email, message, subject } = await req.json();
    console.log(email)
    
    // Sending email using Resend
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'omar-hassan219@hotmail.com',
      subject: subject, // Use the subject received from the client
      react: (
        <>
        <p>Email sent from {email}</p>
          <p>{message}</p> {/* Use the message received from the client */}
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: error.message });
  }
}
