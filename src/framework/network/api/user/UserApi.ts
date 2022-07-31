import { AxiosResponse } from "axios";
import UserLoginDto from "../../dto/UserLoginDto";
import UserLoginResultDto from "../../dto/UserLoginResultDto";
import UserNameResultDto from "../../dto/UserNameResultDto";
import AxiosInstance from "../../interceptor/AxiosInstance";

class UserApi {

  private static INSTANCE: UserApi;

  public static getInstance() {
    if (!this.INSTANCE) {
      this.INSTANCE = new UserApi();
    }
    return this.INSTANCE;
  }

  constructor() { }

  public get(id: number): Promise<AxiosResponse<UserNameResultDto, any>> {

    const response = AxiosInstance.get<UserNameResultDto>(`/api/user/${id}`);

    return response;

  }

}

export default UserApi;