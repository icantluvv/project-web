import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    type: 'file',
    properties: {
      file: {
        type: 'string',
        format: 'binary',
      },
    },
  })
  image: Express.Multer.File;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string = 'Сантехника';

  @ApiProperty()
  @IsString()
  description: string = 'Описание';

  @ApiProperty()
  price: number = 10000;

  @ApiProperty()
  @IsNumberString()
  categoryId: number;
}
