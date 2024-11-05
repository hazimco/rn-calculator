import { ColorValue, StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "white",
  },
});

interface Props {
  title: string;
  backgroundColor?: ColorValue;
  textColor?: ColorValue;
}

const Button = ({ title, backgroundColor, textColor = "white" }: Props) => {
  return (
    <TouchableOpacity style={{ backgroundColor }}>
      <Text style={{ color: textColor }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
