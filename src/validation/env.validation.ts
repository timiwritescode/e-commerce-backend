import { IsBase64, IsEnum, IsNotEmpty, IsNumberString, IsString } from "class-validator";

export enum NodeEnvironment {
    DEVELOPMENT = "development",
    PRODUCTION = "production" 
}


export class EnvironmentVariables {
    @IsEnum(NodeEnvironment)
    NODE_ENV: NodeEnvironment;
    
    @IsNumberString()
    @IsNotEmpty()
    PORT: string;

    @IsNotEmpty()
    @IsBase64()
    FIREBASE_SERVICE_ACCOUNT_B64: string;

    @IsNotEmpty()
    @IsString()
    FIREBASE_API_KEY: string;

    @IsNotEmpty()
    @IsString()
    FIREBASE_EMAIL_AND_PASSWORD_SIGNIN_URL: string;


    @IsNotEmpty()
    @IsString()
    DB_HOST: string;

    @IsNotEmpty()
    @IsString()
    DB_PORT: string;

    @IsNotEmpty()
    @IsString()
    DB_USER: string;

    @IsNotEmpty()
    @IsString()
    DB_PASSWORD: string;

    @IsNotEmpty()
    @IsString()
    DB_NAME: string;

    @IsBase64()
    @IsNotEmpty()
    DB_CA_CERTIFICATE: string;

}