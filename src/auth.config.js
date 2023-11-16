// import { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnListing = nextUrl.pathname.startsWith('/listing');
      if (isOnListing) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/listing', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
};
