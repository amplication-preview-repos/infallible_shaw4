import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "subject";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.subject?.toString() || String(record.id);
};
