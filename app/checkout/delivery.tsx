import { View, Text } from "react-native";
import { Link, useRouter } from "expo-router";
import { Button } from "react-native-paper";

export default function DeliveyDetails() {

   const router = useRouter();

   const nextPage = () => {
     router.push("/checkout/payment");
   };
  return (
    <View>
      <Text
        href="/checkout/payment"
        style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}
      >
        Delivey Details
      </Text>
      <Button mode="contained" onPress={nextPage}>
        Next
      </Button>
    </View>
  );
}
