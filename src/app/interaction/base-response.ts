export class BaseResponse {
    hasErrors: boolean;
    errors: Error[]
}

export class Error {
    message: string;
    code: string;
}
