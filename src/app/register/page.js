'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from 'src/components/Navbar';
export default function LoginForm() {
  const router = useRouter();
  //   const [state, dispatch] = useFormState(authenticate, undefined);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
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
    <>
      <Navbar />
      <div className="register-wrapper">
        <form className="register-form flex-col-cen" onSubmit={handleSubmit}>
          <h2 className="register-h2">Create Account</h2>

          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="name"
            value={name}
            type="text"
          ></input>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="email"
            value={email}
            type="text"
          ></input>

          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="password"
            value={password}
            type="text"
          ></input>
          <button type="submit">Register</button>
          <p>{error}</p>
        </form>
      </div>
    </>
  );
}
