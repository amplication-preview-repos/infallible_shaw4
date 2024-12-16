import { Module } from "@nestjs/common";
import { SalesAutomationService } from "./salesautomation.service";
import { SalesAutomationController } from "./salesautomation.controller";
import { SalesAutomationResolver } from "./salesautomation.resolver";

@Module({
  controllers: [SalesAutomationController],
  providers: [SalesAutomationService, SalesAutomationResolver],
  exports: [SalesAutomationService],
})
export class SalesAutomationModule {}
