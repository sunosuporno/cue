import { ethers } from "ethers";
import { ref } from "vue";
const { ethereum } = window;
const address = ref("");

const handleWalletConnect = async () => {
  console.log("handleWalletConnect");
  const provider = new ethers.providers.Web3Provider(ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  console.log("signer", signer);
  address.value = await signer.getAddress();
  console.log("address", address);
  return { address, signer };
};

const connections = () => {
  return { handleWalletConnect, address };
};

export default connections;
