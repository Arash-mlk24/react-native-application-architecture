import IHomeController from "@core/controller/IHomeController";
import HomeStyles from "@pages/home/HomeStyles";

type MainAppNavigationParamsList = {
  HomePage: {
    controller: IHomeController;
    styles: HomeStyles;
  }
};

export default MainAppNavigationParamsList;