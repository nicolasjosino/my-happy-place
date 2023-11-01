import { StyleSheet } from "react-native";
import { themes } from "../../theme/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 15,
  },
  poster: {
    width: "100%",
    height: 250,
    flex: 1,
    // borderRadius: 20,
    // borderWidth: 3,
    // borderColor: '#aeabab2b',
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