import { type NextRequest, NextResponse } from "next/server"

export const runtime = "edge"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    console.log("[Contact Form Submission]", {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrate with email service like Resend or SendGrid
    // Example with Resend (add RESEND_API_KEY to environment variables):
    // const { data, error } = await resend.emails.send({
    //   from: 'noreply@empirestatebulldogs.com',
    //   to: 'info@empirestatebulldogs.com',
    //   replyTo: email,
    //   subject: `New Contact Form Submission: ${subject}`,
    //   html: `
    //     <h2>New Message from ${name}</h2>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //   `,
    // })

    return NextResponse.json(
      {
        success: true,
        message: "Message received. We will contact you soon!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[Contact Form Error]", error)
    return NextResponse.json({ error: "Failed to process your message. Please try again." }, { status: 500 })
  }
}
