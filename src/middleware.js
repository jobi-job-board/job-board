import prisma from "src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
// import dotenv from "dotenv";
// dotenv.config();

export async function middleware(req, res) {
  try {
    // Check if the request has an "Authorization" header
    const header = req.headers.get("authorization");
    if (!header) {
      console.log("doesn't exist?");
      return NextResponse.next();
    }
    const token = header.split(" ")[1];
    // Use the userId from the decoded token to find the corresponding user in the database
    const testing = await jwtVerify(token, process.env.JWT_SECRET);
    console.log(testing);
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
    console.log(user);
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
