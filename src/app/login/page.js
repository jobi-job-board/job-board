'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authenticate } from '../lib/actions';
import NavbarDark from 'src/components/NavbarDark';
import SmallFooter from 'src/components/SmallFooter';
// // import { useFormState, useFormStatus } from "react-dom";

export default function Login() {
  const router = useRouter();
  //   // const [state, dispatch] = useFormState(authenticate, undefined);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const info = await response.json();
    if (info.success) {
      console.log(info);
      authenticate({ email, password });
      router.push('/listing');
    } else {
      setError(info.error);
    }
  }
  return (
    <>
      <NavbarDark />
      <div className="login-wrapper">
        <form className="login-form flex-col-cen" onSubmit={handleSubmit}>
          <h2 className="login-h2">Hi, Welcome Back!</h2>
          <p className="login-p">
            Still don't have an account?{' '}
            <span>
              <Link href="/register">Sign up</Link>
            </span>
          </p>
          <div className="left-align-login">
            <label className="login-label" htmlFor="email">
              Email
            </label>
            <input
              className="login-input"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="email"
              value={email}
              type="email"
            ></input>
          </div>
          <div className="left-align-login">
            <label className="login-label" htmlFor="password">
              Password
            </label>

            <input
              className="login-input"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="password"
              value={password}
              type="password"
            ></input>
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
          <p>{error}</p>
        </form>
      </div>
      <SmallFooter />
    </>
  );
}
