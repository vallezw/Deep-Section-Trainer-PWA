import { Text } from 'react-native';
import Swipe from './Swipe';
import { useFonts, Roboto_100Thin } from "@expo-google-fonts/roboto";


export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
  });

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  } 
  return (
    <Swipe  />
  );
  
}
