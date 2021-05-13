export enum ErrorCode {
  ServerError = 500,
  AlreadyExistsError = 422,
  PermissionDeniedError = 403,
  NotFoundError = 404,
  UnauthorizedError = 401,
  ValidationError = 400
}

export enum ErrorMessage {
  ServerError = 'Server Error',
  AlreadyExistsError = 'Already Exists Error',
  PermissionDeniedError = 'Permission Denied Error',
  NotFoundError = 'Not Found Error',
  UnauthorizedError = 'Unauthorized Error',
  ValidationError = 'Validation Error'
}

export interface ErrorDetails {
  platform?: string;
  code?: number;
  message?: string;
  fields?: string[];
}

export class AppError extends Error {
  code: number;
  details?: ErrorDetails;

  constructor(code: number = ErrorCode.ServerError, message: string, details?: ErrorDetails) {
    super(message);
    this.code = code;
    this.details = details;
  }
}

export class ServerError extends AppError {
  constructor(message: string = ErrorMessage.ServerError, details?: ErrorDetails) {
    super(ErrorCode.ServerError, message, details);
  }
}

export class SapoError extends ServerError {
  constructor(message = 'Sapo Unknown error', details?: ErrorDetails) {
    super(undefined, {
      platform: 'sapo',
      code: ErrorCode.ServerError,
      message,
      ...details
    });
  }
}

export class SapoInvalidArgError extends ServerError {
  constructor(message = 'Sapo Invalid arguments', details?: ErrorDetails) {
    super(undefined, {
      platform: 'sapo',
      code: ErrorCode.ValidationError,
      message,
      ...details
    });
  }
}

export class SapoUnauthorizedError extends ServerError {
  constructor(message = 'Sapo Unauthorized', details?: ErrorDetails) {
    super(undefined, {
      platform: 'sapo',
      code: ErrorCode.UnauthorizedError,
      message,
      ...details
    });
  }
}

export class SapoNotFoundError extends ServerError {
  constructor(message = 'Sapo Not found', details?: ErrorDetails) {
    super(undefined, {
      platform: 'sapo',
      code: ErrorCode.NotFoundError,
      message,
      ...details
    });
  }
}

export class SapoAlreadyExistsError extends ServerError {
  constructor(message = 'Sapo Already exists', details?: ErrorDetails) {
    super(undefined, {
      platform: 'sapo',
      code: ErrorCode.AlreadyExistsError,
      message,
      ...details
    });
  }
}

export class SapoPermissionDeniedError extends ServerError {
  constructor(message = 'Sapo Permission denied', details?: ErrorDetails) {
    super(undefined, {
      platform: 'sapo',
      code: ErrorCode.PermissionDeniedError,
      message,
      ...details
    });
  }
}
