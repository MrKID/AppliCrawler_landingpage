export const createContactEmailHtml = (name: string, email: string, message: string) => `
  <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #4F46E5;">新留言通知</h2>
    <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <p><strong>姓名：</strong>${name}</p>
      <p><strong>邮箱：</strong><a href="mailto:${email}">${email}</a></p>
      <p><strong>留言内容：</strong></p>
      <div style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
        ${message}
      </div>
    </div>
    <p style="color: #6b7280; font-size: 14px;">
      此邮件由 AppliCrawler 系统自动发送，请勿直接回复。
    </p>
  </div>
`;