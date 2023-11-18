import { StyleSheet } from "react-native";
import { themes } from "../../theme/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.background,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  episodeContainer: {
    marginTop: 100,
    marginHorizontal: 40,
  },
  episodeImage: {
    alignSelf: 'center',
    width: 300,
    height: 150,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: themes.accent
  },
  episodeDetails: {
    paddingHorizontal: 5,
    marginTop: 10
  },
  season: {
    color: themes.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5
  },
  episodeName: {
    color: themes.text,
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 5
  },
  text: {
    marginHorizontal: 10,
    color: themes.text
  }
});