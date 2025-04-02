import { User } from "@prisma/client";
import { NextAuthRequest } from "./interfaces";
import { UnauthenticatedRequestError } from "./errors";

export const filterRequest = (request: NextAuthRequest): User => {
    const user = request.auth?.user as User | undefined;

    if (!user) {
        throw new UnauthenticatedRequestError();
    }

    return user;
}