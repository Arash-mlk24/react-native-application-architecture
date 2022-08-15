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
import IControllerFactory from "@core/factory/IControllerFactory";
import HomeStyles from "@pages/home/HomeStyles";
import IStylesFactory from "@core/factory/IStylesFactory";
import StylesFactory from "@core/contract/StylesFactory";

class AppContainer {

  // singleton
  private static INSTANCE: AppContainer;

  public static getInstance() {
    if (!this.INSTANCE) {
      this.INSTANCE = new AppContainer();
    }
    return this.INSTANCE;
  }

  private controllerFactory: IControllerFactory;
  private stylesFactory: IStylesFactory;

  constructor() {

    // initializing Controller Factory
    const userApi: IUserApi = new UserApi();
    const authApi: IAuthApi = new AuthApi();

    const userRepo: IUserRepo = new UserRepo(userApi);
    const authRepo: IAuthRepo = new AuthRepo(authApi);

    const unitOfWork: IUnitOfWork = new UnitOfWork(
      userRepo,
      authRepo
    );
    this.controllerFactory = new ControllerFactory(unitOfWork);


    // initializing Styles Factory
    const homeStyles: HomeStyles = new HomeStyles();

    this.stylesFactory = new StylesFactory(homeStyles);

  }


  // methods
  public getControllers(): IControllerFactory {
    return this.controllerFactory;
  }

  public getStyles(): IStylesFactory {
    return this.stylesFactory;
  }

}

export default AppContainer;