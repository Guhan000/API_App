import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";

const Item = ({ id, email, firstName, lastName }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{id}</Text>
    <Text style={styles.details}>{email}</Text>
    <Text style={styles.details}>{firstName}</Text>
    <Text style={styles.details}>{lastName}</Text>
  </View>
);

// the filter
const List = ({ searchPhrase, setClicked, data }) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <Item id={"ID: " + item.id} email={"Email: " + item.email} firstName={"First Name: " + item.first_name} lastName={"Last Name: " + item.last_name}/>;
    }
    // filter of the name
    if (item.first_name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item id={"ID: " + item.id} email={"Email: " + item.email} firstName={"First Name: " + item.first_name} lastName={"Last Name: " + item.last_name} />;
    }
    
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}
        style={styles.listItem}
      >
        <FlatList
          data={data.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
    backgroundColor:"#100F0F",
    padding: 20,
    borderRadius: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
    color: "#E2DCC8"
  },
  details: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
    color: "#E2DCC8"
  },
});