import { useState } from "react";
import { Text, StyleSheet } from "react-native";
import React from "react";
import GestureRecognizer, {
} from "react-native-swipe-gestures";

function Swipe() {
  	const [count, setCount] = useState(0);

	const config = {
		velocityThreshold: 0.3,
		directionalOffsetThreshold: 80,
  	};

  return (
    
      <GestureRecognizer
        style={styles.gestureRecognizer}
        onPress={() => setCount(count + 1)}
        onSwipeLeft={() => {
          setCount(count > 0 ? count - 1 : 0);
        }}
        onSwipeRight={() => {
          setCount(count + 1);
        }}
        onSwipeDown={() => {
          setCount(0)
        }}
        config={config}
      >
        <Text style={styles.text}>{count}</Text>
      </GestureRecognizer>

  );
}

const styles = StyleSheet.create({
  gestureRecognizer: {
    flex: 1,
    backgroundColor: "#d6eaf8",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 110,
    fontFamily: "Roboto_100Thin",
  },
});

export default Swipe;
