import { Module } from '@nestjs/common';
import { EnvModule } from './shared/env/env.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgreSQLConfigService } from './configs/postgres.config';
import { AdminAuthModule } from './api/admin/auth/admin.auth.module';

@Module({
    imports: [
        EnvModule,
        TypeOrmModule.forRootAsync({
            useClass: PostgreSQLConfigService,
            inject: [PostgreSQLConfigService]
        }),
    AdminAuthModule]
})
export class AppModule {}
