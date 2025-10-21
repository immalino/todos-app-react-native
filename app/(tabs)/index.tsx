import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import useTheme from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
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
        <Header />
        <TodoInput />
      </SafeAreaView>
    </LinearGradient>
  );
}
