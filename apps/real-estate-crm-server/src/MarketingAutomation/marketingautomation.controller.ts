import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MarketingAutomationService } from "./marketingautomation.service";

@swagger.ApiTags("marketingAutomations")
@common.Controller("marketingAutomations")
export class MarketingAutomationController {
  constructor(protected readonly service: MarketingAutomationService) {}

  @common.Get("/:id/create-marketing-campaign")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateMarketingCampaign(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateMarketingCampaign(body);
      }

  @common.Delete("/marketing-campaigns/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteMarketingCampaign(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.DeleteMarketingCampaign(body);
      }

  @common.Get("/marketing-campaigns/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetMarketingCampaign(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetMarketingCampaign(body);
      }

  @common.Get("/:id/update-marketing-campaign")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateMarketingCampaign(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UpdateMarketingCampaign(body);
      }
}
