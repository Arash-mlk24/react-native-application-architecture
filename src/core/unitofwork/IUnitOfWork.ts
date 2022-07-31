import IAuthRepo from "@core/network/repository/IAuthRepo";
import IUserRepo from "@core/network/repository/IUserRepo";

interface IUnitOfWork {
  getAuthRepo(): IAuthRepo;
  getUserRepo(): IUserRepo;
}

export default IUnitOfWork;