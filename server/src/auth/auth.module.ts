import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt'
import { UserModule } from './../user/user.module';
import { Auth } from './guards/jwt.guard';
import { JwtStrategy } from './guards/jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    forwardRef(() => UserModule),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: 'secret',
        signOptions: {
          expiresIn: '3600s'
        }
      }),
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, Auth, JwtStrategy],
  exports: [AuthService, JwtModule]
})
export class AuthModule { }
