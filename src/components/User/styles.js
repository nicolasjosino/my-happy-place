import { StyleSheet } from "react-native";
import { themes } from "../../theme/themes";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginHorizontal: 15,
  },
  welcome: {
    fontSize: 35,
    fontWeight: 'bold',
    color: themes.text,
  }
})