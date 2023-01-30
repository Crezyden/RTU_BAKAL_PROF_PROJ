import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { RoleSchema } from './../role/schema/role.schema';
import { User, UserSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleModule } from './../role/role.module';
import { AuthModule } from './../auth/auth.module';
import { ReceiptSchema, Receipt } from '../receipt/schemas/receipt.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema },
    { name: 'Role', schema: RoleSchema },
    { name: 'Recept', schema: ReceiptSchema }]),
    // AuthModule,
    RoleModule,
    forwardRef(() => AuthModule)
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [
    UserService,
  ],

})
export class UserModule { }
