import LoginStyles from "../LoginStyles";

export default interface LoginPageContentProps {
  processing: boolean;
  styles: LoginStyles;
  usernameInputValue: string;
  usernameInputOnChange: (text: string) => void;
  passwordInputValue: string;
  passwordInputOnChange: (text: string) => void;
}