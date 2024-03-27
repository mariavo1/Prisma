import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateGymDto {
    @Field(() => String)
    name: string;

    @Field(() => String)
    address: string;

    @Field(() => Boolean)
    privateOwned: boolean;

    @Field(() => String)
    owner: string;
}