import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  console.log(request);
  return Response.json({
    ok: true,
  });
};

export const POST = async (request: NextRequest) => {
  const requestBody = await request.json();
  console.log("sdf");
  return Response.json(requestBody);
};
