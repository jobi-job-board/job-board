'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function Register() {
  const router = useRouter(router);
  return (
    <div>
      <h1> my list of profiles</h1>
      <ul>
        <Link href="/profile/2">Profile 2</Link>
        <Link href="/profile/3">Profile 3</Link>
        <Link
          href={{
            pathname: '/profile/3',
            query: {
              userName: 'Guillaume',
              userId: 12,
              person: JSON.stringify({
                age: 18,
              }),
            },
          }}
        >
          <div>A big square where I got some text</div>
        </Link>

        <a href="https://codewithguillame.com">
          codingwithguillaume's school online
        </a>
      </ul>
    </div>
  );
}
