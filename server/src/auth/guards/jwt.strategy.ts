import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
	constructor(
		configService: ConfigService,
		AuthService: AuthService
		){
		super({
			jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: configService.get<string>('JWT_SECRET'), 		
		})
	}

	async validate(payload:any): Promise<any>{
		// const {iat, exp, ...res} = payload
		// return res
		return {...payload}
	}
}