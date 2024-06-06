import * as graphql from "@nestjs/graphql";
import { ReportDto } from "../reportGeneration/ReportDto";
import { ReportGenerationService } from "./reportgeneration.service";

export class ReportGenerationResolver {
  constructor(protected readonly service: ReportGenerationService) {}

  @graphql.Mutation(() => String)
  async GenerateReport(
    @graphql.Args()
    args: ReportDto
  ): Promise<string> {
    return this.service.GenerateReport(args);
  }

  @graphql.Query(() => String)
  async GetReport(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetReport(args);
  }
}
