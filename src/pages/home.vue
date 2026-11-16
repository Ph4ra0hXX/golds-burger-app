
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

function isWednesday() {
  const currentDate = new Date();
  return currentDate.getDay() === 3;
}

function isThursday() {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  return dayOfWeek === 4 || dayOfWeek === 5;
}

function isNotMonday() {
  const currentDate = new Date();
  return currentDate.getDay() !== 1;
}

function isSegunda() {
  const currentDate = new Date();
  return currentDate.getDay() === 1;
}
</script>

<template>
  <!-- Segunda-feira: nenhum card é exibido -->

  <!-- Quarta-feira: macarronada -->
  <Card
    v-if="isWednesday()"
    v-for="data in diaDeMacarronada"
    :key="data.id"
    :data="data"
  />

  <!-- Quinta e sexta-feira: supermercado -->
  <Card
    v-if="isThursday()"
    v-for="data in diaDeSuper"
    :key="data.id"
    :data="data"
  />

  <!-- Terça, sábado e domingo: outros produtos -->
  <Card
    v-if="isNotMonday() && !isWednesday() && !isThursday()"
    v-for="data in nenhum"
    :key="data.id"
    :data="data"
  />
</template>

<style>
#fechados {
  color: #fdd426;
  text-align: center;
  font-family: Barlow-SemiBold;
  padding-bottom: 30px;
}
</style>
