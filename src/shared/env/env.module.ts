import { Global, Module } from "@nestjs/common";
import * as dotenv from "dotenv";
import { validate } from "./validate-env";
import { EnvService } from "./env.service";

dotenv.config()

@Global()
@Module({
    providers: [
        {
            provide: "ENV_OBJECT",
            useValue: validate(process.env),
        },
        {
            provide: EnvService,
            useFactory: (env: any) => new EnvService(env),
            inject: ["ENV_OBJECT"],
        }
    ],

    exports: [EnvService]
})
export class EnvModule {} 