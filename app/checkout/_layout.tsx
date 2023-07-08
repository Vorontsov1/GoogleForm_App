import {Stack} from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import CheckoutContextProvider from '../../src/context/CheckoutContext';






export default function CheckoutStack () {
    return (
      <CheckoutContextProvider>
        <StatusBar style="light" />
        <Stack
          screenOptions={{
            contentStyle: { backgroundColor: "#f0ebf8", flex: 1, padding: 15 },
            headerStyle: { backgroundColor: "#673ab8" },
            headerTitleStyle: { color: "#f0ebf8" },
            headerTintColor: "#f0ebf8",
          }}
        >
          <Stack.Screen name="personal" options={{ title: "Personal info" }} />
          <Stack.Screen name="delivery" options={{ title: "Delivery info" }} />
          <Stack.Screen name="payment" options={{ title: "Payment info" }} />
        </Stack>
      </CheckoutContextProvider>
    );
}