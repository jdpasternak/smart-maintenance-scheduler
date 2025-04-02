import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { auth } from './auth';

type WithAuthProps = {
  children: ReactNode;
};

export default async function withAuth({ children }: WithAuthProps) {
  const session = await auth();

  if (!session) redirect('/api/auth/signin');

  return <>{children} </>;
}
