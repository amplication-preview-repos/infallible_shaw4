import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { HelpDeskAutomationService } from "./helpdeskautomation.service";
import { TicketDto } from "../helpDeskAutomation/TicketDto";

@swagger.ApiTags("helpDeskAutomations")
@common.Controller("helpDeskAutomations")
export class HelpDeskAutomationController {
  constructor(protected readonly service: HelpDeskAutomationService) {}

  @common.Patch("/tickets/:id/close")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CloseTicket(
    @common.Body()
    body: TicketDto
  ): Promise<string> {
        return this.service.CloseTicket(body);
      }

  @common.Post("/tickets")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateTicket(
    @common.Body()
    body: TicketDto
  ): Promise<string> {
        return this.service.CreateTicket(body);
      }

  @common.Get("/tickets/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetTicket(
    @common.Body()
    body: TicketDto
  ): Promise<string> {
        return this.service.GetTicket(body);
      }

  @common.Put("/tickets/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateTicket(
    @common.Body()
    body: TicketDto
  ): Promise<string> {
        return this.service.UpdateTicket(body);
      }
}
