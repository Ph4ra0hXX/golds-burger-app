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
  const dayOfWeek = currentDate.getDay();
  return dayOfWeek === 3; // 3 representa quarta-feira
}

function isThursday() {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  return dayOfWeek === 4 || dayOfWeek === 5; // 4 representa quinta-feira
}

function isNotWednesdayOrThursday() {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  return dayOfWeek == 2 || dayOfWeek == 6 || dayOfWeek == 0;
}

function isSegunda() {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  return dayOfWeek === 1;
}
</script>

<template>
<!--   <h2 id="fechados">No momento estamos fechados!</h2> -->
 <Card v-if="isWednesday()" v-for="data in diaDeMacarronada" :data="data" /> 

  <Card v-if="isThursday()" v-for="data in diaDeSuper" :data="data" />

  <Card v-if="isNotWednesdayOrThursday()" v-for="data in nenhum" :data="data" />
</template>

<style>
#fechados {
  color: #fdd426;
  text-align: center;
  font-family: Barlow-SemiBold;
  padding-bottom: 30px;
}
</style>
