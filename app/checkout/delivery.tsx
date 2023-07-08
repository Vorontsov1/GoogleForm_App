import { View, ScrollView } from "react-native";
import {  useRouter } from "expo-router";
import {
  Button,
  Card,
  useTheme,
  RadioButton,
  HelperText,
} from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DeliveryInfoSchema, DeliveryInfo } from '../../src/schema/checkout.schema';
import ControlledInput from "../../src/components/ControlledInput"; 
import { useCheckoutContext } from "../../src/context/CheckoutContext";





export default function DeliveryDetails() {
  const { control, handleSubmit } = useForm<DeliveryInfo>({
    resolver: zodResolver(DeliveryInfoSchema),
    defaultValues: {
      shipping: "free",
    },
  });

  const {setDelivery } = useCheckoutContext();

  const theme = useTheme();
  const router = useRouter();

  const nextPage = (data: DeliveryInfo) => {
    setDelivery(data);
    
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
        <Card.Title title={"Deliver address"} titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <ControlledInput
            control={control}
            name="city"
            label={"City"}
            style={{
              backgroundColor: theme.colors.background,
              borderRadius: 10,
            }}
          />
          <ControlledInput
            control={control}
            name="postalCode"
            label={"Postal code"}
            style={{
              backgroundColor: theme.colors.background,
              borderRadius: 10,
            }}
          />
          <ControlledInput
            control={control}
            name="address"
            label={"Address"}
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
          <Controller
            control={control}
            name="shiping"
            render={({
              field: { value, onChange },
              fieldState: { error, invalid },
            }) => (
              <View>
                <HelperText type="error" visible={invalid}>
                  {error?.message}
                </HelperText>
                <RadioButton.Group
                  onValueChange={(value) => onChange(value)}
                  value={value}
                >
                  <RadioButton.Item label="Free" value="free" />
                  <RadioButton.Item label="Fast" value="fast" />
                  <RadioButton.Item label="Same day" value="same_day" />
                </RadioButton.Group>
              </View>
            )}
          />
        </Card.Content>
      </Card>
      <Button mode="contained" onPress={handleSubmit(nextPage)}>
        Next
      </Button>
    </ScrollView>
  );
}
