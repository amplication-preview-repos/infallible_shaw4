import * as graphql from "@nestjs/graphql";
import { FeedbackDto } from "../customerFeedback/FeedbackDto";
import { CustomerFeedbackService } from "./customerfeedback.service";

export class CustomerFeedbackResolver {
  constructor(protected readonly service: CustomerFeedbackService) {}

  @graphql.Mutation(() => String)
  async DeleteFeedback(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.DeleteFeedback(args);
  }

  @graphql.Query(() => String)
  async GetFeedback(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetFeedback(args);
  }

  @graphql.Mutation(() => String)
  async SubmitFeedback(
    @graphql.Args()
    args: FeedbackDto
  ): Promise<string> {
    return this.service.SubmitFeedback(args);
  }

  @graphql.Mutation(() => String)
  async UpdateFeedback(
    @graphql.Args()
    args: FeedbackDto
  ): Promise<string> {
    return this.service.UpdateFeedback(args);
  }
}
