export async function GET() {
  return Response.json(
    {},
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
