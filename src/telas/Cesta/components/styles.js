import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 250
    },
    carrinho: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    loja: {
        flexDirection: 'row',
        paddingVertical: 16,
    },
    imagemLoja: {
        width: 32,
        height: 32,
    },
    nomeLoja: {
        fontSize: 16,
        lineHeight: 30,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#FF8C00",
        paddingVertical: 16,
        borderRadius: 36,
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    },
})

export default styles;