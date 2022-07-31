import { AxiosResponse } from "axios";
import UserLoginResultDto from "@network/dto/UserLoginResultDto";
import UserLoginDto from "@network/dto/UserLoginDto";

interface IAuthApi {
  auth(body: UserLoginDto): Promise<AxiosResponse<UserLoginResultDto, any>>
}

export default IAuthApi;