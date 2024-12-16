import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  subject?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
