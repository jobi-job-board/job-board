import prisma from "src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// dotenv.config();

export async function middleware(req, res) {
  try {
    const data = req.json();
    console.log(data.headers.authorization);
    // console.log(req.headers);
    // Check if the request has an "Authorization" header
    if (!req.headers.authorization) {
      console.log("doesn't exist?");
      return NextResponse.next();
    }
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    // Use the userId from the decoded token to find the corresponding user in the database
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    // If no user is found with the given userId, continue to the next middleware
    if (!user) {
      return NextResponse.next();
    }
    // Remove the "password" property from the user object for security (assuming it's sensitive)
    delete user.password;
    // Attach the user object to the request object for later use in route handlers
    const response = NextResponse.next();
    response.user = user;
    return response;
  } catch (error) {
    NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}

// // 404 Route not found
// export function handle404(req, res) {
//   return NextResponse.json(
//     {
//       success: false,
//       error: "Route does not exist",
//     },
//     { status: 404 }
//   );
// }

// // Error Handling Middleware
// export function handleError(error, req, res) {
//   return NextResponse.json(
//     {
//       success: false,
//       error: error.message,
//     },
//     { status: 500 }
//   );
// }

// const PORT = process.env.PORT || 3000;

// export const config = {
//   matcher: "/api/user/token",
// };

// export default {
//   middleware,
//   handle404,
//   handleError,
// };
