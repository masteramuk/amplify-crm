import { SortOrder } from "../../util/SortOrder";

export type AgentAssignmentOrderByInput = {
  agentName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isPrimaryAgent?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
};
