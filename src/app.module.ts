import { Module } from '@nestjs/common';
import { EnvModule } from './shared/env/env.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgreSQLConfigService } from './configs/postgres.config';

@Module({
    imports: [
        EnvModule,
        TypeOrmModule.forRootAsync({
            useClass: PostgreSQLConfigService,
            inject: [PostgreSQLConfigService]
        })]
})
export class AppModule {}
