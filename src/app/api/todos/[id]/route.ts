import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

export async function GET(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf('/') + 1);
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);
  const data: Todo = await res.json();

  if (!data.id) {
    return NextResponse.json({ "message": "Todo not found." });
  }

  return NextResponse.json(data);
}