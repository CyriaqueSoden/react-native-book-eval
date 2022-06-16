import { View, FlatList, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import BookCard from "../modules/BookCard";
import BookDetails from "./BookDetails";

export default function BookList({ navigation }) {
  const renderItem = ({ item }) => (
    <BookCard
      item={item}
      onCardPress={() => {
        navigation.navigate("BookDetails" ,{ item: item })
      }}
    />
  );
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.rank}
        contentContainerStyle={styles.mainContainer}
        automaticallyAdjustContentInsets={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
    paddingBottom: 4,
  },
});

const data = [
  {
    key: "ISBN:9780980200447",
    cover_url: "https://covers.openlibrary.org/b/id/5546156-L.jpg",
    details: {
      number_of_pages: 92,
      title: "Slow reading",
      subjects: ["Books and reading", "Reading"],
      publishers: ["Litwin Books"],
      description: "A study of voluntary slow reading from diverse angles",
      authors: [
        {
          key: "/authors/OL6548935A",
          name: "John Miedema",
        },
      ],
      publish_date: "March 2009",
    },
  },
  {
    key: "ISBN:0385472579",
    cover_url: "https://covers.openlibrary.org/b/id/240726-L.jpg",
    details: {
      number_of_pages: 159,
      title: "Zen speaks",
      subjects: ["Zen Buddhism -- Caricatures and cartoons"],
      publishers: ["Anchor Books"],
      description: "shouts of nothingness",
      authors: [
        {
          key: "/authors/OL223368A",
          name: "Zhizhong Cai",
        },
      ],
      publish_date: "1994",
    },
  },
  {
    key: "ISBN:0201558025",
    cover_url: "https://covers.openlibrary.org/b/id/135182-L.jpg",
    details: {
      number_of_pages: 657,
      title: "Concrete mathematics",
      subjects: ["Mathematics", "Computer science"],
      publishers: ["Addison-Wesley"],
      description: "a foundation for computer science",
      authors: [
        {
          key: "/authors/OL720958A",
          name: "Ronald L. Graham",
        },
        {
          key: "/authors/YU827398B",
          name: "Ken Thompson",
        },
      ],
      publish_date: "1994",
    },
  },
];
