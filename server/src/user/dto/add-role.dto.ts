import { ApiProperty } from "@nestjs/swagger";

export class AddRolleDto {
	@ApiProperty({example: 'Users', description: 'Assign a role to a user'})
	readonly value: string;
	@ApiProperty({example: 'UsersId', description: 'User ID to assign a role to'})
	readonly Userid: string; 
}