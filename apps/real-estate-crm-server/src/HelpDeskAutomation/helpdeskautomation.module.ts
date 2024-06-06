import { Module } from "@nestjs/common";
import { HelpDeskAutomationService } from "./helpdeskautomation.service";
import { HelpDeskAutomationController } from "./helpdeskautomation.controller";
import { HelpDeskAutomationResolver } from "./helpdeskautomation.resolver";

@Module({
  controllers: [HelpDeskAutomationController],
  providers: [HelpDeskAutomationService, HelpDeskAutomationResolver],
  exports: [HelpDeskAutomationService],
})
export class HelpDeskAutomationModule {}
