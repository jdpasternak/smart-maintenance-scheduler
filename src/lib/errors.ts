export class UnauthenticatedRequestError extends Error {
  constructor() {
    super('Unauthenticated');
    this.name = 'UnauthenticatedRequestError';
  }
}

export class UnauthorizedRequestError extends Error {
  constructor(message = 'Unauthorized') {
    super(message);
    this.name = 'UnauthorizedRequestError';
  }
}
