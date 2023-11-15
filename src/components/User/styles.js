import { StyleSheet } from "react-native";
import { themes } from "../../theme/themes";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: themes.background
  },
  contentContainer: {
    flexGrow: 1,
    marginHorizontal: 15,
    justifyContent: 'center'
  },
  spinner: {
    marginTop: '100%'
  },
  welcome: {
    fontSize: 35,
    fontWeight: 'bold',
    color: themes.text,
  }
})