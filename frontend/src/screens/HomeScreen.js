import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";

import styles from "../styles/styles";

import { getPeople, deletePerson } from "../servers/CharactersCrud";

export default function HomeScreen({ navigation }) {

  const [people, setPeople] = useState([]);

  async function loadPeople(){
    const data = await getPeople();
    setPeople(data);
  }

  useEffect(()=>{
    loadPeople();
  },[]);

}