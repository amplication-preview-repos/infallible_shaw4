import { Injectable } from "@nestjs/common";
import { FeedbackDto } from "../customerFeedback/FeedbackDto";

@Injectable()
export class CustomerFeedbackService {
  constructor() {}
  async DeleteFeedback(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetFeedback(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SubmitFeedback(args: FeedbackDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateFeedback(args: FeedbackDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
