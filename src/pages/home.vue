
<script setup>
import { ref } from "vue";

import Card from "../components/card.vue";

import {
  produtosStore,
  produtosStore2,
  produtosStore3,
} from "../store/produtos";

const store = produtosStore();
const store2 = produtosStore2();
const store3 = produtosStore3();

const diaDeMacarronada = ref(store.cardDataStore);
const diaDeSuper = ref(store2.cardDataStore);
const nenhum = ref(store3.cardDataStore);

function isNotMonday() {
  return new Date().getDay() !== 1;
}
</script>

<template>
  <template v-if="isNotMonday()">
    <Card
      v-for="data in diaDeMacarronada"
      :key="data.id"
      :data="data"
    />

    <Card
      v-for="data in diaDeSuper"
      :key="data.id"
      :data="data"
    />

    <Card
      v-for="data in nenhum"
      :key="data.id"
      :data="data"
    />
  </template>
</template>

<style>
#fechados {
  color: #fdd426;
  text-align: center;
  font-family: Barlow-SemiBold;
  padding-bottom: 30px;
}
</style>
