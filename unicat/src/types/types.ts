import { AxiosResponse } from "axios";

export type AuthenticatedUser = {
  id: string;
  role: string;
  username: string;
};
