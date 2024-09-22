import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"; //to connect with backend
export default function StorageView({ navigation }) {
  const [user, setUsers] = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("http://192.168.43.130:5500/api/teacher/view")
          .then((res) => {
            console.log(res);
            setData(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
        const storageData = await AsyncStorage.getItem("user");
        const parsedData = storageData ? JSON.parse(storageData) : [];
        setUsers(parsedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const deleteData = async (index) => {
    try {
      const updatedUsers = [...user];
      updatedUsers.splice(index, 1);
      setUsers(updatedUsers);
      await AsyncStorage.setItem("user", JSON.stringify(updatedUsers));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const Delete = async(id)=>{
    await axios.delete(`http://192.168.43.130:5500/api/teacher/delete/${id}`)
    .then((res) => {
      console.log(res);
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  return (
    <View>
      <FlatList
        horizontal={true}
        data={user}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.card}>
              <Image
                style={styles.Image}
                source={require("../Screen/im/human..png")}
              />
              <Text>{item.model}</Text>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>{item.phone}</Text>
              <Text style={styles.text}>{item.email}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => deleteData(index)}
              >
                <Text style={styles.text}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button1}
                onPress={() =>
                  navigation.navigate("UpdateStorage", { item, index })
                }
              >
                <Text style={styles.text}>Update</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.main}>
        {data.map((item) => {
          return (
            <View style={styles.card1}>
              <Image
                style={styles.Image}
                source={require("../Screen/im/human..png")}
              />
              <Text style={styles.text}> {item.name} </Text>
              <Text style={styles.text}> {item.phone} </Text>
              <Text style={styles.text}> {item.email} </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => Delete(item._id)}
              >
                <Text style={styles.text}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button1}
                onPress={() =>
                  navigation.navigate("UpdateStorage", { item, index })
                }
              >
                <Text style={styles.text}>Update</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "lightblack",
  },
  main:{
    flexDirection:"row"
  },

  card: {
    borderRadius: 10,
    height: 320,
    width: 200,
    margin: 10,
    backgroundColor: "black",
    padding: 20,
    fontFamily: "timesnewroman",
    color: "red",
    fontStyle: "italic",
    color: "white",
  },
  card1: {
    borderRadius: 10,
    height: 320,
    width: 200,
    margin: 10,
    backgroundColor: "black",
    padding: 20,
    fontFamily: "timesnewroman",
    color: "red",
    fontStyle: "italic",
    color: "white",
  
  },
  Image: {
    borderRadius: 10,
    borderWidth: 2,
    width: 100,
    height: 100,
    align: "center",
    marginLeft: 30,
  },
  button: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 170,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 6, height: 6 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    margin: 20,
    borderRadius: 5,
    alignSelf: "center",
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    marginLeft: 20,
  },
  button1: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 170,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 6, height: 6 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    margin: 20,
    borderRadius: 5,
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    marginLeft: 20,
  },
  text: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
  },
});

// import { StyleSheet, Text, View, FlatList, Image,TouchableOpacity } from "react-native";
// import React, { useEffect, useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function StorageView() {
//   const [user, setUsers] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const storageData = await AsyncStorage.getItem("user");
//         const paredData = storageData ? JSON.parse(storageData) : [];
//         setUsers(paredData);
//       } catch {
//         console.error("Error fetching data:" + error);
//       }
//     };
//     fetchData();
//   }, []);

//   const deleteData = async (index) => {
//     try {
//       const updatedUsers = [...user];
//       updatedUsers.splice(index, 1);
//       setUsers(updatedUsers);
//       await AsyncStorage.setItem("user", JSON.stringify(updatedUsers));
//     } catch (error) {
//       console.error("Error deleting data:", error);
//     }
//   };

//   return (
//     <View>
//       <FlatList
//         horizontal={true}
//         data={user}
//         renderItem={({ item }) => {
//           return (
//             <View style={styles.card}>
//               <Image
//                 style={styles.Image}
//                 source={require("../Screen/im/images.jpeg")}
//               />
//               <Text>{item.model}</Text>
//               <Text style={styles.text}>{item.name}</Text>
//               <Text style={styles.text}>{item.phone}</Text>
//               <Text style={styles.text}>{item.email}</Text>
//               <TouchableOpacity
//                 style={styles.button} onPress= {deleteData}>
//                 <Text style={styles.text}>Delete</Text>
//               </TouchableOpacity>
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   body: {
//     backgroundColor: "lightblack",
//   },

//   card: {
//     borderRadius: 10,
//     height: 250,
//     width: 200,
//     margin: 10,
//     backgroundColor: "black",
//     padding: 20,
//     fontFamily: "timesnewroman",
//     color: "red",
//     fontStyle: "italic",
//     color: "white",
//   },
//   Image: {
//     borderRadius: 10,
//     borderWidth: 2,
//     width: 160,
//     height: 80,
//     align: "center",
//   },
//   button: {
//     backgroundColor: "gray",
//     alignItems: "center",
//     justifyContent: "center",
//     height: 40,
//     width: 170,
//     elevation: 10,
//     shadowColor: "black",
//     shadowOffset: { width: 6, height: 6 },
//     shadowRadius: 5,
//     shadowOpacity: 0.5,
//     margin: 20,
//     borderRadius: 5,
//     alignSelf:"center"
//   },
//   text: {
//     color: "white",
//     fontSize: 14,
//     textAlign: "center",
//     margin:5
//   },
// });
