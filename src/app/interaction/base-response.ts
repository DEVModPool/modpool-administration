export class BaseResponse {
    hasErrors: boolean;
    errors: Error[];
    result: any;
}

export class Error {
    message: string;
    code: string;
}
