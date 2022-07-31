import IAuthRepo from "@core/network/repository/IAuthRepo";
import IUserRepo from "@core/network/repository/IUserRepo";
import IUnitOfWork from "@core/unitofwork/IUnitOfWork";

class UnitOfWork implements IUnitOfWork {

  private userRepo: IUserRepo;
  private authRepo: IAuthRepo;

  constructor(userRepo: IUserRepo, authRepo: IAuthRepo) {
    this.authRepo = authRepo;
    this.userRepo = userRepo;
  }

  getAuthRepo(): IAuthRepo {
    return this.authRepo;
  }

  getUserRepo(): IUserRepo {
    return this.userRepo;
  }

}

export default UnitOfWork;