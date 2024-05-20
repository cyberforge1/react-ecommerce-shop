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
        "id": "1",
        "name": "Men's Down Jacket",
        "price": 199.99,
        "discountedPrice": 149.99,
        "size": "L",
        "sizes": ["S", "M", "L", "XL"],
        "availability": true,
        "quantity": 10,
        "imageUrl": "/images/mens_down_jacket.jpg",
        "gender": "Men",
        "featured": true,
        "favorited": false,
        "offer": "Winter Sale",
        "offerEndDate": "2024-12-31"
    },
    {
        "id": "2",
        "name": "Men's Waterproof Shell",
        "price": 149.99,
        "discountedPrice": null,
        "size": "M",
        "sizes": ["S", "M", "L", "XL"],
        "availability": true,
        "quantity": 15,
        "imageUrl": "/images/mens_waterproof_shell.jpg",
        "gender": "Men",
        "featured": true,
        "favorited": true,
        "offer": null,
        "offerEndDate": null
    },
    {
        "id": "3",
        "name": "Men's Fleece Jacket",
        "price": 79.99,
        "discountedPrice": 59.99,
        "size": "XL",
        "sizes": ["S", "M", "L", "XL"],
        "availability": true,
        "quantity": 8,
        "imageUrl": "/images/mens_fleece_jacket.jpg",
        "gender": "Men",
        "featured": false,
        "favorited": false,
        "offer": "Flash Sale",
        "offerEndDate": "2024-11-30"
    },
    {
        "id": "4",
        "name": "Men's Softshell Jacket",
        "price": 129.99,
        "discountedPrice": 99.99,
        "size": "S",
        "sizes": ["S", "M", "L", "XL"],
        "availability": true,
        "quantity": 12,
        "imageUrl": "/images/mens_softshell_jacket.jpg",
        "gender": "Men",
        "featured": false,
        "favorited": true,
        "offer": "Black Friday Deal",
        "offerEndDate": "2024-11-29"
    },
    {
        "id": "5",
        "name": "Men's Bomber Jacket",
        "price": 109.99,
        "discountedPrice": null,
        "size": "M",
        "sizes": ["S", "M", "L", "XL"],
        "availability": true,
        "quantity": 20,
        "imageUrl": "/images/mens_bomber_jacket.jpg",
        "gender": "Men",
        "featured": true,
        "favorited": false,
        "offer": null,
        "offerEndDate": null
    },
    {
        "id": "6",
        "name": "Men's Parka",
        "price": 249.99,
        "discountedPrice": 199.99,
        "size": "L",
        "sizes": ["S", "M", "L", "XL"],
        "availability": true,
        "quantity": 5,
        "imageUrl": "/images/mens_parka.jpg",
        "gender": "Men",
        "featured": false,
        "favorited": true,
        "offer": "Holiday Special",
        "offerEndDate": "2024-12-25"
    },
    {
        "id": "7",
        "name": "Men's Windbreaker",
        "price": 69.99,
        "discountedPrice": null,
        "size": "M",
        "sizes": ["S", "M", "L", "XL"],
        "availability": true,
        "quantity": 25,
        "imageUrl": "/images/mens_windbreaker.jpg",
        "gender": "Men",
        "featured": true,
        "favorited": false,
        "offer": null,
        "offerEndDate": null
    },
    {
        "id": "8",
        "name": "Men's Quilted Jacket",
        "price": 139.99,
        "discountedPrice": 109.99,
        "size": "S",
        "sizes": ["S", "M", "L", "XL"],
        "availability": true,
        "quantity": 10,
        "imageUrl": "/images/mens_quilted_jacket.jpg",
        "gender": "Men",
        "featured": false,
        "favorited": true,
        "offer": "End of Season Sale",
        "offerEndDate": "2024-10-31"
    },
    {
        "id": "9",
        "name": "Men's Insulated Vest",
        "price": 89.99,
        "discountedPrice": 69.99,
        "size": "XL",
        "sizes": ["S", "M", "L", "XL"],
        "availability": true,
        "quantity": 18,
        "imageUrl": "/images/mens_insulated_vest.jpg",
        "gender": "Men",
        "featured": false,
        "favorited": false,
        "offer": "Cyber Monday",
        "offerEndDate": "2024-12-01"
    },
    {
        "id": "10",
        "name": "Men's Denim Jacket",
        "price": 89.99,
        "discountedPrice": 69.99,
        "size": "L",
        "sizes": ["S", "M", "L", "XL"],
        "availability": true,
        "quantity": 12,
        "imageUrl": "/images/mens_denim_jacket.jpg",
        "gender": "Men",
        "featured": false,
        "favorited": false,
        "offer": "Spring Sale",
        "offerEndDate": "2024-06-30"
    }
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
