import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCpGxdiQjXSJIsboG_d_lyd2GDrJUzNzXA",
  authDomain: "summit-shop-fddb9.firebaseapp.com",
  projectId: "summit-shop-fddb9",
  storageBucket: "summit-shop-fddb9.appspot.com",
  messagingSenderId: "1029047248251",
  appId: "1:1029047248251:web:12acb7feb15fdcdfecc9de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const data = [
    {
      "name": "Alpine Climbing Jacket",
      "price": 299.99,
      "imageUrl": "https://i.imgur.com/NUjtJPm.png",
      "category": "Jackets & Vests",
      "colors": ["#000000", "#FFFFFF"],
      "size": "L",
      "quantity": 50,
      "rating": 4.5,
      "featured": true
    },
    {
      "name": "Base Layer Top",
      "price": 49.99,
      "imageUrl": "https://i.imgur.com/T5TRNKD.png",
      "category": "Tops",
      "colors": ["#000000", "#FFFFFF"],
      "size": "M",
      "quantity": 50,
      "rating": 4.6,
      "featured": true
    },
    {
      "name": "Waterproof Hiking Pants",
      "price": 89.99,
      "imageUrl": "https://i.imgur.com/EBmP6QW.png",
      "category": "Bottoms",
      "colors": ["#000000", "#FFFFFF"],
      "size": "L",
      "quantity": 50,
      "rating": 4.5,
      "featured": true
    },
    {
      "name": "Climbing Helmet",
      "price": 89.99,
      "imageUrl": "https://i.imgur.com/4fUrndG.png",
      "category": "Equipment",
      "colors": ["#000000", "#FFFFFF"],
      "size": "One Size",
      "quantity": 50,
      "rating": 4.7,
      "featured": false
    },
    {
      "name": "Wool Beanie",
      "price": 19.99,
      "imageUrl": "https://i.imgur.com/BxjViPs.png",
      "category": "Accessories",
      "colors": ["#000000", "#FFFFFF"],
      "size": "One Size",
      "quantity": 100,
      "rating": 4.5,
      "featured": false
    },
]
  

const uploadData = async () => {
  try {
    const collectionRef = collection(db, "products");

    for (const item of data) {
      await addDoc(collectionRef, item);
    }
    console.log("Data uploaded successfully!");
  } catch (error) {
    console.error("Error uploading data: ", error);
  }
};

// Run the upload function
uploadData();
