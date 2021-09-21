import React from 'react';
import Item from './components/Item';
import Tema from './components/tema';
import { FlatList, StyleSheet, View } from 'react-native';
import Texto from '../../components/Texto'

export default function Carrinho({ tema, itens }) {
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            style={styles.lista}
            ListHeaderComponent={() => {
                return <>
                    <View>
                        <Tema {...tema} />
                        <Texto style={styles.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }}
        />
    </>
}

const styles = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
        padding: 16,
    },
    lista: {
        paddingHorizontal: 16,
    }
})
