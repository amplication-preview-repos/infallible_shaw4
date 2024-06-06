import { Module } from "@nestjs/common";
import { MarketingAutomationService } from "./marketingautomation.service";
import { MarketingAutomationController } from "./marketingautomation.controller";
import { MarketingAutomationResolver } from "./marketingautomation.resolver";

@Module({
  controllers: [MarketingAutomationController],
  providers: [MarketingAutomationService, MarketingAutomationResolver],
  exports: [MarketingAutomationService],
})
export class MarketingAutomationModule {}
