import React, { useState} from "react";

import { View, Text, TextInput, Image} from "react-native";

import {styles} from "./styles";

import  LogoPedidos  from "../../../assets/logo_pedidos.png";

export function SignIn(){
    const [name, setName] = useState('');
  return (
    <View style={ styles.container }>
      {/* <Text>Hello World, Guilherme Souza</Text>
      <TextInput 
                style={ styles.inputName } 
                onChangeText={setName} 
                placeholder="Insira seu nome" />
      <Text> Você digitou: {name}</Text> */}

      <Image source={LogoPedidos} style={styles.image} resizeMode="stretch" />

      <View>
            <Text style={styles.title} >
                Realize {`\n`}
                 seus pedidos {`\n`}
                agora
            </Text>

            {/* <Text style={styles.subTitle} >
                Realize {`\n`}
                 seus pedidos {`\n`}
                agora
            </Text> */}
      </View>
    </View>
  )
}