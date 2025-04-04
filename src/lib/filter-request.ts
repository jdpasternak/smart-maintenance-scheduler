import { User } from '@prisma/client';
import { UnauthenticatedRequestError } from './errors';
import { NextAuthRequest } from './interfaces';

export const filterRequest = (req: Request): User => {
  const user = (req as NextAuthRequest).auth?.user as User | undefined;

  if (!user) {
    throw new UnauthenticatedRequestError();
  }

  return user;
};
