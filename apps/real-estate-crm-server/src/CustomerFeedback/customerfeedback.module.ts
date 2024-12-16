import { Module } from "@nestjs/common";
import { CustomerFeedbackService } from "./customerfeedback.service";
import { CustomerFeedbackController } from "./customerfeedback.controller";
import { CustomerFeedbackResolver } from "./customerfeedback.resolver";

@Module({
  controllers: [CustomerFeedbackController],
  providers: [CustomerFeedbackService, CustomerFeedbackResolver],
  exports: [CustomerFeedbackService],
})
export class CustomerFeedbackModule {}
