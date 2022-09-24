<template>
  <div class="flex flex-col items-center">
    <p class="text-4xl text-center mt-7">Start Using Cue!</p>
    <div
      class="w-3/4 mt-7 mx-auto bg-black flex flex-col items-center rounded-xl"
    >
      <p class="py-5 text-xl text-white">Login with Metamask</p>
      <Button
        @click.prevent="store.handleWalletConnect()"
        class="px-3 py-1.5 bg-white rounded-md mb-5"
      >
        Connect
      </Button>
    </div>
    <p v-if="store.error" class="text-red-500">{{ store.error }}</p>
  </div>
</template>

<script>
import connections from "../composables/connections";
import { useWalletStore } from "../stores/Wallet";
export default {
  setup() {
    const store = useWalletStore();
    // const handleClick = () => {
    //   console.log("clicked");
    // };
    return {
      store,
    };
  },
};
</script>

<style></style>
