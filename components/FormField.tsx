import { Eye, EyeOff } from "lucide-react-native";
import { useState } from "react";
import {
  KeyboardTypeOptions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface FormFieldProps {
  title: string;
  placeholder?: string;
  value: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  keyboardType?: KeyboardTypeOptions;
  icon?: React.ReactNode;
  containerStyle?: string;
  labelStyle?: string;
  iconStyle?: string;
  secureTextEntry?: boolean;
}

const FormField = ({
  title,
  placeholder,
  value,
  handleChangeText,
  otherStyles = "",
  keyboardType = "default",
  icon,
  containerStyle = "",
  labelStyle = "",
  iconStyle = "",
  secureTextEntry = false,
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = secureTextEntry || title === "Password";

  return (
    <View className={`w-full space-y-2 ${otherStyles} ${containerStyle}`}>
      <Text
        className={`text-base font-semibold mb-2 text-[#333333] ${labelStyle}`}
      >
        {title}
      </Text>
      <View className="relative bg-[#F6F8FA] rounded-full">
        <View className="flex-row items-center px-4 py-3">
          {icon && <View className={`mr-3 ${iconStyle}`}>{icon}</View>}
          <TextInput
            className="flex-1 text-[15px] text-[#333333]"
            value={value}
            onChangeText={handleChangeText}
            keyboardType={keyboardType}
            style={{ height: 24 }}
            autoCapitalize="none"
            placeholder={placeholder}
            placeholderTextColor="#ADADAD"
            secureTextEntry={isPassword && !showPassword}
          />
          {isPassword && (
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="justify-center"
            >
              {showPassword ? (
                <EyeOff size={20} color="#333333" />
              ) : (
                <Eye size={20} color="#333333" />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default FormField;
