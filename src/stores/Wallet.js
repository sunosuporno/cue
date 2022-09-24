import { ref, computed, provide } from "vue";
import { defineStore } from "pinia";
import { ethers } from "ethers";
import router from "../router";
import abi from "../composables/abi";
const { ethereum } = window;

export const useWalletStore = defineStore("wallet", () => {
  const address = ref("");
  let signer;
  const error = ref("");
  const contract = ref("");
  const handleWalletConnect = async () => {
    error.value = "";
    try {
      console.log("handleWalletConnect");
      const provider = new ethers.providers.Web3Provider(ethereum);
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
      console.log("signer", signer);
      address.value = await signer.getAddress();
      if (provider.network.chainId !== 80001) {
        error.value =
          "Please connect to Mumbai Testnet and Connect to continue";
        return;
      } else {
        console.log("address", address);
        contract.value = new ethers.Contract(
          "0x2125aF4B5a1F21Bf2f6F218384Ee89a18E30AaB6",
          abi,
          signer
        );
        console.log("contract", contract);
        router.push("/dashboard");
      }
    } catch (err) {
      error.value = err.message;
    }
  };

  return { handleWalletConnect, address, signer, contract, error };
});
