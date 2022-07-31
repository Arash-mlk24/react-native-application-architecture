import BaseController from "@core/base/BaseController";
import IHomeController from "@core/controller/IHomeController";
import ILoginController from "@core/controller/ILoginController";
import IUserRepo from "@core/network/repository/IUserRepo";
import IUnitOfWork from "@core/unitofwork/IUnitOfWork";
import UserLoginDto from "@network/dto/UserLoginDto";


export default class LoginController extends BaseController implements ILoginController {

  private unitOfWork: IUnitOfWork

  constructor(unitOfWork: IUnitOfWork) {

    super()
    this.unitOfWork = unitOfWork

  }

  login(username: string, password: string): Promise<string> {

    const userLoginDto: UserLoginDto = new UserLoginDto(username, password)
    return this.unitOfWork.getAuthRepo().login(userLoginDto);

  }

}
