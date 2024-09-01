import firebase from "../Config/Firebase";

export async function getKitsProducts() {
    const querySnapshot = await firebase.firestore().collection("kits").get();
    return querySnapshot.docs.map(doc => doc.data());
}

export async function getAcrilicoProducts() {
    const querySnapshot = await firebase.firestore().collection("acrilico").get();
    return querySnapshot.docs.map(doc => doc.data());
}

export async function getGelProducts() {
    const querySnapshot = await firebase.firestore().collection("gel").get();
    return querySnapshot.docs.map(doc => doc.data());
}

export async function getLiquidosProducts() {
    const querySnapshot = await firebase.firestore().collection("liquidos").get();
    return querySnapshot.docs.map(doc => doc.data());
}

export async function getEsmaltesProducts() {
    const querySnapshot = await firebase.firestore().collection("esmaltes").get();
    return querySnapshot.docs.map(doc => doc.data());
}

export async function getAparatosProducts() {
    const querySnapshot = await firebase.firestore().collection("aparatos").get();
    return querySnapshot.docs.map(doc => doc.data());
}

