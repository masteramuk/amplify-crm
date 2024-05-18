import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
};
