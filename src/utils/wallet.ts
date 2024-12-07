import { DAppClient, BeaconEvent } from "@airgap/beacon-sdk";

const dAppClient = new DAppClient({ name: "Wallet Connect" });

dAppClient.subscribeToEvent(BeaconEvent.ACTIVE_ACCOUNT_SET, (account) => {
  console.log(`${BeaconEvent.ACTIVE_ACCOUNT_SET} triggered: `, account);
});

export const connectWallet = async (): Promise<string | null> => {
  try {
    console.log("Requesting permissions...");
    const permissions = await dAppClient.requestPermissions();
    console.log("Got permissions:", permissions.address);
    return permissions.address;
  } catch (error: any) {
    console.error("Got error:", error.message);
    return null;
  }
};