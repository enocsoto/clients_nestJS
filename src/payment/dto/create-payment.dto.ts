import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsOptional, IsPositive, ValidateNested } from "class-validator";
import { CreateClientDto } from "src/client/dto/create-client.dto";

export class CreatePaymentDto {
  @IsPositive()
  @IsInt()
  amount: number;

  @IsNotEmpty()
  dueDate: Date;

  @ValidateNested()
  @Type(() => CreateClientDto)
  @IsOptional()
  client?: CreateClientDto;

}
