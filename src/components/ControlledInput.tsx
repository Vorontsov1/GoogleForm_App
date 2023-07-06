import { useForm, Controller, Control } from "react-hook-form";
import { View } from 'react-native';
import { HelperText, TextInput, useTheme } from "react-native-paper";


type ControlledInputProps = {
    control: Control;
    name: string;
} & React.ComponentProps<typeof TextInput>;


export default function ControlledInput({
control,
name,
...TextInputProps
}: ControlledInputProps) {
  const theme = useTheme();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error, invalid },
      }) => (
        <View>
          <TextInput
           {...TextInputProps}
            onBlur={onBlur}
            onChangeText={onChange}
            error={invalid}
            value={value}
            style={{
              backgroundColor: theme.colors.background,
              borderRadius: 10,
            }}
          />
          <HelperText type="error" visible={invalid}>
            {error?.message}
          </HelperText>
        </View>
      )}
    />
  );
}
