import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// 1. تحديد Schema التحقق باستخدام Zod
const contactSchema = z.object({
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters long'),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // 2. التحقق من البيانات المستلمة في السيرفر
        const validation = contactSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                { errors: validation.error.format() },
                { status: 400 }
            );
        }

        const { email, message } = validation.data;

        // 3. إعداد Transporter الخاص بـ Nodemailer
        // (تأكد من وضع هذه المتغيرات في ملف .env.local الخاص بك)
        const transporter = nodemailer.createTransport({
            service: 'gmail', // أو أي خدمة بريد أخرى تفضلها
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // App Password الخاص بجوجل وليس الرمز العادي
            },
        });

        // 4. إعداد محتوى الإيميل
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_TO_RECEIVE || process.env.EMAIL_USER, // البريد المستلم (بريدك)
            subject: `New Portfolio Message from ${email}`,
            text: message,
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2>New Message from your Portfolio</h2>
          <p><strong>Sender Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; rounded: 8px;">${message}</div>
        </div>
      `,
        };

        // 5. الإرسال الفعلي
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

    } catch (error) {
        console.error('Nodemailer error:', error);
        return NextResponse.json({ message: 'Something went wrong.' }, { status: 500 });
    }
}