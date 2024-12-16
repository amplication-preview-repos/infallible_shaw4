import { Injectable } from "@nestjs/common";

@Injectable()
export class MarketingAutomationService {
  constructor() {}
  async CreateMarketingCampaign(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async DeleteMarketingCampaign(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetMarketingCampaign(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateMarketingCampaign(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
