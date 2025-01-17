import type { APIRoute } from 'astro';
import { createTransporter } from '../../lib/email/transporter';
import { createContactEmailHtml } from '../../lib/email/templates';
import { config } from '../../lib/config';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: '请填写所有必填字段' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const transporter = createTransporter();
    
    await transporter.sendMail({
      from: `"AppliCrawler" <${config.email.from}>`,
      to: config.email.from,
      subject: `[AppliCrawler] 来自 ${name} 的留言`,
      html: createContactEmailHtml(name, email, message)
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Email sending failed:', error);
    
    const errorMessage = error instanceof Error && error.message.includes('EAUTH') 
      ? '邮件服务器认证失败，请稍后重试'
      : '发送失败，请稍后重试';

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};