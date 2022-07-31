import IHomeController from "@core/controller/IHomeController";
import HomeStyles from "../HomeStyles";

export default interface HomePageProps {
  controller: IHomeController;
  styles: HomeStyles;
}