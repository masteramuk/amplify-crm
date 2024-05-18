import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentCreateInput = {
  agentName?: string | null;
  isPrimaryAgent?: boolean | null;
  property?: PropertyWhereUniqueInput | null;
};
