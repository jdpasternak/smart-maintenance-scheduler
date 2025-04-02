import { NextResponse } from 'next/server';
import { UnauthenticatedRequestError, UnauthorizedRequestError } from './errors';
import { logError } from './logger';

export function handleApiError(error: unknown) {
    logError('[API ERROR]', { error });

    if (error instanceof UnauthenticatedRequestError) {
        return NextResponse.json({ message: error.message }, { status: 401 });
    }

    if (error instanceof UnauthorizedRequestError) {
        return NextResponse.json({ message: error.message }, { status: 403 });
    }

    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
}
