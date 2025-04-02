import { User } from '@prisma/client';
import { UnauthenticatedRequestError } from './errors';
import { NextAuthRequest } from './interfaces';

export const filterRequest = (request: NextAuthRequest): User => {
  const user = request.auth?.user as User | undefined;

  if (!user) {
    throw new UnauthenticatedRequestError();
  }

  return user;
};
