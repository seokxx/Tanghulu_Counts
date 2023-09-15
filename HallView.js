import { db, firebase } from "./firebaseConfig";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

export const HallView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    return db.collection("products").onSnapshot((snapshot) => {
      let newProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(newProducts);
    });
  }, []);

  const incrementCount = (id) => {
    db.collection("products")
      .doc(id)
      .update({
        count: firebase.firestore.FieldValue.increment(1),
      });
  };

  const decrementCount = (id) => {
    db.collection("products")
      .doc(id)
      .update({
        count: firebase.firestore.FieldValue.increment(-1),
      });
  };

  const resetCount = (id) => {
    db.collection("products").doc(id).update({
      count: 0,
    });
  };

  const getBackgroundColor = (productName) => {
    switch (productName) {
      case "방토":
        return "#E52B50"; // 방토의 붉은색
      case "믹스":
        return "#FFA07A"; // 믹스를 상징하는 연어색
      case "블랙사파이어":
        return "#9370DB"; // 블랙사파이어를 상징하는 보라색
      case "체리":
        return "#DC143C"; // 체리를 상징하는 진한 붉은색
      case "딸기":
        return "#FF4500"; // 딸기를 상징하는 밝은 주황색
      case "블루베리":
        return "#87CEFA"; // 블루베리를 상징하는 연한 파란색
      case "파인애플":
        return "#FFD700"; // 파인애플을 상징하는 황금색
      case "귤":
        return "#FFA500"; // 귤을 상징하는 주황색
      case "샤인머스켓":
        return "#98FB98"; // 샤인머스켓을 상징하는 연한 초록색
    }
    return "#fff"; // 디폴트 배경화면 - 흰색
  };

  return (
    <View style={styles.container}>
      {products.map((product) => (
        <View
          key={product.id}
          style={[
            styles.productContainer,
            { backgroundColor: getBackgroundColor(product.name) },
          ]}
        >
          <Text style={styles.productName}>
            {product.name} : {product.count}개
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => incrementCount(product.id)}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => decrementCount(product.id)}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => resetCount(product.id)}
            >
              <Text style={styles.buttonText}>set</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
    borderBottomWidth: 2,
    borderColor: "#ddd",
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
});
