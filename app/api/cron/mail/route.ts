import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const revalidate = 0;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function GET() {
  try {
    const mailData = {
      to: "minseob1826@gmail.com",
      subject: "[일상백과] 임산부의 정확한 의미는?",
      from: "minseob1826@gmail.com",
      html: ` <div
        style={{
          background: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifySelf: "center",
          padding: "40px 20px",
        }}
      >
        <h1
          style={{
            fontWeight: "800",
          }}
        >
          오늘의 질문
        </h1>
        <div
          style={{
            backgroundColor: "#b8b6b6",
            color: "#2A2A2A",
            fontWeight: "bold",
            marginTop: "20px",
            padding: "20px",
          }}
        >
          임산부의 정확한 뜻을 알고 계시나요?
        </div>
      </div>`,
    };

    // 메일 발송
    const info = await transporter.sendMail(mailData);

    // 메일 발송 성공 응답
    return NextResponse.json({ ok: true, message: "Email sent", info });
  } catch (err) {
    console.error("Email sending error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send email" });
  }
}
