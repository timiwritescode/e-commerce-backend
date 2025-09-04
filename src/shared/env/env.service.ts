import { Injectable } from "@nestjs/common";
import { EnvironmentVariables } from "src/validation/env.validation";



@Injectable()
export class EnvService {
    constructor(private readonly env: EnvironmentVariables) {}


    get nodeEnv() {
        return this.env.NODE_ENV;
    }

    get port() {
        return +this.env.PORT;
    }

    get fireBaseServiceAccount64() {
        return this.env.FIREBASE_SERVICE_ACCOUNT_B64;
    }

    get firebaseApiKey() {
        return this.env.FIREBASE_API_KEY
    }

    get firebaseEmailAndPasswordSigninUrl() {
        return this.env.FIREBASE_EMAIL_AND_PASSWORD_SIGNIN_URL;
    }

    get dbHost() {
        return this.env.DB_HOST
    }

    get dbPort() {
        return this.env.DB_PORT;
    }

    get dbUser() {
        return this.env.DB_USER;
    }

    get dbPassword() {
        return this.env.DB_PASSWORD;
    }

    get dbName() {
        return this.env.DB_NAME
    }

    get dbCaCertificate() {
        return this.env.DB_CA_CERTIFICATE;
    }
}