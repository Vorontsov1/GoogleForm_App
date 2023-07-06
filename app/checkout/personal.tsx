import { View, Text } from 'react-native';
import { Link } from "expo-router";


export default function PersonalDetails() {
    return (
      <View>
        <Text
          href="/checkout/delivery"
          style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}
        >
          Personal Details
        </Text>
        <Link
          href="/checkout/delivery">
      Next
        </Link>
      </View>
    );
}