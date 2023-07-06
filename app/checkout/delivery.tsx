import { View, Text } from "react-native";
import { Link } from 'expo-router';

export default function DeliveyDetails() {
  return (
    <View>
      <Text href="/checkout/payment" style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>
        Delivey Details
      </Text>
      <Link href="/checkout/payment">Next</Link>
    </View>
  );
}
