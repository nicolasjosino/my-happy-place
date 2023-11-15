import { StyleSheet } from "react-native";
import { themes } from "../../theme/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  searchBarContainer: {
    backgroundColor: '#1D1D27',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: themes.accent
  },
  input: {
    flex: 1,
    color: 'white',
    marginLeft: 10,
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
    marginHorizontal: 10,
    color: themes.text,
    fontWeight: '500'
  },
  divider: {
    marginHorizontal: 15
  }
});