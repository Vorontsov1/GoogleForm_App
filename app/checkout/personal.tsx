import { View, Text, ScrollView } from 'react-native';
import { Link, useRouter } from "expo-router";
import { Button, Card, TextInput, useTheme  } from "react-native-paper";
import { useState } from 'react';





export default function PersonalDetails() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const theme  = useTheme();
 const router = useRouter();


  const nextPage = () => {
    router.push("/checkout/delivery");
  };


    return (
      <ScrollView contentContainerStyle={ { gap: 15, maxWidth: 500, width: "100%", alignSelf: 'center', } }
      showsVerticalScrollIndicator={false}
      >
        <Card
          style={{ backgroundColor: theme.colors.background, borderRadius: 10, maxWidth: 500 }}
        >
          <Card.Title title="Personal information" titleVariant="titleLarge" />
          <Card.Content style={{ gap: 10 }}>
            <TextInput
              placeholder="Name"
              label="Name"
              style={{
                backgroundColor: theme.colors.background,
                borderRadius: 10,
              }}
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <TextInput
              placeholder="hey@gmail.com"
              style={{
                backgroundColor: theme.colors.background,
                borderRadius: 10,
              }}
              label="Email"
              value={email}
              onChangeText={(text) => setEmail(email)}
            />
          </Card.Content>
        </Card>
        <Button mode="contained" onPress={nextPage}>
          Next
        </Button>
      </ScrollView>
    );
}