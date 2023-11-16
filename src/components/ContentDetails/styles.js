import { StyleSheet } from "react-native";
import { themes } from "../../theme/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.background
  },
  spinner: {
    marginTop: '100%'
  },
  poster: {
    width: "100%",
    height: 250,
    flex: 1,
    alignSelf: 'center'
  },
  text: {
    color: themes.text,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 15,
    alignSelf: 'center'
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
    alignItems: 'center',
    marginBottom: 25,
  },
  button: {
    paddingVertical: 9,
    paddingHorizontal: 28,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: themes.accent,
  },
  buttonText: {
    color: themes.text,
    fontSize: 14,
    fontWeight: '500'
  },
  sectionTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    marginVertical: 10
  },
  detailsText: {
    fontWeight: '300'
  },
  overview: {
    marginHorizontal: 10
  },
  whereToWatch: {
    marginVertical: 15
  }
})