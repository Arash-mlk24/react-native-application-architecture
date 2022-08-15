import IHomeController from "@core/controller/IHomeController";
import ILoginController from "@core/controller/ILoginController";
import IControllerFactory from "@core/factory/IControllerFactory";
import IStylesFactory from "@core/factory/IStylesFactory";
import IUnitOfWork from "@core/unitofwork/IUnitOfWork";
import HomeController from "@pages/home/HomeController";
import HomeStyles from "@pages/home/HomeStyles";
import LoginController from "@pages/login/LoginController";

class StylesFactory implements IStylesFactory {

  private homeStyles: HomeStyles;

  constructor(homeStyles: HomeStyles) {
    this.homeStyles = homeStyles;
  }

  public getHomeStyles(): HomeStyles {
    return this.homeStyles;
  }

}

export default StylesFactory;