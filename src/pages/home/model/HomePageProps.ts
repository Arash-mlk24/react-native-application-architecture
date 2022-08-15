import { NativeStackScreenProps } from "@react-navigation/native-stack";
import MainAppNavigationParamsList from "@navigation/model/MainAppNavigationParamsList";

type HomePageProps = NativeStackScreenProps<
  MainAppNavigationParamsList,
  'HomePage'
>;

export default HomePageProps;