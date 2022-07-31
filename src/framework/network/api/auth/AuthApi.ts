import { AxiosResponse } from "axios";
import AxiosInstance from "@network/interceptor/AxiosInstance";
import UserLoginResultDto from "@network/dto/UserLoginResultDto";
import UserLoginDto from "@network/dto/UserLoginDto";
import IAuthApi from "@core/network/api/IAuthApi";


class AuthApi implements IAuthApi {

  // singleton
  private static INSTANCE: IAuthApi;

  public static getInstance() {
    if (!this.INSTANCE) {
      this.INSTANCE = new AuthApi();
    }
    return this.INSTANCE;
  }


  constructor() { }


  // methods
  public auth(body: UserLoginDto): Promise<AxiosResponse<UserLoginResultDto, any>> {

    const response = AxiosInstance.post<UserLoginResultDto>("/api/Auth", body);

    return response;

  }

}

export default AuthApi;