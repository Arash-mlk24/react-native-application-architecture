import IHomeController from "@core/controller/IHomeController";
import HomeStyles from "../styles/HomeStyles";

export default interface HomePageProps {
  controller: IHomeController;
  styles: HomeStyles;
}