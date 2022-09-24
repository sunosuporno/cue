<template>
  <div v-if="hasCompany" class="flex flex-col items-center">
    <div
      class="mt-7 border border-black rounded-lg py-4 px-3 flex flex-col items-start w-5/12 mx-auto"
    >
      <p class="text-4xl">Name your org</p>
      <div class="bg-black w-4/5 h-1 mb-4"></div>
      <p class="text-2xl my-2">Company Name</p>
      <input
        v-model="companyName"
        type="text"
        placeholder="Apple"
        class="focus:outline-none w-2/5 border-b-2 border-black mb-4"
      />
      <button
        @click="createCompany"
        class="bg-black text-white px-3 py-1 rounded-md"
      >
        Create
      </button>
    </div>
  </div>
  <div v-else>
    <h1>Hello</h1>
    <button @click="check">check signer</button>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import { useWalletStore } from "../stores/Wallet";
import router from "../router";
export default {
  setup() {
    const hasCompany = ref(true);
    const store = useWalletStore();
    const companyName = ref("");

    onMounted(async () => {
      console.log(store.address);
      const test = await store.contract.walletToCompany(
        "0x07a721260416e764618B059811eaf099a940Af14"
      );
      console.log(test);
      if (!store.address) {
        router.push("/");
      }
    });

    const check = () => {
      console.log(store.contract);
    };
    const createCompany = async () => {
      console.log(companyName.value);
    };
    return {
      store,
      check,
      hasCompany,
      companyName,
    };
  },
};
</script>

<style></style>
