import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CustomerFeedbackService } from "./customerfeedback.service";
import { FeedbackDto } from "../customerFeedback/FeedbackDto";

@swagger.ApiTags("customerFeedbacks")
@common.Controller("customerFeedbacks")
export class CustomerFeedbackController {
  constructor(protected readonly service: CustomerFeedbackService) {}

  @common.Delete("/feedback/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteFeedback(
    @common.Body()
    body: FeedbackDto
  ): Promise<string> {
        return this.service.DeleteFeedback(body);
      }

  @common.Get("/feedback/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetFeedback(
    @common.Body()
    body: FeedbackDto
  ): Promise<string> {
        return this.service.GetFeedback(body);
      }

  @common.Post("/feedback")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SubmitFeedback(
    @common.Body()
    body: FeedbackDto
  ): Promise<string> {
        return this.service.SubmitFeedback(body);
      }

  @common.Put("/feedback/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateFeedback(
    @common.Body()
    body: FeedbackDto
  ): Promise<string> {
        return this.service.UpdateFeedback(body);
      }
}
