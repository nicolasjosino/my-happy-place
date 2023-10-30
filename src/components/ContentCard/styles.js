import { StyleSheet } from "react-native"

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
    borderColor: '#BF244D'
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingHorizontal: 5
  },
  title: {
    fontWeight: 'bold',
    color: 'white'
  },
  releaseYear: {
    fontWeight: '400',
    color: 'white'
  },
  button: {}
})