import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {

  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey || apiKey === 're_your_api_key_here') {
      return NextResponse.json(
        {
          success: false,
          error: 'RESEND_API_KEY chưa được cấu hình. Vui lòng cập nhật API Key thật trong file .env.local',
        },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Vui lòng điền đầy đủ Họ tên, Email và Nội dung tin nhắn.' },
        { status: 400 }
      );
    }

    const emailSubject = subject?.trim()
      ? `[Portfolio Contact] ${subject}`
      : `[Portfolio Contact] Tin nhắn mới từ ${name}`;

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['gthanhtung.work@gmail.com'],
      replyTo: email,
      subject: emailSubject,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background-color: #f4f6f8; margin: 0; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #e1e8ed; }
              .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; padding: 24px; text-align: center; }
              .header h2 { margin: 0; font-size: 20px; letter-spacing: 0.5px; color: #38bdf8; }
              .content { padding: 24px; }
              .field { margin-bottom: 16px; }
              .label { font-size: 12px; font-weight: bold; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
              .value { font-size: 15px; color: #0f172a; font-weight: 500; }
              .message-box { background: #f8fafc; border-left: 4px solid #38bdf8; padding: 16px; border-radius: 6px; font-size: 14px; white-space: pre-wrap; color: #334155; }
              .footer { text-align: center; padding: 16px; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; background: #fafafa; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>📬 Tin Nhắn Liên Hệ Mới</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Người gửi</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email liên hệ</div>
                  <div class="value"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></div>
                </div>
                ${subject ? `
                <div class="field">
                  <div class="label">Tiêu đề</div>
                  <div class="value">${subject}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Nội dung chi tiết</div>
                  <div class="message-box">${message}</div>
                </div>
              </div>
              <div class="footer">
                Email này được gửi tự động từ form liên hệ trên Portfolio của bạn.
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend email send error:', error);
      return NextResponse.json(
        { success: false, error: error.message || 'Lỗi gửi mail qua Resend.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Tin nhắn đã được gửi thành công!',
      data,
    });
  } catch (err: any) {
    console.error('Contact API Error:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Đã có lỗi xảy ra trên máy chủ.' },
      { status: 500 }
    );
  }
}
