import { defineStore } from "pinia"

export const carrinhoStore = defineStore("carrinho", {
  state: () => {
    return {
      burgers: [],
      macarronadas: [],
      batatas: [],
      bebidas: [],
      dadosPessoais: {
        nome: "",
        rua: "",
        bairro: "",
        numero: "",
        referencia: "",
        formaDeEntrega: "",
        formaDePagamento: "",
        troco: "",
      },
      pedidos: [],
      valorTotal: 0,
      quantidadeDeItens: 0,
      observacao: "",
    }
  },
  getters: {
    getValorTotal() {
      let total = 0

      var pedidos = [
        ...this.burgers,
        ...this.macarronadas,
        ...this.batatas,
        ...this.bebidas,
      ]

      pedidos.forEach((categoria) => {
        for (const chave in categoria) {
          categoria[chave].forEach((item) => {
            total += item.preco * item.quantidade
          })
        }
      })

      return total.toFixed(2)
    },
    getTotalPedidos() {
      return (
        this.burgers.length +
        this.macarronadas.length +
        this.batatas.length +
        this.bebidas.length
      )
    },
  },
  actions: {
    salvarPedido(pedido) {},
  },
})

export const produtosStore = defineStore("produto", {
  state: () => {
    return {
      cardDataStore: [
        {
          id: 1,
          nome: "BURGER",
          img: "food1.webp",
          descricao: "Monte do seu jeito",
          url: "/burger",
        },
        {
          id: 2,
          nome: "MACARONADA",
          img: "food2.webp",
          descricao: "Monte do seu jeito",
          url: "/macarronada",
        },
        {
          id: 6,
          nome: "BATATA FRITA",
          img: "food3.webp",
          descricao: "No ponto certo",
          url: "/batata",
        },
        {
          id: 4,
          nome: "BEBIDAS",
          img: "food4.webp",
          descricao: "Refrescantes",
          url: "/bebidas",
        },
      ],
    }
  },
})

export const menuStore = defineStore("menu", {
  state: () => {},
})
