import IHomeController from "@core/controller/IHomeController";

interface IControllerFactory {
  getHomeController(): IHomeController;
}

export default IControllerFactory;