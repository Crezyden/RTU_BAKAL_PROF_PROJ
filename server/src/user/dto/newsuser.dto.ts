import { ApiProperty, ApiTags } from "@nestjs/swagger";

@ApiTags('fhg')
export class NewsUserdto{
	@ApiProperty({example: 'users', description: 'Users name'})
	name: string; 
	@ApiProperty({example: 'user@gmail.com', description: 'Unique email'})
	email: string;
	@ApiProperty({example: '12345', description: 'Password'})
	password: string;
	@ApiProperty({example: '+37129994512', description: 'Phone'})
	phone: string;
	@ApiProperty({example: 'Rīga', description: 'City'})
	City: string;
}