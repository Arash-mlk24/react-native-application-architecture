import UserNameResultDto from "@network/dto/UserNameResultDto";
import { AxiosResponse } from "axios";

interface IUserApi {
  get(id: number): Promise<AxiosResponse<UserNameResultDto, any>>
}

export default IUserApi;