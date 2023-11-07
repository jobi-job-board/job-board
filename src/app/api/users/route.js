// export async function GET(request) {
//   const users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 3, name: 'Bob' },
//   ];
//   //Send the users as a response
//   return new Response(JSON.stringify(users));
// }

import { NextResponse } from 'next/server';
import data from '@data.json';

export async function POST() {
  const { params } = context;
  const user = data.filter((x) => params.userId === x.id.toString());

  return NextResponse.json({
    user,
  });
}
