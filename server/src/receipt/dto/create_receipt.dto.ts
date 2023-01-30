import { ApiProperty } from "@nestjs/swagger";

export class CreateReceiptDto{
	@ApiProperty({example: 'users@gmail.com ', description: 'Users email'})
    readonly UsersEmail;
	@ApiProperty({example: 'Sony tv ', description: 'Name receipts'})
    readonly name;
	@ApiProperty({example: '1a.lv', description: 'Shop'})
    readonly shop_name;
	@ApiProperty({example: '50', description: 'Price'})
    readonly price;
	@ApiProperty({example: '21.12.2022', description: 'Date of purchase'})
    readonly purc_date;     
	@ApiProperty({example: '21.12.2024', description: 'date of warranty lines'})
    readonly val_period;
	@ApiProperty({example: 'receipts.file.jpg', description: 'purchase document'})
    readonly recfile;

}
