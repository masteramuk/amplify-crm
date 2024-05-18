import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
  note?: string | null;
  property?: PropertyWhereUniqueInput | null;
};
