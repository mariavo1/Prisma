import { InputType, PartialType } from "@nestjs/graphql";
import { CreateGymDto } from "./create-gym.dto";

@InputType()
export class UpdateGymDto extends PartialType(CreateGymDto) {}