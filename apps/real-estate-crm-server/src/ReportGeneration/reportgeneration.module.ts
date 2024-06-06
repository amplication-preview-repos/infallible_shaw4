import { Module } from "@nestjs/common";
import { ReportGenerationService } from "./reportgeneration.service";
import { ReportGenerationController } from "./reportgeneration.controller";
import { ReportGenerationResolver } from "./reportgeneration.resolver";

@Module({
  controllers: [ReportGenerationController],
  providers: [ReportGenerationService, ReportGenerationResolver],
  exports: [ReportGenerationService],
})
export class ReportGenerationModule {}
