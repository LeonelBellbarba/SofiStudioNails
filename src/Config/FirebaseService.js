import firebase from "../Config/Firebase";

export async function getKitsProducts() {
    const querySnapshot = await firebase.firestore().collection("kits").get();
    return querySnapshot.docs.map(doc => doc.data());
}

export async function getAcrilicoProducts() {
    const querySnapshot = await firebase.firestore().collection("acrilico").get();
    return querySnapshot.docs.map(doc => doc.data());
}

