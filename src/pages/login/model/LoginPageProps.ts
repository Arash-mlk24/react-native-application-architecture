import ILoginController from "@core/controller/ILoginController";
import LoginStyles from "../LoginStyles";

export default interface LoginPageProps {
  controller: ILoginController;
  styles: LoginStyles;
}