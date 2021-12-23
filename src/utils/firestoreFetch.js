


const firestoreFetch = async () =>{
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
});
}