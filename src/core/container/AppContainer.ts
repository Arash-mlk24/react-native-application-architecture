import UnitOfWork from "@core/contract/UnitOfWork";
import ControllerFactory from "@core/contract/ControllerFactory";
import IAuthApi from "@core/network/api/IAuthApi";
import IUserApi from "@core/network/api/IUserApi";
import IAuthRepo from "@core/network/repository/IAuthRepo";
import IUserRepo from "@core/network/repository/IUserRepo";
import IUnitOfWork from "@core/unitofwork/IUnitOfWork";
import AuthApi from "@network/api/auth/AuthApi";
import UserApi from "@network/api/user/UserApi";
import AuthRepo from "@network/repository/auth/AuthRepo";
import UserRepo from "@network/repository/user/UserRepo";

class AppContainer {

  // singleton
  private static INSTANCE: AppContainer;

  public static getInstance() {
    if (!this.INSTANCE) {
      this.INSTANCE = new AppContainer();
    }
    return this.INSTANCE;
  }

  private controllerFactory: ControllerFactory;

  constructor() {

    const userApi: IUserApi = new UserApi();
    const authApi: IAuthApi = new AuthApi();

    const userRepo: IUserRepo = new UserRepo(userApi);
    const authRepo: IAuthRepo = new AuthRepo(authApi);

    const unitOfWork: IUnitOfWork = new UnitOfWork(
      userRepo,
      authRepo
    );

    this.controllerFactory = new ControllerFactory(unitOfWork);

  }


  // methods
  public getControllers(): ControllerFactory {
    return this.controllerFactory;
  }

}

export default AppContainer;