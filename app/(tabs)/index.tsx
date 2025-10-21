import { createHomeStyles } from "@/assets/styles/home.styles";
import useTheme from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { colors } = useTheme();

  const homeStyle = createHomeStyles(colors);
  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyle.container}
    >
      <SafeAreaView style={homeStyle.safeArea}>
        <Text>Akmal</Text>
      </SafeAreaView>
    </LinearGradient>
  );
}
