import { Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class MarketingCampaignDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    title!: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    description?: string;

    @Field(() => Date)
    @Type(() => Date)
    startDate!: Date;

    @Field(() => Date)
    @Type(() => Date)
    endDate!: Date;

    @Field(() => [String], {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => [String]
    })
    @Type(() => String)
    targetAudience?: string;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    budget!: number;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    status!: string;
}

export { MarketingCampaignDto as MarketingCampaignDto };