import IHomeController from "@core/controller/IHomeController";
import ILoginController from "@core/controller/ILoginController";
import IControllerFactory from "@core/factory/IControllerFactory";
import IUnitOfWork from "@core/unitofwork/IUnitOfWork";
import HomeController from "@pages/home/HomeController";
import LoginController from "@pages/login/LoginController";

class ControllerFactory implements IControllerFactory {

  private unitOfWork: IUnitOfWork;

  constructor(unitOfWork: IUnitOfWork) {
    this.unitOfWork = unitOfWork;
  }

  public getHomeController(): IHomeController {
    return new HomeController(this.unitOfWork);
  }

  public getLoginController(): ILoginController {
    return new LoginController(this.unitOfWork);
  }

}

export default ControllerFactory;