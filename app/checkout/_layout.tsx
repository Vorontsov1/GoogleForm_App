import {Stack} from 'expo-router'
import { StatusBar } from 'expo-status-bar';




export default function CheckoutStack () {
    return (

        <>
          <StatusBar style="light" />  
        <Stack
        screenOptions={{
          contentStyle: { backgroundColor: "#f0ebf8", flex: 1, padding: 15 },
          headerStyle: { backgroundColor: "#673ab8" },
          headerTitleStyle: { color: "#f0ebf8" },
          headerTintColor: "#f0ebf8",
        }}
      >
        <Stack.Screen
          name="personal"
          options={{
            title: "Personal information",
          }}
        />
        <Stack.Screen
          name="delivery"
          options={{
            title: "Delivey information",
          }}
        />
        <Stack.Screen
          name="payment"
          options={{ title: "Payment information" }}
        />
      </Stack>
        </>
    );
}