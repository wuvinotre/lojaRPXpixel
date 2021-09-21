import React from "react";
import { Image, View, Button, TouchableOpacity } from 'react-native';
import styles from "./styles";
import topo from "../../../../mochila/loja.png";
import logo from "../../../../mochila/linha.png"
import Texto from "../../../components/Texto";

export default function Tema({ nome, nomeLoja, descricao, preco, botao }) {
    return <>
        <Image source={topo} style={styles.topo} />

        <View style={styles.carrinho}>
            <Texto style={styles.nome}>{nome}</Texto>
            <View style={styles.loja}>
                <Image source={logo} style={styles.imagemLoja} />
                <Texto style={styles.nomeLoja}>{nomeLoja}</Texto>
            </View>
            <Texto style={styles.descricao}>{descricao}</Texto>
            <Texto style={styles.preco}>{preco}</Texto>
        </View >
        <TouchableOpacity style={styles.botao} onPress={() => { }}>
            <Texto style={styles.textoBotao}>{botao}</Texto>
        </TouchableOpacity>
    </>
}