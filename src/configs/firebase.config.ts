import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { EnvService } from "src/shared/env/env.service";
import * as admin from "firebase-admin";



@Injectable()
export class FirebaseConfigService implements OnApplicationBootstrap {
    private app: admin.app.App = null;

    constructor(private readonly envService: EnvService) {}

    async onApplicationBootstrap(): Promise<void> {
        if(!this.app) {
            const base64= this.envService.fireBaseServiceAccount64;
            const serviceAccount = JSON.parse(
                Buffer.from(base64, 'base64').toString('utf-8')
            );    

            this.app = admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            })
        }

        }
    
        getApp(): admin.app.App {
            return this.app;
        }
}