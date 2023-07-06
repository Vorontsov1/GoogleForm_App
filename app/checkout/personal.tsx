import { View, Text } from 'react-native';
import { Link, useRouter } from "expo-router";
import { Button } from 'react-native-paper';






export default function PersonalDetails() {
 const router = useRouter();


  const nextPage = () => {
    router.push("/checkout/delivery");
  };


    return (
      <View>
        <Text
          href="/checkout/delivery"
          style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}
        >
          Personal Details
        </Text>
        <Button mode="contained" onPress={nextPage}>
          Next
        </Button>
      </View>
    );
}