import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class FeedbackDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    customerId!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    message!: string;

    @Field(() => Number, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => Number
    })
    @Type(() => Number)
    rating?: number;

    @Field(() => Date)
    @Type(() => Date)
    submittedAt!: Date;

    @Field(() => Boolean, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => Boolean
    })
    @Type(() => Boolean)
    resolved?: boolean;

    @Field(() => [String], {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => [String]
    })
    @Type(() => String)
    comments?: string;

    @Field(() => [String], {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => [String]
    })
    @Type(() => String)
    tags?: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    agentId?: string;
}

export { FeedbackDto as FeedbackDto };