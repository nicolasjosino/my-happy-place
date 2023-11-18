import { StyleSheet } from "react-native";
import { themes } from "../../theme/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.background,
    marginTop: 20
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: themes.text,
    marginBottom: 15
  },
  episodeContainer: {
    marginVertical: 20,
    width: 300,
    alignSelf: 'center'
  },
  episodeImage: {
    alignSelf: 'center',
    width: 300,
    height: 130,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: themes.accent
  },
  episodeDetails: {
    paddingHorizontal: 5,
    marginTop: 10
  },  
  episodeName: {
    color: themes.text,
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 5
  },
  text: {
    color: themes.text
  }
});