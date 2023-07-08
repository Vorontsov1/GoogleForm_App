import { View, Text, ScrollView } from 'react-native';
import { Link, useRouter } from "expo-router";
import {
  Button,
  Card,
  TextInput,
  useTheme,
  HelperText,
} from "react-native-paper";
import { useState } from 'react';
import {useForm, Controller} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'; 
import { PersonalInfoSchema, PersonalInfo } from '../../src/schema/checkout.schema.ts';
import ControlledInput from '../../src/components/ControlledInput';
import { useCheckoutContext } from '../../src/context/CheckoutContext';






export default function PersonalDetails() {
  const {control, handleSubmit,} = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
  });


  const { setPersonal } = useCheckoutContext();


  const theme  = useTheme();
 const router = useRouter();


  const nextPage = (data: PersonalInfo) => {
    setPersonal(data);
    router.push("/checkout/delivery");
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
          style={{
            backgroundColor: theme.colors.background,
            borderRadius: 10,
            maxWidth: 500,
          }}
        >
          <Card.Title title="Personal information" titleVariant="titleLarge" />
          <Card.Content style={{ gap: 10 }}>
            <ControlledInput
              control={control}
              placholder="Name"
              name="name"
              label="Name"
            />

            <ControlledInput
              control={control}
              name="email"
              placeholder="hey@gmail.com"
              label="Email"
            />

            <ControlledInput
              control={control}
              name="password"
              label="Password"
              secureTextEntry
            />
            <ControlledInput
              control={control}
              name="confirmPassword"
              label="ConfirmPassword"
              secureTextEntry
            />
          </Card.Content>
        </Card>
        <Button mode="contained" onPress={handleSubmit(nextPage)}>
          Next
        </Button>
      </ScrollView>
    );
}