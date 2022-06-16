import { StyleSheet, Text } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  IconButton,
  Colors,
  Button,
} from "react-native-paper";

export default function BookCard({ item, onCardPress }) {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Text style={styles.title}>{item.details.title}</Text>
        <Text style={styles.source}>{item.details.description}</Text>
        <Text style={styles.source}>
          written by {item.details.authors[0].name}
        </Text>
        <Text style={styles.date}>{item.details.publish_date}</Text>
      </Card.Content>
      <Card.Actions>
        <Button title="test" onPress={() => onCardPress && onCardPress()}>
          Details
        </Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
  },
  source: {
    fontSize: 13,
  },
  date: {
    fontSize: 10,
  },
});
