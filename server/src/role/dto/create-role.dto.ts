import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto{
	@ApiProperty({example: 'Users', description: 'Role name'}) 
	readonly value: string;
	@ApiProperty({example: 'Users', description: 'Role description'}) 
	readonly description: string;
}