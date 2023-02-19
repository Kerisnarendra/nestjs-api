import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { IsAlphanumeric } from "class-validator";
import { MaxLength } from "class-validator/types/decorator/decorators";

export class CreateUserDto {
  @ApiProperty()
  @IsAlphanumeric()
  name: string;
}
