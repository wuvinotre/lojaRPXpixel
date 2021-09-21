import React from "react";
import Texto from "../../../components/Texto";
import { Image, View, StyleSheet, FlatList } from 'react-native';


export default function Itens({ item: { nome, imagem } }) {
    return <View style={styles.item}>
        <Image source={imagem} style={styles.imagem} />
        <Texto style={styles.nome}>{nome}</Texto>
    </View>
}

const styles = StyleSheet.create({

    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    imagem: {
        width: 46 + 8,
        height: 46 + 8,
        marginLeft: 11,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})