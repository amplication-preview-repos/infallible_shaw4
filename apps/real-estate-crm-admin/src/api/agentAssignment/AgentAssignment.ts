import { Property } from "../property/Property";

export type AgentAssignment = {
  agent: string | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  property?: Property | null;
  startDate: Date | null;
  updatedAt: Date;
};
