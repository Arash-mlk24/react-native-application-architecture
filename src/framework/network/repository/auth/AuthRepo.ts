import AppError from "@common/error/AppError";
import IAuthApi from "@core/network/api/IAuthApi";
import IAuthRepo from "@core/network/repository/IAuthRepo";
import UserLoginDto from "@network/dto/UserLoginDto";
import { AxiosError } from "axios";

class AuthRepo implements IAuthRepo {

  private authApi: IAuthApi;

  constructor(authApi: IAuthApi) {
    this.authApi = authApi;
  }

  public login(userLoginDto: UserLoginDto): Promise<string> {

    return new Promise<string>((resolve, reject) => {

      this.authApi.auth(userLoginDto)
        .then(response => {

          if (response.status === 200) {
            resolve(response.data.token)
          } else {
            reject(new AppError("دریافت اطلاعات با خطا روبرو شد."))
          }

        })
        .catch((error: AxiosError) => {

          if (error.response?.status === 404) {
            reject(new AppError("نام کاربری یا رمز عبور اشتباه است."))
          } else {
            reject(new AppError('خطای سیستمی'))
          }

        })
        .catch(error => {
          reject(new AppError('خطای سیستمی'))
        })

    })

  }

}

export default AuthRepo;