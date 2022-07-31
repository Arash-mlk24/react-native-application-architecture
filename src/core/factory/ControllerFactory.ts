import IAuthRepo from "@core/network/repository/IAuthRepo";
import IUserRepo from "@core/network/repository/IUserRepo";
import HomeController from "@pages/home/HomeController";

class ControllerFactory {

  private userRepo: IUserRepo;
  private authRepo: IAuthRepo;

  constructor(userRepo: IUserRepo, authRepo: IAuthRepo) {
    this.userRepo = userRepo;
    this.authRepo = authRepo;
  }

  public getHomeController(): HomeController {
    return new HomeController(this.userRepo);
  }

  // public getLoginController(): LoginController {
  //   return new LoginController(this.authRepo);
  // }

}

export default ControllerFactory;