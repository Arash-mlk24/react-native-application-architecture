import AppError from "@common/error/AppError";
import IUserApi from "@core/network/api/IUserApi";
import IUserRepo from "@core/network/repository/IUserRepo";


class UserRepo implements IUserRepo {

  private userApi: IUserApi;

  constructor(userApi: IUserApi) {
    this.userApi = userApi;
  }

  public getUserName(id: number): Promise<string> {

    return new Promise<string>((resolve, reject) => {
      this.userApi.get(id).then(response => {

        if (response.status === 200) {
          resolve(response.data.name);
        } else {
          reject(new AppError("دریافت اطلاعات با خطا روبرو شد."));
        }

      }).catch((er) => {
        reject(new AppError("خطای سیستمی رخ داد"));
      })
    })

  }

}

export default UserRepo;