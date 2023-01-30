import { forwardRef, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import ReceiptController from "./receipt.controller";
import { ReceiptService } from "./receipt.service";
// import { FileService } from "../file/file.service";
import { Receipt,  ReceiptSchema } from './schemas/receipt.schema';
import { Tags, TagsSchema } from "../tags/schemas/tags.schema";
import { JwtService } from '@nestjs/jwt';
import { UserModule } from './../user/user.module';
import { AuthModule } from "../auth/auth.module";
import { FileService } from "../file/file.service";
import { User, UserSchema } from "../user/schemas/user.schema";
  
@Module({
    imports: [
    forwardRef(()=>UserModule),
    forwardRef(()=>AuthModule),

    MongooseModule.forFeature([{name: Receipt.name, schema:ReceiptSchema}]),
    MongooseModule.forFeature([{name: Tags.name, schema:TagsSchema}]),
    MongooseModule.forFeature([{name: User.name, schema:UserSchema}]),
    
    ],
    controllers:[ReceiptController],
    providers:[ReceiptService, FileService] 
})
export class ReceiptModule{}