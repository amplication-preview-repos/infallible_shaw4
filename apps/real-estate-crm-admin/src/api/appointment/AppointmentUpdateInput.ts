import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type AppointmentUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
  subject?: string | null;
  time?: Date | null;
};
