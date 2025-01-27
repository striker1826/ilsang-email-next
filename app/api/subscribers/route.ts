import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { email } = await request.json();

  const getSubscribers = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      `/api/subscribers?filters[email][$eq]=${email}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
    }
  );

  const isExistSubscriber = await getSubscribers
    .json()
    .then((data) => data.data[0]);

  if (!isExistSubscriber) {
    await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/subscribers", {
      method: "POST",
      body: JSON.stringify({
        data: {
          email,
        },
      }),
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

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

    transporter.sendMail(mailData);
  }

  return Response.json({});
}
