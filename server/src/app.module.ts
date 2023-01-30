import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ReceiptModule } from "./receipt/receipt.module";
import { AuthModule } from './auth/auth.module';
// import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
// import { TagsModule } from './tags/tags.module';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { FileModule } from './file/file.module';
import { MongooseConfigService } from "./config/Mongoose.ConfigService";
import configuration from "./config/configuration";


@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports:[ConfigModule],
            useClass: MongooseConfigService, 
        }),
        ConfigModule.forRoot({
            load: [configuration]
        }),
        ReceiptModule,
        AuthModule,
        UserModule,
        RoleModule,
        // TagsModule,
        FileModule,
        // ConfigService
    ],    
})
export class AppModule{} 