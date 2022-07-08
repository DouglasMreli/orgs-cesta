import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Botao from '../../../componentes/Botao.js';

import Texto from '../../../componentes/Texto.js';

export default function Detalhes({nome, logoFazenda, nomeFazenda, descricao, preco, botao}) {
    return <>
        
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={estilos.descricao} >{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>

         <Botao style={estilos.botao} onPress={() => {}} > Comprar </Botao> 
    </>
}


const estilos = StyleSheet.create({
    nome:{
        color: "#464646",
        fontSize:26,
        lineHeight:42,
        fontWeight: "bold",
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda:{
        width:32,
        height:32
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    }, 
    descricao:{
        color:"#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 42,
        marginTop: 8
    },
    botao: {
        marginTop: 16,
    }
})