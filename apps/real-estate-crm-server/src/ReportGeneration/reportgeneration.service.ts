import { Injectable } from "@nestjs/common";
import { ReportDto } from "../reportGeneration/ReportDto";

@Injectable()
export class ReportGenerationService {
  constructor() {}
  async GenerateReport(args: ReportDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetReport(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
