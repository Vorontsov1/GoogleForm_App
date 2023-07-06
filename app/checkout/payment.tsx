import { View, Text } from "react-native";
import { Link, useRouter } from 'expo-router';
import { Button } from "react-native-paper";



export default function PaymentDetails() {

   const router = useRouter();

   const nextPage = () => {
router.push('/')
   };
  
  
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>
        Payment Details
      </Text>
      <Button mode="contained" onPress={nextPage}>
        Submit
      </Button>
    </View>
  );
}
