import * as graphql from "@nestjs/graphql";
import { TicketDto } from "../helpDeskAutomation/TicketDto";
import { HelpDeskAutomationService } from "./helpdeskautomation.service";

export class HelpDeskAutomationResolver {
  constructor(protected readonly service: HelpDeskAutomationService) {}

  @graphql.Mutation(() => String)
  async CloseTicket(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CloseTicket(args);
  }

  @graphql.Mutation(() => String)
  async CreateTicket(
    @graphql.Args()
    args: TicketDto
  ): Promise<string> {
    return this.service.CreateTicket(args);
  }

  @graphql.Query(() => String)
  async GetTicket(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetTicket(args);
  }

  @graphql.Mutation(() => String)
  async UpdateTicket(
    @graphql.Args()
    args: TicketDto
  ): Promise<string> {
    return this.service.UpdateTicket(args);
  }
}
