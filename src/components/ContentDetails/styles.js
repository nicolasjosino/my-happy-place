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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: themes.softBackground,
    borderRadius: 10,
    width: '65%',
    alignSelf: 'center'
  },
  button: {
    paddingVertical: 9,
    paddingHorizontal: 28,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: themes.accent,
    width: '65%',
    alignSelf: 'center',
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: themes.text,
    alignSelf: 'center'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: themes.text
  },
  detailsText: {
    fontWeight: '300'
  },
  overview: {
    marginHorizontal: 10
  },
  section: {
    marginVertical: 15,
  },
  providerLogo: {
    width: 60,
    height: 60,
    borderRadius: 15,
    margin: 10
  },
  accordion: {
    backgroundColor: themes.softBackground,
  },
  accordionTitle: {
    left: 0,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
})