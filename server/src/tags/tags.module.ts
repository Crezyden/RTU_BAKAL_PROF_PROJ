import { forwardRef, Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';
import { User, UserSchema } from '../user/schemas/user.schema';
import { Tags, TagsSchema } from './schemas/tags.schema';
import { Receipt, ReceiptSchema } from '../receipt/schemas/receipt.schema';

@Module({
  imports: [
    forwardRef(()=>UserModule),
    forwardRef(()=>AuthModule),

    MongooseModule.forFeature([{name: Receipt.name, schema:ReceiptSchema}]),
    MongooseModule.forFeature([{name: Tags.name, schema:TagsSchema}]),
    MongooseModule.forFeature([{name: User.name, schema:UserSchema}]),
  ],
  controllers: [TagsController],
  providers: [TagsService]
})
export class TagsModule {}