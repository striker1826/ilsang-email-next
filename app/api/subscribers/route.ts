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
  }

  return Response.json({});
}
