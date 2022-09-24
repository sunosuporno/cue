<template>
  <div class="bg-gradient-to-r from-violet-500 to-fuchsia-500">
    <div class="w-11/12 m-auto pt-3 pb-3 flex justify-between items-center">
      <img src="../assets/logo.svg" alt="" />
      <div class="w-min bg-black px-3 py-2 rounded-lg">
        <p class="text-white" v-if="store.address">{{ store.address }}</p>
        <button
          class="text-white w-full"
          v-else
          @click="store.handleWalletConnect()"
        >
          Connect
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useWalletStore } from "../stores/Wallet";
export default {
  setup() {
    const store = useWalletStore();
    console.log(store.signer);
    return {
      store,
    };
  },
};
</script>

<style></style>
