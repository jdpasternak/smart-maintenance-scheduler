import { User } from '@prisma/client';
import { Session } from 'next-auth';
import { UnauthenticatedRequestError } from '@/lib/errors';

export const filter = (session: Session | null): Session | null => {
  const user = session?.user as User | undefined;

  if (!user) {
    throw new UnauthenticatedRequestError();
  }
  return session;
};
