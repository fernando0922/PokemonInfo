import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { getAllTypes } from "../api/getRequest";
import Error from "../components/Error";
import Loader from "../components/Loader";
import TypeList from "../components/screen/home/TypeList";

const Home = ({ navigation, route }) => {
  const [type, setType] = useState({
    reqStatus: false,
    data: [],
    errorStatus: false,
  });

  useLayoutEffect(() => {
    getAllTypes()
      .then((res = []) => setType({ reqStatus: true, data: res }))
      .catch((err) => setType({ ...type, errorStatus: true }));
  }, []);

  return (
    <View style={styles.homeContainer}>
      {type.errorStatus ? (
        <Error message={type.data[0]?.message ?? "Something went wrong"} />
      ) : type.reqStatus ? (
        <TypeList navigation={navigation} route={route} data={type.data} />
      ) : (
        <Loader message={"Loading ..."} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingTop: 16,
  },
});

export default Home;
