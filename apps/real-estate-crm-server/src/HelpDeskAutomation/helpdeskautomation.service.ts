import { Injectable } from "@nestjs/common";
import { TicketDto } from "../helpDeskAutomation/TicketDto";

@Injectable()
export class HelpDeskAutomationService {
  constructor() {}
  async CloseTicket(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateTicket(args: TicketDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetTicket(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateTicket(args: TicketDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
