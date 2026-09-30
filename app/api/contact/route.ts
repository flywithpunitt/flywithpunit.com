import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'flywithpunit@gmail.com'
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>'

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email is not configured yet.' },
        { status: 503 }
      )
    }

    const body = await request.json()
    const name = String(body?.name || '').trim()
    const email = String(body?.email || '').trim()
    const message = String(body?.message || '').trim()
    const honeypot = String(body?.company || '').trim()

    // Silent success for bots
    if (honeypot) {
      return NextResponse.json({ ok: true })
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Please fill in all fields.' }, { status: 400 })
    }

    if (name.length > 120 || email.length > 200 || message.length > 5000) {
      return NextResponse.json({ error: 'Message is too long.' }, { status: 400 })
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!emailOk) {
      return NextResponse.json({ error: 'That email looks off.' }, { status: 400 })
    }

    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Portfolio note from ${name}`,
      text: [
        `New message from your portfolio.`,
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        message,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111;">
          <p style="margin: 0 0 16px;"><strong>New message from your portfolio</strong></p>
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin: 0 0 16px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Could not send right now. Try again.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}
