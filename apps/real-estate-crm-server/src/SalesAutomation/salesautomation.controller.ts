import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SalesAutomationService } from "./salesautomation.service";
import { SalesLeadDto } from "../salesAutomation/SalesLeadDto";

@swagger.ApiTags("salesAutomations")
@common.Controller("salesAutomations")
export class SalesAutomationController {
  constructor(protected readonly service: SalesAutomationService) {}

  @common.Post("/sales-leads")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateSalesLead(
    @common.Body()
    body: SalesLeadDto
  ): Promise<string> {
        return this.service.CreateSalesLead(body);
      }

  @common.Delete("/sales-leads/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteSalesLead(
    @common.Body()
    body: SalesLeadDto
  ): Promise<string> {
        return this.service.DeleteSalesLead(body);
      }

  @common.Get("/sales-leads/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetSalesLead(
    @common.Body()
    body: SalesLeadDto
  ): Promise<string> {
        return this.service.GetSalesLead(body);
      }

  @common.Put("/sales-leads/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateSalesLead(
    @common.Body()
    body: SalesLeadDto
  ): Promise<string> {
        return this.service.UpdateSalesLead(body);
      }
}
