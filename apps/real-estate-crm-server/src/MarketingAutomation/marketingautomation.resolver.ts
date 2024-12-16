import * as graphql from "@nestjs/graphql";
import { MarketingAutomationService } from "./marketingautomation.service";

export class MarketingAutomationResolver {
  constructor(protected readonly service: MarketingAutomationService) {}

  @graphql.Query(() => String)
  async CreateMarketingCampaign(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateMarketingCampaign(args);
  }

  @graphql.Mutation(() => String)
  async DeleteMarketingCampaign(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.DeleteMarketingCampaign(args);
  }

  @graphql.Query(() => String)
  async GetMarketingCampaign(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetMarketingCampaign(args);
  }

  @graphql.Query(() => String)
  async UpdateMarketingCampaign(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UpdateMarketingCampaign(args);
  }
}
