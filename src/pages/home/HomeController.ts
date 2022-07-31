import BaseController from "@core/base/BaseController";
import IHomeController from "@core/controller/IHomeController";
import IUserRepo from "@core/network/repository/IUserRepo";
import IUnitOfWork from "@core/unitofwork/IUnitOfWork";


export default class HomeController extends BaseController implements IHomeController {

  private unitOfWork: IUnitOfWork

  constructor(unitOfWork: IUnitOfWork) {

    super()
    this.unitOfWork = unitOfWork

  }

  getName(id: number): Promise<string> {

    return this.unitOfWork.getUserRepo().getUserName(id);

  }

}
