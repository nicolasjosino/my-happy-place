import { StyleSheet, Dimensions } from "react-native";
import { themes } from "../../theme/themes";

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.background
  },
  searchBarContainer: {
    width: width * 0.9,
    height: 60,
    backgroundColor: '#333',
    borderRadius: 30,
    marginLeft: 20,
    marginBottom: 10,
    // flexDirection: 'row',
    // alignItems: 'center',
    // padding: 10,
    // borderRadius: 5,
    // borderWidth: 3,
    // borderColor: themes.accent
  },
  input: {
    flex: 1,
    color: 'white',
    marginRight:60,
    marginLeft: 10,
  },
  boxButtonSearch: {
    width: 60,
    height: 60,
    backgroundColor: themes.accent,
    position: 'absolute',
    right: 0,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    color: 'white',
  },
  searchBar: {
    backgroundColor: themes.background,
    borderColor: themes.accent,
    borderWidth: 3,
    borderRadius: 10,
    padding: 5
  },
  results: {
  },
  resultItem: {
    flexDirection: 'row',
    margin: 15,
  },
  poster: {
    width: 130,
    height: 210,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: themes.accent
  },
  title: {
    marginLeft: 10,
    color: themes.text,
    fontWeight: '500'
  },
  boxDescription: {
    width: 205,
    height: 179,
    backgroundColor: themes.softBackground,
    padding: 12,
    marginTop: 15,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 15,
  },
  description: {
    color: themes.text,
    fontWeight: '300',
    fontSize: 9,
    textAlign: "justify",
  },
  divider: {
    marginHorizontal: 15
  }
});