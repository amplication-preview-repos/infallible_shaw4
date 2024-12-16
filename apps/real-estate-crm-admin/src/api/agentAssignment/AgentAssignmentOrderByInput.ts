import { SortOrder } from "../../util/SortOrder";

export type AgentAssignmentOrderByInput = {
  agent?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  propertyId?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
