import { Resend } from "resend";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();
    const config = {
        resendDomain: process.env.RESEND_DOMAIN_EMAIL || null,
        clientEmail: process.env.CLIENT_EMAIL || null,
        apiKey: process.env.RESEND_API_KEY || null,
    }

    if (!config.resendDomain || !config.clientEmail || !config.apiKey) {
        return Response.json({ error: "Email configuration is missing" }, { status: 500 });
    }

    const resend = new Resend(config.apiKey);

    await resend.emails.send({
      from: config.resendDomain,
      to: ['donslice6@gmail.com', config.clientEmail],
      subject: subject,
      html: `
        <h2>New Message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
  console.log(error.message)
    return Response.json({ error: "Email failed" }, { status: 500 });
  }
}
