import { View, Text, ScrollView } from "react-native";
import { Link, useRouter } from 'expo-router';
import {
  Button,
  Card,
  TextInput,
  useTheme,
  Checkbox,
} from "react-native-paper";



export default function PaymentDetails() {
const theme = useTheme();
   const router = useRouter();

   const nextPage = () => {
router.push('/')
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
        <Card.Title title={"Payment details"} titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <TextInput
            label="Card number"
            placeholder="1212 1212 1212 1212"
            style={{
              backgroundColor: theme.colors.background,
              borderRadius: 10,
            }}
          />
          <View style={{ flexDirection: "row", gap: 15 }}>
            <TextInput
              label="Expiration date"
              placeholder="mm/yyyy"
              style={{
                backgroundColor: theme.colors.background,
                borderRadius: 10,
                flex: 3,
              }}
            />
            <TextInput
              label="Security code"
              style={{
                backgroundColor: theme.colors.background,
                borderRadius: 10,
                flex: 2,
              }}
            />
          </View>

          <View>
            <Checkbox.Item label="Save payment information" status="checked" />
          </View>
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={nextPage}>
        Submit
      </Button>
    </ScrollView>
  );
}
