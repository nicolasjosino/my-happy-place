import { StyleSheet } from "react-native"
import { themes } from "../../theme/themes"

export const styles = StyleSheet.create({
  contentRow: {
    marginVertical: 25,
    backgroundColor: themes.background,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: themes.text,
    marginBottom: 15
  }
})