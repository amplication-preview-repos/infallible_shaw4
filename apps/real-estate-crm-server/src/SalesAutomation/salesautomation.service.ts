import { Injectable } from "@nestjs/common";
import { SalesLeadDto } from "../salesAutomation/SalesLeadDto";

@Injectable()
export class SalesAutomationService {
  constructor() {}
  async CreateSalesLead(args: SalesLeadDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async DeleteSalesLead(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetSalesLead(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateSalesLead(args: SalesLeadDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
