import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentUpdateInput = {
  agentName?: string | null;
  isPrimaryAgent?: boolean | null;
  property?: PropertyWhereUniqueInput | null;
};
