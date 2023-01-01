import { ApiProperty } from "@nestjs/swagger";

export class LoginUserdto{
	@ApiProperty({example: 'user@gmail.com', description: 'Unique email'},)
	readonly email: string;
	@ApiProperty({example: '12345', description: 'Password'})
	readonly password: string;
}
