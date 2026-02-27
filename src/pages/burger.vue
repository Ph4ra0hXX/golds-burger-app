<script>
import { ref, watch, onUpdated } from "vue";
import { carrinhoStore } from "../store/produtos";
import { useToast } from "vue-toastification";
import router from "../router/index";

export default {
  setup() {
    const toast = useToast();

    const carrinho = carrinhoStore();

    const Burger = ref({
      Pao: [
        { nome: "🟢 Pão Bola", preco: 3.0, quantidade: 0 },
        { nome: "Pão Árabe", preco: 3.0, quantidade: 0 },
        { nome: "Pão Integral", preco: 4.0, quantidade: 0 },
        { nome: "Pão Brioche", preco: 3.0, quantidade: 0 },
      ],
      Queijo: [
        { nome: "Cheddar", preco: 4.0, quantidade: 0 },
        { nome: "Mussarela", preco: 3.0, quantidade: 0 },
        { nome: "Coalho", preco: 2.0, quantidade: 0 },
      ],
      Cremes: [
        { nome: "Creme de Cheddar", preco: 2.0, quantidade: 0 },
       // { nome: "Cream cheese", preco: 3.0, quantidade: 0 },
      ],
      Carne: [
        { nome: "🟢 Carne de Sol", preco: 6.0, quantidade: 0 },
        { nome: "🟢 Frango Desfiado", preco: 5.0, quantidade: 0 },
        { nome: "🟢 Hambúrguer", preco: 3.0, quantidade: 0 },
        { nome: "🟢 Carne Caseira", preco: 7.0, quantidade: 0 },
        { nome: "🟢 Filé de Frango", preco: 5.0, quantidade: 0 },
        { nome: "🟢 Linguiça Suína", preco: 4.0, quantidade: 0 },
      ],
      Complemento: [
        { nome: "🟢 Bacon", preco: 3.0, quantidade: 0 },
        { nome: "🟢 Ovo", preco: 3.0, quantidade: 0 },
        { nome: "Presunto", preco: 2.0, quantidade: 0 },
        { nome: "🟢 Calabresa", preco: 3.0, quantidade: 0 },
        { nome: "🟢 Cebola Caramelizada", preco: 2.0, quantidade: 0 },
        { nome: "Maionese Golds", preco: 0.0, quantidade: 0 },
        { nome: "🟢 Batata Palha", preco: 2.0, quantidade: 0 },
        { nome: "🟢 Molho Barbecue", preco: 2.0, quantidade: 0 },
        { nome: "🟢 Milho Verde", preco: 2.0, quantidade: 0 },
        { nome: "🟢 Maionese Golds", preco: 0.5, quantidade: 0 },
      ],
      Verdura: [
        { nome: "Alface", preco: 0.0, quantidade: 0 },
        { nome: "Tomate", preco: 0.0, quantidade: 0 },
        { nome: "Cebola Crua", preco: 0.0, quantidade: 0 },
        { nome: "Cenoura Ralada", preco: 0.0, quantidade: 0 },
      ],
    });

    function salvarPedido() {
      console.log(Burger.value);

      carrinho.burgers.push(Burger.value);

      router.push("/");

      toast.success("Adicionado com sucesso!", {
        timeout: 2000,
        position: "top-right",
        icon: false,
        showCloseButtonOnHover: true,
      });
    }

    function voltar() {
      router.push("/");
    }

    function updateQuantities(selectedItem) {
      this.Burger.Pao.forEach((item) => {
        if (item === selectedItem) {
          item.quantidade = 1;
        } else {
          item.quantidade = 0;
        }
      });
    }

    return {
      Burger,
      salvarPedido,
      updateQuantities,
      voltar,
    };
  },
};
</script>

<template>
  <div id="cardapio">
    <div id="listar">
      <div class="dotted-line">
        <hr />
        <span id="textDividers">Pães</span>
        <hr />
      </div>
      <div v-for="(item, index) in Burger.Pao" :key="item">
        <button
          class="botao1"
          @click="(item.quantidade++, updateQuantities(item))"
        >
          +
        </button>

        <button
          v-if="item.quantidade > 0"
          class="botao2"
          @click="item.quantidade--"
        >
          -
        </button>

        <label style="pointer-events: none" id="nomeItem" for="adicional"
          ><span id="quantidadeDiv">{{ item.quantidade }}x</span>
          {{ item.nome }}</label
        >
        <label id="preco">R$: {{ item.preco.toFixed(2) }}</label>
        <p id="itens"></p>
        <br />
      </div>
      <div class="dotted-line">
        <hr />
        <span id="textDividers">Queijos</span>
        <hr />
      </div>
      <div v-for="(item, index) in Burger.Queijo" :key="item">
        <button class="botao1" @click="item.quantidade++">+</button>

        <button
          v-if="item.quantidade > 0"
          class="botao2"
          @click="item.quantidade--"
        >
          -
        </button>

        <label style="pointer-events: none" id="nomeItem" for="adicional"
          ><span id="quantidadeDiv">{{ item.quantidade }}x</span>
          {{ item.nome }}</label
        >
        <label id="preco">R$: {{ item.preco.toFixed(2) }}</label>
        <p id="itens"></p>
        <br />
      </div>

      <div class="dotted-line">
        <hr />
        <span id="textDividers">Cremes</span>
        <hr />
      </div>
      <div v-for="(item, index) in Burger.Cremes" :key="item">
        <button class="botao1" @click="item.quantidade++">+</button>

        <button
          v-if="item.quantidade > 0"
          class="botao2"
          @click="item.quantidade--"
        >
          -
        </button>

        <label style="pointer-events: none" id="nomeItem" for="adicional"
          ><span id="quantidadeDiv">{{ item.quantidade }}x</span>
          {{ item.nome }}</label
        >
        <label id="preco">R$: {{ item.preco.toFixed(2) }}</label>
        <p id="itens"></p>
        <br />
      </div>
      <!---------------------------->

      <div class="dotted-line">
        <hr />
        <span id="textDividers">Carnes</span>
        <hr />
      </div>
      <br />
      <div v-for="(item, index) in Burger.Carne" :key="item">
        <button class="botao1" @click="item.quantidade++">+</button>

        <button
          v-if="item.quantidade > 0"
          class="botao2"
          @click="item.quantidade--"
        >
          -
        </button>

        <label style="pointer-events: none" id="nomeItem" for="adicional"
          ><span id="quantidadeDiv">{{ item.quantidade }}x</span>
          {{ item.nome }}</label
        >
        <label id="preco">R$: {{ item.preco.toFixed(2) }}</label>
        <p id="itens"></p>
        <br />
      </div>

      <div class="dotted-line">
        <hr />
        <span id="textDividers">Complementos</span>
        <hr />
      </div>
      <div v-for="(item, index) in Burger.Complemento" :key="item">
        <button
          class="botao1"
          @click="
            item.nome === 'Maionese Golds' && item.quantidade <= 0
              ? item.quantidade++
              : item.nome !== 'Maionese Golds'
                ? item.quantidade++
                : 0
          "
        >
          +
        </button>

        <button
          v-if="item.quantidade > 0"
          class="botao2"
          @click="item.quantidade--"
        >
          -
        </button>

        <label style="pointer-events: none" id="nomeItem" for="adicional"
          ><span id="quantidadeDiv">{{ item.quantidade }}x</span>
          {{ item.nome }}</label
        >
        <label id="preco">R$: {{ item.preco.toFixed(2) }}</label>
        <p id="itens"></p>
        <br />
      </div>

      <!---------------------------->

      <div class="dotted-line">
        <hr />
        <span id="textDividers">Verduras</span>
        <hr />
      </div>
      <br />
      <div v-for="(item, index) in Burger.Verdura" :key="item">
        <button
          class="botao1"
          @click="item.quantidade <= 0 ? item.quantidade++ : 0"
        >
          +
        </button>

        <button
          v-if="item.quantidade > 0"
          class="botao2"
          @click="item.quantidade--"
        >
          -
        </button>
        <label style="pointer-events: none" id="nomeItem" for="adicional"
          ><span id="quantidadeDiv">{{ item.quantidade }}x</span>
          {{ item.nome }}</label
        >
        <label id="preco">R$: {{ item.preco.toFixed(2) }}</label>
        <p id="itens"></p>
        <br />
      </div>

      <button @click="salvarPedido" id="butOpcoes" type="submit" value="Submit">
        adicionar
      </button>

      <button id="butOpcoes2" @click="voltar()" type="submit" value="Submit">
        voltar
      </button>
    </div>
  </div>
</template>

<style>
#observacao {
  padding: 5px;
  margin-bottom: 20px;
  height: 60px;
}
#quantidadeDiv {
  font-weight: bold;
  color: #fdd426;
  font-size: 20px;
}

#textDividers {
  color: #fdd426;
  font-family: "Great Vibes";
  font-size: 40px;
  font-weight: lighter;
}
.dotted-line {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
}

.dotted-line hr {
  flex: 1;
  border: none;
  border-top: 2px dashed white;
  margin: 0 10px;
}

.dotted-line span {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.botao1 {
  background-color: #f2cb05;
  color: #000000;
  border: none;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  width: 35px;
  margin-right: 2px;
}

.botao2 {
  background-color: #f2cb05;
  color: #000000;
  border: none;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  width: 35px;
  margin-left: 2px;
}

#nomeItem {
  font-size: 16px;
  margin-left: 7px;
}
#tituloRadio {
  display: flex;
  align-items: center;
}

#tituloDoRadio {
  margin-left: 3px;
}

input[type="radio"] {
  margin-left: -3px;
  border: 0px;
  width: 30px;
  height: 2em;
  accent-color: #f27141;
}
</style>
