import { StyleSheet } from "react-native"
import { themes } from "../../theme/themes"

export const styles = StyleSheet.create({
  container: {
    width: 230,
    marginRight: 20
  },
  poster: {
    width: 220,
    height: 330,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: themes.accent
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingHorizontal: 5
  },
  title: {
    fontWeight: 'bold',
    color: themes.text
  },
  releaseYear: {
    fontWeight: '400',
    color: themes.text
  },
  button: {}
})