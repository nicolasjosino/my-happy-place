import { StyleSheet } from "react-native";
import { themes } from "../../theme/themes";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: themes.background,
    // alignItems: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    marginHorizontal: 15,
    justifyContent: 'center'
  },
  spinner: {
    marginTop: '100%'
  },
  logo: {
    width: 140,
    height: 100,
    marginBottom: 50,
    marginHorizontal: 100,
  },
  welcome: {
    fontSize: 35,
    fontWeight: 'bold',
    color: themes.text,
  }
})