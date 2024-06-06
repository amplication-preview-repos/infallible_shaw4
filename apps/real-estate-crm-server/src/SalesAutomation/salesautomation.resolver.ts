import * as graphql from "@nestjs/graphql";
import { SalesLeadDto } from "../salesAutomation/SalesLeadDto";
import { SalesAutomationService } from "./salesautomation.service";

export class SalesAutomationResolver {
  constructor(protected readonly service: SalesAutomationService) {}

  @graphql.Mutation(() => String)
  async CreateSalesLead(
    @graphql.Args()
    args: SalesLeadDto
  ): Promise<string> {
    return this.service.CreateSalesLead(args);
  }

  @graphql.Mutation(() => String)
  async DeleteSalesLead(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.DeleteSalesLead(args);
  }

  @graphql.Query(() => String)
  async GetSalesLead(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetSalesLead(args);
  }

  @graphql.Mutation(() => String)
  async UpdateSalesLead(
    @graphql.Args()
    args: SalesLeadDto
  ): Promise<string> {
    return this.service.UpdateSalesLead(args);
  }
}
