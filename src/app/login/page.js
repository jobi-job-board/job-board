'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function LoginForm() {
  const router = useRouter();
  //   const [state, dispatch] = useFormState(authenticate, undefined);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('api/user/login', {
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
      router.push('/listing');
    } else {
      setError(info.error);
    }
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <h1>Hi, Welcome Back!</h1>
      <p>
        Still don't have an account? <Link href="/register">Sign up</Link>
      </p>
      <div className="flex">
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="email"
          value={email}
          type="text"
        ></input>
      </div>
      <label htmlFor="password">Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        placeholder="password"
        value={password}
        type="text"
      ></input>
      <button type="submit">Login</button>
      <p>{error}</p>
    </form>
  );
}
