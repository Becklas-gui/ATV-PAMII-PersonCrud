import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

import styles from "../styles/styles";

import { createPerson, updatePerson } from "../servers/peopleCrud";

export default function AddEditScreen({ route, navigation }) {

  const person = route.params?.person;

  const [CharacterName, setCharacterName] = useState(person?.CharacterName || "");
  const [description, setDescription] = useState(person?.description || "");
  const [Type, setType] = useState(person?.Type || "");

  async function save(){

    const data = {CharacterName, description, Type };

    if(person){

      await updatePerson(person.id, data);

    }else{

      await createPerson(data);

    }

    navigation.goBack();
  }
}