import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ReportGenerationService } from "./reportgeneration.service";

@swagger.ApiTags("reportGenerations")
@common.Controller("reportGenerations")
export class ReportGenerationController {
  constructor(protected readonly service: ReportGenerationService) {}

  @common.Post("/reports")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateReport(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GenerateReport(body);
      }

  @common.Get("/reports/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetReport(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetReport(body);
      }
}
