import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { getFirestore, doc,setDoc, getDoc,query, limit,orderBy,startAt,endAt, where , getDocs,updateDoc ,addDoc ,collection ,serverTimestamp} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-storage.js';

const firebaseConfig = {
    apiKey: "AIzaSyCItLVglRXW0RJV4gL1R1TXCDyECBBWmUY",
    authDomain: "miradz.firebaseapp.com",
    projectId: "miradz",
    storageBucket: "miradz.appspot.com",
    messagingSenderId: "912374203967",
    appId: "1:912374203967:web:90b0cf782617624c579a8a",
    measurementId: "G-709H4FB4Z2"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);




  document.addEventListener('DOMContentLoaded', async function() {
    const storsList = document.querySelector('.stors_list');

    // Récupérer les données de Firebase
    const querySnapshot = await getDocs(collection(db, 'items'));

    // Parcourir les données et créer des éléments HTML pour chaque élément
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const NomStore = doc.id.toLowerCase();
        const NomStoreMAJ = NomStore.toUpperCase();

        const storeCouverture = data.image_couverture;

        const brStoreElement = document.createElement("div");
        brStoreElement.className = "br_store_element";

        const storeElementImage = document.createElement("img");
        storeElementImage.src = storeCouverture;

        const filterStore = document.createElement("div");
        filterStore.className = "filter_store";

        const titleStoreHome = document.createElement("h1");
        titleStoreHome.className = "title_store_home";
        titleStoreHome.innerHTML = NomStoreMAJ;

        // Ajouter des événements de survol pour l'effet de zoom
        brStoreElement.addEventListener('mouseover', function() {
            storeElementImage.style.transform = 'scale(1.2)';
        });

        brStoreElement.addEventListener('mouseout', function() {
            storeElementImage.style.transform = 'scale(1)';
        });

        brStoreElement.appendChild(storeElementImage);
        brStoreElement.appendChild(filterStore);
        brStoreElement.appendChild(titleStoreHome);

        brStoreElement.addEventListener('click', () => {
            window.location.href = `mira.html?store=${NomStore}`;
        });

        // Ajout de l'élément brStoreElement à la liste des magasins
        storsList.appendChild(brStoreElement);
    });

    // Appliquer ScrollReveal après que les éléments de Firebase ont été ajoutés au DOM
    ScrollReveal().reveal('.br_store_element', {
        origin: 'top',
        reset: true,
        distance: '40px',
        duration: 1500,
        delay: 200,
        interval: 200 // Pour animer les éléments l'un après l'autre
    });
});



   // document.addEventListener('DOMContentLoaded', function() {
   //     const returnButton = document.getElementById('returnButton');
   //     returnButton.addEventListener('click', function() {
   //         window.history.back();
   //     });
   // });
    