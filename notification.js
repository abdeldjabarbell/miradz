
//nav bar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};





// app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { getFirestore, doc, getDoc,query, where , getDocs,updateDoc ,addDoc ,collection ,serverTimestamp, orderBy, limit, startAfter} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";
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
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);



const wt = document.getElementById("wt");

const retourner_au_home = document.getElementById("retourner_au_home");

auth.onAuthStateChanged(async (user) => {
    if (user) {

        // Récupération de l'adresse e-mail de l'utilisateur connecté
        const mail = user.email;

        // Vérification si l'e-mail existe dans la collection "admins"
        const q = query(collection(db, "admins"), where("email", "==", mail));

        try {
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                const watingAccount = document.getElementById("wt");
                watingAccount.style.display = "flex";
                const userId = user.uid;
                const userRef = doc(db, "admins", userId);
                const docSnapshot = await getDoc(userRef);

                if (docSnapshot.exists()) {
                    // Correction : récupération de l'e-mail depuis docSnapshot.data()
                    const nomAdm = docSnapshot.data().nom;
                    const prenomAdm = docSnapshot.data().prenom;
                    const nom_prenom_admin = document.getElementById("nom_prenom_admin");
                    nom_prenom_admin.innerHTML = "ADMIN : " + prenomAdm.toUpperCase() + " " + nomAdm.toUpperCase() + " .";
                    wt.style.display="none";

                }
            } else {
                console.log("vers la page d'aceuille  en cours ...")
                window.location.href = 'homepage.html';
            }
        } catch (error) {
            console.error("Erreur lors de la vérification du email :", error);
        }
    } else {
        window.location.href = 'index.html';
    }
});
//-------------------------------- firebase opartions -------------------------
retourner_au_home.addEventListener("click", async (e) => {
    e.preventDefault();
    window.location.href = 'homepage.html';
});



let lastVisibleDoc = null;
const itemsPerPage = 10;
 
function formatDate(timestamp) {
    const date = new Date(timestamp.seconds * 1000);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    let hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, '0');
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;
    return `${day}/${month}/${year} at ${hour}:${minute} ${ampm}`;
}

async function fetchItems() {
    const itemsCollectionRef = collection(db, 'notifications');
    let queryRef;

    if (lastVisibleDoc === null) {
        queryRef = query(itemsCollectionRef, orderBy('timestamp', 'desc'), limit(itemsPerPage));
    } else {
        queryRef = query(itemsCollectionRef, orderBy('timestamp', 'desc'), startAfter(lastVisibleDoc), limit(itemsPerPage));
    }

    const querySnapshot = await getDocs(queryRef);

    const notificationbg_space = document.getElementById('notificationbg_space');
    notificationbg_space.innerHTML = ''; // Pour vider la liste avant d'ajouter de nouveaux éléments

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const formattedTimestamp = formatDate(data.timestamp);

        const notification = document.createElement('div');
        notification.classList="notification";
        const image_notif_bg = document.createElement('div');
        image_notif_bg.classList="image_notif_bg";
        const notif_img = document.createElement('img');
        notif_img.classList="image_notif_bg img";
        notif_img.src="img/mira logoblack.png";
        const text_notif_bg = document.createElement('div');
        text_notif_bg.classList="text_notif_bg";
        const time_and_titre = document.createElement('div');
        time_and_titre.classList="time_and_titre";
        const notification_titre = document.createElement('h1');
        notification_titre.innerHTML=data.title_notif;
        const date_noti = document.createElement('p');
        date_noti.innerHTML=formattedTimestamp;
        const notification_text_content = document.createElement('p');
        notification_text_content.innerHTML= data.notification;




        notificationbg_space.appendChild(notification);
        notification.appendChild(image_notif_bg);
        image_notif_bg.appendChild(notif_img);
        notification.appendChild(text_notif_bg);
        text_notif_bg.appendChild(time_and_titre);
        time_and_titre.appendChild(notification_titre);
        time_and_titre.appendChild(date_noti);
        text_notif_bg.appendChild(notification_text_content);



    });

    lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1]; // Met à jour la dernière référence de document visible
}

const loadMoreBtn = document.getElementById('voir_plus_de_notif');
loadMoreBtn.addEventListener('click', fetchItems);

// Au chargement initial de la page, récupérer les premiers 10 éléments
fetchItems();


