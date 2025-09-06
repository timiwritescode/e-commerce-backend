export class ErrorResponse {
    success = false;
    stausCode: number;
    message: string;

    constructor(statusCode: number, message: string) {
        this.stausCode = statusCode;
        this.message = message;
    }
}