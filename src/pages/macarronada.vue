<script>
import { ref, watch, onUpdated } from "vue";
import { carrinhoStore } from "../store/produtos";
import { useToast } from "vue-toastification";
import router from "../router/index";

export default {
  setup() {
    const toast = useToast();

    const carrinho = carrinhoStore();

    const Macarronada = ref({
      macarrao: [{ nome: "Macarrão Talharim", quantidade: 1, preco: 0 }],
      carnes: [
        { nome: "Carne Moída", quantidade: 0, preco: 17 },
        { nome: "Frango", quantidade: 0, preco: 17 },
        { nome: "Camarão", quantidade: 0, preco: 20 },
      ],
      molhos: [
        { nome: "Molho Rosê", quantidade: 0, preco: 0 },
        { nome: "Molho Branco", quantidade: 0, preco: 0 },
      ],
      ingredientes: [
        { nome: "Bacon", quantidade: 0, preco: 0 },
        { nome: "Mussarela", quantidade: 0, preco: 0 },
        //{ nome: "Azeitona", quantidade: 0, preco: 0 },
        { nome: "Milho Verde", quantidade: 0, preco: 0 },
        { nome: "Orégano", quantidade: 0, preco: 0 },
      ],
    });

    function salvarPedido() {
      carrinho.macarronadas.push(Macarronada.value);

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
      this.Macarronada.carnes.forEach((item) => {
        if (item === selectedItem) {
          item.quantidade = 1;
        } else {
          item.quantidade = 0;
        }
      });
    }

    function updateQuantitiesMolhos(selectedItem) {
      this.Macarronada.molhos.forEach((item) => {
        if (item === selectedItem) {
          item.quantidade = 1;
        } else {
          item.quantidade = 0;
        }
      });
    }

    return {
      Macarronada,
      salvarPedido,
      updateQuantities,
      updateQuantitiesMolhos,
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
        <span id="textDividers">Macarronada</span>
        <hr />
      </div>
      <div v-for="(item, index) in Macarronada.macarrao" :key="item">
        <label style="pointer-events: none" id="nomeItem" for="adicional">
          {{ item.nome }}</label
        >
        <label id="preco">R$: {{ item.preco.toFixed(2) }}</label>
        <p id="itens"></p>
      </div>
      <div class="dotted-line">
        <hr />
        <span id="textDividers">Carnes</span>
        <hr />
      </div>
      <div v-for="(item, index) in Macarronada.carnes" :key="item">
        <button
          class="botao1"
          @click="item.quantidade++, updateQuantities(item)"
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
        <span id="textDividers">Molhos</span>
        <hr />
      </div>
      <div v-for="(item, index) in Macarronada.molhos" :key="item">
        <button
          class="botao1"
          @click="item.quantidade++, updateQuantitiesMolhos(item)"
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
        <span id="textDividers">Adicionais</span>
        <hr />
      </div>
      <br />
      <div v-for="(item, index) in Macarronada.ingredientes" :key="item">
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
