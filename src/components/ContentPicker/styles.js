import { StyleSheet } from "react-native";
import { themes } from "../../theme/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.background
  },
  header: {
    color: themes.text,
    fontSize: 35,
    fontWeight: 'bold',
  },
  buttonGroup: {
    marginTop: '30%',
    paddingHorizontal: 50
    // alignSelf: 'center'
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: themes.accent,
    marginVertical: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: themes.text,
    alignSelf: 'center'
  },
})