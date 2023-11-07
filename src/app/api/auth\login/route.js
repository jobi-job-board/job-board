import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';

export async function POST(request) {
  const body = await request.json();
  const { username, password } = body;

  if (username !== 'admin' || password !== 'admin') {
    return {
      status: 401,
      body: JSON.stringify({ message: 'unauthorized' }),
    };
  }

  const secret = process.env.JWT_SECRET || '';
  const MAX_AGE = 60 * 60 * 24 * 7; // 7 days in seconds

  const token = sign({ username }, secret, { expiresIn: MAX_AGE });

  // Serialize the token into a cookie
  const cookie = serialize('OutSiteJWT', token, {
    maxAge: MAX_AGE,
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secure: true, // Use 'secure: true' if your application is running over HTTPS
  });

  // Set the cookie in the response headers
  const response = {
    status: 200,
    headers: {
      'Set-Cookie': cookie,
    },
  };

  return response;
}
