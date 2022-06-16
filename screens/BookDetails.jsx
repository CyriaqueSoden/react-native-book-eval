import { View, Image, StyleSheet, Text } from "react-native";

export default function BookDetails(item, { navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: item.route.params.item.cover_url,
        }}
      />

      <Text style={styles.text}>{item.route.params.item.details.subjects}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 300,
    height: 400,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    backgroundColor: "grey",
  },
});
