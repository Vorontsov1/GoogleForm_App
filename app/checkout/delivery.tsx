import { View, Text, ScrollView } from "react-native";
import { Link, useRouter } from "expo-router";
import {useState} from 'react'
import {
  Button,
  Card,
  TextInput,
  useTheme,
  RadioButton,
} from "react-native-paper";

export default function DeliveyDetails() {
const [shiping, setShiping] = useState('free')

const theme = useTheme();
   const router = useRouter();

   const nextPage = () => {
     router.push("/checkout/payment");
   };
  return (
    <ScrollView
      contentContainerStyle={{
        gap: 15,
        maxWidth: 500,
        width: "100%",
        alignSelf: "center",
      }}
      showsVerticalScrollIndicator={false}
    >
      <Card
        style={{ backgroundColor: theme.colors.background, borderRadius: 10 }}
      >
        <Card.Title title={"Delivery address"} titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <TextInput
            label="City"
            style={{
              backgroundColor: theme.colors.background,
              borderRadius: 10,
            }}
          />
          <TextInput
            label="Postal Code"
            style={{
              backgroundColor: theme.colors.background,
              borderRadius: 10,
            }}
          />
          <TextInput
            label="Address"
            style={{
              backgroundColor: theme.colors.background,
              borderRadius: 10,
            }}
          />
        </Card.Content>
      </Card>
      <Card
        style={{ backgroundColor: theme.colors.background, borderRadius: 10 }}
      >
        <Card.Title title={"Shiping options"} titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <RadioButton.Group
            onValueChange={(value) => setShiping(value)}
            value={shiping}
          >
            <RadioButton.Item label="Free" value="free" />
            <RadioButton.Item label="Fast" value="fast" />
            <RadioButton.Item label="Same day" value="same_day" />
          </RadioButton.Group>
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={nextPage}>
        Next
      </Button>
    </ScrollView>
  );
}
