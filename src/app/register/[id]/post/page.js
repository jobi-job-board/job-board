import { useParams, useRouter } from 'next/navigation';
export default function RegisterID() {
  const params = useParams();
  const router = useRouter();
  console.log(params.id);
  return (
    <div>
      <h1>Register page id:{params.id}</h1>
      <div onClick={() => router.push('/register')}> Back to main page</div>
    </div>
  );
}
