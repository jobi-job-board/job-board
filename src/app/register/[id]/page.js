'use client';
import { useParams } from 'next/navigation';
export default function RegisterID() {
  const params = useParams();
  console.log(params.id);
  return <div>My id register page</div>;
}
