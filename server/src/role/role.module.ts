import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleSchema } from './schema/role.schema';
import { UserSchema } from '../user/schemas/user.schema';
import { UserModule } from './../user/user.module';

@Module({
  imports:[
  MongooseModule.forFeature([{name: 'Role', schema:RoleSchema}]),
    MongooseModule.forFeature([{name: 'User', schema:UserSchema}]),
    // UserModule
  ],
  providers: [RoleService],
  controllers: [RoleController],
  exports: [RoleService]
})
export class RoleModule {}
