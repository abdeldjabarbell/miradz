const _0x140140=_0x3ff9;function _0x3ff9(_0x539c77,_0x172b0d){const _0x96104=_0x9610();return _0x3ff9=function(_0x3ff9a6,_0x15e6be){_0x3ff9a6=_0x3ff9a6-0x167;let _0x166399=_0x96104[_0x3ff9a6];return _0x166399;},_0x3ff9(_0x539c77,_0x172b0d);}(function(_0x22b050,_0x5b5f10){const _0x1b54e8=_0x3ff9,_0x3d07a3=_0x22b050();while(!![]){try{const _0x2391e2=-parseInt(_0x1b54e8(0x189))/0x1*(-parseInt(_0x1b54e8(0x1d2))/0x2)+-parseInt(_0x1b54e8(0x17d))/0x3+parseInt(_0x1b54e8(0x18f))/0x4+parseInt(_0x1b54e8(0x183))/0x5*(parseInt(_0x1b54e8(0x1b3))/0x6)+-parseInt(_0x1b54e8(0x1ae))/0x7*(parseInt(_0x1b54e8(0x1bd))/0x8)+parseInt(_0x1b54e8(0x1d3))/0x9*(-parseInt(_0x1b54e8(0x1a1))/0xa)+-parseInt(_0x1b54e8(0x18d))/0xb;if(_0x2391e2===_0x5b5f10)break;else _0x3d07a3['push'](_0x3d07a3['shift']());}catch(_0x4d2118){_0x3d07a3['push'](_0x3d07a3['shift']());}}}(_0x9610,0x77908));let menuIcon=document[_0x140140(0x1bf)](_0x140140(0x19a)),navbar=document['querySelector']('.navbar');menuIcon['onclick']=()=>{const _0x564d82=_0x140140;menuIcon[_0x564d82(0x168)]['toggle'](_0x564d82(0x1e0)),navbar[_0x564d82(0x168)][_0x564d82(0x17e)]('active');};function _0x9610(){const _0x2a448c=['block','querySelector','Titre','flex','items','empty','type','inputs_add_inputs','getElementById','k:\x20','innerHTML','informationproduitBG','idproduit_Similaire1','colors_in_stock_\x20:','G-709H4FB4Z2','createElement','1:912374203967:web:90b0cf782617624c579a8a','input','miradz','Une\x20erreur\x20s\x27est\x20produite\x20:','38162rTNBKj','2958993HQsRYE','pointer','green','admins','textContent','docSnap\x20exists\x20pas\x20\x20n=','Couleur\x20','homepage.html','log','prenom','addEventListener','vers\x20la\x20page\x20d\x27aceuille\x20\x20en\x20cours\x20...','id:\x20','bx-x','idproduit_Similaire4','Value\x20of\x20k:','idproduitSimilaire3','Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20email\x20:','classList','none','quantiteproduit','label','btnn_edit','replace','retourner_au_home','color_input','length','value','search','height','idproduitSimilaire4','vouveau\x20n_colors\x20=\x20','Les\x20données\x20de\x20l\x27élément\x20ont\x20été\x20mises\x20à\x20jour\x20avec\x20succès.\x20🛠️','nom','click','snapshot\x20n\x20:\x20','appendChild','index.html','delectcolor','1250628pPDxMB','toggle','color','2px\x20solid\x20green','catch','idproduit_Similaire2','17395VaJqeD','loaderedit','width','colors','prix','promotion','30cZBodc','display','2px\x20solid\x20red','style','7730371GcyrsO','message','3903240PgwCfY','red','50px','912374203967','borderLeft','DOMContentLoaded','email','preventDefault','Soustitre','addcolor','idproduit_Similaire3','#menu-icon','href','inpts_produit','Erreur\x20lors\x20du\x20partage\x20du\x20produit:\x20','data\x20:','currentUser','idproduitSimilaire2','10dYqvzr','produits','L\x27élément\x20que\x20vous\x20essayez\x20de\x20mettre\x20à\x20jour\x20n\x27existe\x20pas\x20dans\x20la\x20base\x20de\x20données.','nom_prenom_admin','collection_pr','An\x20error\x20occurred:','store','toUpperCase','ADMIN\x20:\x20','div','uid','cursor','-----------------','1606381XqMSaQ','notifications','push','depenses','Description','1464DewkUG','get','numero','idproduitSimilaire1','Ajoutez\x20une\x20couleur','location','error','removeChild','data','exists','16AmtnSq'];_0x9610=function(){return _0x2a448c;};return _0x9610();}import{initializeApp}from'https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js';import{getAuth,signOut}from'https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js';import{getFirestore,doc,getDoc,query,where,getDocs,updateDoc,addDoc,collection,serverTimestamp}from'https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js';import{getStorage,ref,uploadBytes,getDownloadURL}from'https://www.gstatic.com/firebasejs/9.6.5/firebase-storage.js';const firebaseConfig={'apiKey':'AIzaSyCItLVglRXW0RJV4gL1R1TXCDyECBBWmUY','authDomain':'miradz.firebaseapp.com','projectId':_0x140140(0x1d0),'storageBucket':'miradz.appspot.com','messagingSenderId':_0x140140(0x192),'appId':_0x140140(0x1ce),'measurementId':_0x140140(0x1cc)},app=initializeApp(firebaseConfig),auth=getAuth(app),db=getFirestore(app),storage=getStorage(app),wt=document[_0x140140(0x1c6)]('wt'),retourner_au_home=document['getElementById'](_0x140140(0x16e)),btnn_edit=document[_0x140140(0x1c6)](_0x140140(0x16c)),loaderedit=document['getElementById'](_0x140140(0x184)),originaledit=document[_0x140140(0x1c6)]('originaledit'),Doneedit=document[_0x140140(0x1c6)]('Doneedit'),message_cree_produit=document['getElementById']('message_cree_produit');retourner_au_home['addEventListener'](_0x140140(0x178),async _0x2b2b0d=>{const _0x22a3f5=_0x140140;_0x2b2b0d[_0x22a3f5(0x196)](),window['location'][_0x22a3f5(0x19b)]=_0x22a3f5(0x1da);}),auth['onAuthStateChanged'](async _0x1404a1=>{const _0x39106a=_0x140140;if(_0x1404a1){const _0x4dc2c4=_0x1404a1[_0x39106a(0x195)],_0x1c3d04=query(collection(db,'admins'),where(_0x39106a(0x195),'==',_0x4dc2c4));try{const _0x1e81bf=await getDocs(_0x1c3d04);if(!_0x1e81bf[_0x39106a(0x1c3)]){const _0x377375=document[_0x39106a(0x1c6)]('wt');_0x377375[_0x39106a(0x18c)][_0x39106a(0x18a)]=_0x39106a(0x1c1);const _0xba9132=_0x1404a1['uid'],_0xb3013=doc(db,_0x39106a(0x1d6),_0xba9132),_0x40ab67=await getDoc(_0xb3013);if(_0x40ab67['exists']()){const _0x347bde=_0x40ab67[_0x39106a(0x1bb)]()[_0x39106a(0x177)],_0xac12e6=_0x40ab67['data']()['prenom'],_0x3b50ed=document['getElementById'](_0x39106a(0x1a4));_0x3b50ed['innerHTML']=_0x39106a(0x1a9)+_0xac12e6[_0x39106a(0x1a8)]()+'\x20'+_0x347bde['toUpperCase']()+'\x20.',wt[_0x39106a(0x18c)][_0x39106a(0x18a)]=_0x39106a(0x169);}}else console[_0x39106a(0x1db)](_0x39106a(0x1de)),window[_0x39106a(0x1b8)][_0x39106a(0x19b)]=_0x39106a(0x1da);}catch(_0x45e4e2){console[_0x39106a(0x1b9)](_0x39106a(0x167),_0x45e4e2);}}else window[_0x39106a(0x1b8)][_0x39106a(0x19b)]=_0x39106a(0x17b);});const urlParams=new URLSearchParams(window[_0x140140(0x1b8)][_0x140140(0x172)]),selectedId3=urlParams[_0x140140(0x1b4)]('id'),selectedId=urlParams[_0x140140(0x1b4)](_0x140140(0x1a7)),selectedId2=urlParams[_0x140140(0x1b4)](_0x140140(0x1a5));let k=0x0;async function fetchDataAndUpdate(){const _0x11cf4e=_0x140140;verifier_n_colors();try{const _0x2b66cb=doc(db,'items',selectedId,_0x11cf4e(0x1a2),selectedId2,'produits',selectedId3),_0x368f5c=await getDoc(_0x2b66cb);if(_0x368f5c[_0x11cf4e(0x1bc)]()){const _0x59399f=_0x368f5c['data']();console[_0x11cf4e(0x1db)](_0x11cf4e(0x19e),_0x59399f);const _0x1ff874=_0x59399f[_0x11cf4e(0x1c0)],_0x66af71=_0x59399f['Sous_titre'],_0x27a2ca=_0x59399f[_0x11cf4e(0x1b2)],_0x133271=_0x59399f[_0x11cf4e(0x187)],_0xdf6792=_0x59399f[_0x11cf4e(0x1b1)],_0x4a08c6=_0x59399f[_0x11cf4e(0x188)],_0x35e934=_0x59399f[_0x11cf4e(0x16a)],_0x36b660=_0x59399f[_0x11cf4e(0x186)][_0x11cf4e(0x170)],_0x58b4be=_0x59399f[_0x11cf4e(0x186)];console[_0x11cf4e(0x1db)](_0x11cf4e(0x1cb),_0x58b4be);const _0x5e5c65=document[_0x11cf4e(0x1c6)](_0x11cf4e(0x1c5));_0x5e5c65[_0x11cf4e(0x1c8)]='';for(let _0x1a956d=0x0;_0x1a956d<_0x36b660;_0x1a956d++){const _0x313b38=document[_0x11cf4e(0x1cd)]('div');_0x313b38[_0x11cf4e(0x168)]['add'](_0x11cf4e(0x19c)),_0x313b38['id']=_0x11cf4e(0x19c)+(_0x1a956d+0x1);const _0x284b0b=document['createElement'](_0x11cf4e(0x16b));_0x284b0b['textContent']=_0x11cf4e(0x1d9)+(_0x1a956d+0x1)+':';const _0x2ea44c=document['createElement'](_0x11cf4e(0x1cf));_0x2ea44c[_0x11cf4e(0x1c4)]=_0x11cf4e(0x17f),_0x2ea44c['id']=_0x11cf4e(0x16f)+(_0x1a956d+0x1),_0x2ea44c[_0x11cf4e(0x171)]=_0x58b4be[_0x1a956d],_0x2ea44c[_0x11cf4e(0x18c)][_0x11cf4e(0x185)]=_0x11cf4e(0x191),_0x2ea44c[_0x11cf4e(0x18c)]['height']=_0x11cf4e(0x191),_0x2ea44c[_0x11cf4e(0x18c)][_0x11cf4e(0x1ac)]='pointer';const _0x1d8471=document['createElement']('br');_0x313b38[_0x11cf4e(0x17a)](_0x284b0b),_0x313b38[_0x11cf4e(0x17a)](_0x2ea44c),_0x313b38[_0x11cf4e(0x17a)](_0x1d8471),_0x5e5c65[_0x11cf4e(0x17a)](_0x313b38);}const _0x5e0c84=_0x59399f[_0x11cf4e(0x1ca)],_0x1b7558=_0x59399f[_0x11cf4e(0x182)],_0x2e74a3=_0x59399f[_0x11cf4e(0x199)],_0x15ce56=_0x59399f[_0x11cf4e(0x1e1)],_0x512a7f=document['getElementById'](_0x11cf4e(0x1c0)),_0x12cd90=document['getElementById']('Soustitre'),_0x6b9d1e=document[_0x11cf4e(0x1c6)](_0x11cf4e(0x1b2)),_0x7a367=document['getElementById'](_0x11cf4e(0x187)),_0x2a6eb6=document['getElementById']('depenses'),_0x2a6672=document[_0x11cf4e(0x1c6)](_0x11cf4e(0x188)),_0x1bc12b=document['getElementById'](_0x11cf4e(0x16a)),_0x4ecfef=document[_0x11cf4e(0x1c6)](_0x11cf4e(0x1b6)),_0x35c2da=document[_0x11cf4e(0x1c6)](_0x11cf4e(0x1a0)),_0x571181=document['getElementById'](_0x11cf4e(0x1e3)),_0x49f186=document['getElementById']('idproduitSimilaire4');return _0x512a7f[_0x11cf4e(0x171)]=_0x1ff874,_0x12cd90[_0x11cf4e(0x171)]=_0x66af71,_0x6b9d1e[_0x11cf4e(0x171)]=_0x27a2ca,_0x7a367[_0x11cf4e(0x171)]=_0x133271,_0x2a6eb6[_0x11cf4e(0x171)]=_0xdf6792,_0x2a6672[_0x11cf4e(0x171)]=_0x4a08c6,_0x1bc12b['value']=_0x35e934,_0x4ecfef['value']=_0x5e0c84,_0x35c2da[_0x11cf4e(0x171)]=_0x1b7558,_0x571181[_0x11cf4e(0x171)]=_0x2e74a3,_0x49f186['value']=_0x15ce56,k=0x0,k;}}catch(_0x2b94c2){console[_0x11cf4e(0x1b9)]('Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20données\x20de\x20la\x20sous-collection\x20:',_0x2b94c2);}}fetchDataAndUpdate()['then'](_0x1850de=>{const _0x4f1cc2=_0x140140;console[_0x4f1cc2(0x1db)](_0x4f1cc2(0x1e2),_0x1850de);})[_0x140140(0x181)](_0x272aea=>{const _0x805d31=_0x140140;console[_0x805d31(0x1b9)](_0x805d31(0x1a6),_0x272aea);});async function verifier_n_colors(){const _0x58a8c0=_0x140140;let _0x49a577=0x0;try{const _0xb3884e=doc(db,_0x58a8c0(0x1c2),selectedId,_0x58a8c0(0x1a2),selectedId2,_0x58a8c0(0x1a2),selectedId3),_0x34250f=await getDoc(_0xb3884e);if(_0x34250f['exists']()){console[_0x58a8c0(0x1db)]('docSnap\x20exists');const _0xebf975=_0x34250f[_0x58a8c0(0x1bb)]();_0x49a577=_0xebf975[_0x58a8c0(0x186)][_0x58a8c0(0x170)];const _0x2293cc=document['getElementById'](_0x58a8c0(0x17c));_0x49a577===0x0&&(_0x2293cc[_0x58a8c0(0x18c)]['display']=_0x58a8c0(0x169)),_0x49a577>0x0&&(_0x2293cc[_0x58a8c0(0x18c)]['display']=_0x58a8c0(0x1be)),console[_0x58a8c0(0x1db)]('\x20docSnap\x20exists\x20n_colors\x20='+_0x49a577);}else _0x49a577=0x0,console['log'](_0x58a8c0(0x1d8)+_0x49a577);}catch(_0x36510c){console[_0x58a8c0(0x1b9)](_0x58a8c0(0x1d1),_0x36510c);}return _0x49a577;}document[_0x140140(0x1dd)](_0x140140(0x194),async function(){const _0x13051d=_0x140140,_0x38bc53=document['getElementById'](_0x13051d(0x198)),_0x2951f4=document[_0x13051d(0x1c6)](_0x13051d(0x17c));let _0x8d1acb=[],_0x54c23f=[];_0x38bc53[_0x13051d(0x1dd)]('click',async function(){const _0x88c840=_0x13051d;let _0x306ce1=await verifier_n_colors();console[_0x88c840(0x1db)](_0x88c840(0x179)+_0x306ce1);let _0x1a7b24=0x0;_0x1a7b24=_0x306ce1+k,_0x1a7b24++,console[_0x88c840(0x1db)](_0x88c840(0x175)+_0x1a7b24),_0x1a7b24>0x0&&(_0x2951f4[_0x88c840(0x18c)][_0x88c840(0x18a)]=_0x88c840(0x1be)),_0x27c890(_0x1a7b24),k++,console[_0x88c840(0x1db)](_0x88c840(0x1c7)+k),console[_0x88c840(0x1db)](_0x88c840(0x1ad));}),_0x2951f4[_0x13051d(0x1dd)](_0x13051d(0x178),async function(){const _0x3523e0=_0x13051d;let _0x553b40=await verifier_n_colors(),_0x31da18=0x0;_0x31da18=_0x553b40+k,console[_0x3523e0(0x1db)]('s:\x20'+_0x553b40),console[_0x3523e0(0x1db)](_0x3523e0(0x1c7)+k),console[_0x3523e0(0x1db)]('n_colors:\x20'+_0x31da18);const _0x3c1b37='inpts_produit'+_0x31da18,_0x48b9a1=document[_0x3523e0(0x1c6)](_0x3c1b37);_0x31da18--,console[_0x3523e0(0x1db)]('id\x20-\x20=\x20'+_0x3c1b37);_0x31da18===0x0&&(_0x2951f4['style'][_0x3523e0(0x18a)]=_0x3523e0(0x169));const _0x17a60c=document['getElementById']('inputs_add_inputs');_0x17a60c[_0x3523e0(0x1ba)](_0x48b9a1),k--,console[_0x3523e0(0x1db)](_0x3523e0(0x1c7)+k),console[_0x3523e0(0x1db)]('-----------------');});async function _0x27c890(_0xd56d45){const _0x5f510c=_0x13051d,_0x49f7fe=_0x5f510c(0x19c)+_0xd56d45;console[_0x5f510c(0x1db)](_0x5f510c(0x1df)+_0x49f7fe);const _0x218af1=document[_0x5f510c(0x1c6)](_0x5f510c(0x1c5)),_0x2d28a0=document[_0x5f510c(0x1cd)](_0x5f510c(0x1aa));_0x2d28a0[_0x5f510c(0x168)]['add'](_0x5f510c(0x19c)),_0x2d28a0['id']=_0x5f510c(0x19c)+_0xd56d45;const _0x40b436=document[_0x5f510c(0x1cd)]('label');_0x40b436[_0x5f510c(0x1d7)]=_0x5f510c(0x1d9)+_0xd56d45+':';const _0x19abfe=document[_0x5f510c(0x1cd)](_0x5f510c(0x1cf));_0x19abfe[_0x5f510c(0x1c4)]=_0x5f510c(0x17f),_0x19abfe['id']='color_input'+_0xd56d45,_0x19abfe[_0x5f510c(0x18c)][_0x5f510c(0x185)]='50px',_0x19abfe[_0x5f510c(0x18c)][_0x5f510c(0x173)]='50px',_0x19abfe['style']['cursor']=_0x5f510c(0x1d4);const _0x8369fe=document[_0x5f510c(0x1cd)]('br');_0x2d28a0[_0x5f510c(0x17a)](_0x40b436),_0x2d28a0[_0x5f510c(0x17a)](_0x19abfe),_0x2d28a0['appendChild'](_0x8369fe),_0x218af1[_0x5f510c(0x17a)](_0x2d28a0);}function _0xd8978a(){const _0x46fb75=_0x13051d;window[_0x46fb75(0x1b8)][_0x46fb75(0x16d)]('homepage.html');}btnn_edit['addEventListener'](_0x13051d(0x178),async _0x55edc3=>{const _0x49d1ac=_0x13051d;_0x55edc3[_0x49d1ac(0x196)](),originaledit[_0x49d1ac(0x18c)]['display']=_0x49d1ac(0x169),loaderedit[_0x49d1ac(0x18c)]['display']=_0x49d1ac(0x1be);let _0xc4f0ea=0x0,_0x1fcf78=await verifier_n_colors();_0xc4f0ea=_0x1fcf78+k;if(_0xc4f0ea>0x0){for(let _0x5c0441=0x0;_0x5c0441<_0xc4f0ea;_0x5c0441++){var _0x206051='color_input'+(_0x5c0441+0x1),_0x3bba40=document[_0x49d1ac(0x1c6)](_0x206051)[_0x49d1ac(0x171)];_0x54c23f[_0x49d1ac(0x1b0)](_0x3bba40);}_0x5ca6da();}else{message_cree_produit['innerHTML']=_0x49d1ac(0x1b7),message_cree_produit[_0x49d1ac(0x18c)][_0x49d1ac(0x17f)]=_0x49d1ac(0x190),originaledit['style'][_0x49d1ac(0x18a)]=_0x49d1ac(0x1be),loaderedit[_0x49d1ac(0x18c)][_0x49d1ac(0x18a)]='none';const _0x116ba7=document[_0x49d1ac(0x1c6)](_0x49d1ac(0x1c9));_0x116ba7[_0x49d1ac(0x18c)][_0x49d1ac(0x193)]='2px\x20solid\x20red';}async function _0x5ca6da(){const _0xb94989=_0x49d1ac;message_cree_produit[_0xb94989(0x1c8)]='Modification\x20de\x20produit\x20en\x20cours...',message_cree_produit['style'][_0xb94989(0x17f)]=_0xb94989(0x1d5);try{const _0x27e2ff=document[_0xb94989(0x1c6)]('Titre')[_0xb94989(0x171)],_0x496da0=document[_0xb94989(0x1c6)](_0xb94989(0x197))[_0xb94989(0x171)],_0x29a5bf=document[_0xb94989(0x1c6)](_0xb94989(0x1b2))['value'],_0x264e50=parseFloat(document[_0xb94989(0x1c6)]('prix')[_0xb94989(0x171)]),_0x3f86fa=parseFloat(document[_0xb94989(0x1c6)](_0xb94989(0x1b1))[_0xb94989(0x171)]),_0x8abd3c=parseFloat(document[_0xb94989(0x1c6)](_0xb94989(0x188))[_0xb94989(0x171)]),_0x275a2c=parseInt(document[_0xb94989(0x1c6)]('quantiteproduit')[_0xb94989(0x171)]),_0x26f830=document[_0xb94989(0x1c6)]('idproduitSimilaire1')[_0xb94989(0x171)],_0x147a9f=document[_0xb94989(0x1c6)](_0xb94989(0x1a0))[_0xb94989(0x171)],_0x39401d=document['getElementById'](_0xb94989(0x1e3))[_0xb94989(0x171)],_0x1754e2=document[_0xb94989(0x1c6)](_0xb94989(0x174))[_0xb94989(0x171)],_0x2416f9=doc(db,_0xb94989(0x1c2),selectedId,_0xb94989(0x1a2),selectedId2,_0xb94989(0x1a2),selectedId3),_0x142018=await getDoc(_0x2416f9);if(_0x142018[_0xb94989(0x1bc)]()){const _0x593b6a={'Titre':_0x27e2ff,'Sous_titre':_0x496da0,'Description':_0x29a5bf,'prix':_0x264e50,'depenses':_0x3f86fa,'promotion':_0x8abd3c,'quantiteproduit':_0x275a2c,'colors_number':_0xc4f0ea,'colors':_0x54c23f,'idproduit_Similaire1':_0x26f830,'idproduit_Similaire2':_0x147a9f,'idproduit_Similaire3':_0x39401d,'idproduit_Similaire4':_0x1754e2};await updateDoc(_0x2416f9,_0x593b6a),message_cree_produit['innerHTML']=_0xb94989(0x176),message_cree_produit[_0xb94989(0x18c)]['color']=_0xb94989(0x1d5),Doneedit['style'][_0xb94989(0x18a)]=_0xb94989(0x1be),loaderedit[_0xb94989(0x18c)][_0xb94989(0x18a)]='none';const _0x1dc635=document[_0xb94989(0x1c6)](_0xb94989(0x1c9));_0x1dc635[_0xb94989(0x18c)][_0xb94989(0x193)]=_0xb94989(0x180);const _0x540c94=auth[_0xb94989(0x19f)];if(_0x540c94){const _0x42e613=_0x540c94[_0xb94989(0x1ab)],_0x479a1f=doc(db,'admins',_0x42e613),_0x1f029b=await getDoc(_0x479a1f);if(_0x1f029b[_0xb94989(0x1bc)]()){const _0x42eabf=_0x1f029b[_0xb94989(0x1bb)]()[_0xb94989(0x177)],_0x1d924d=_0x1f029b[_0xb94989(0x1bb)]()[_0xb94989(0x1dc)],_0x5ae3fb=serverTimestamp(),_0xe1d62b=collection(db,_0xb94989(0x1af)),_0x4c2850={'title_notif':'🛠️\x20Produit\x20Modifié','notification':'🛠️\x20Un\x20produit\x20a\x20été\x20modifié\x20par\x20l\x27administrateur\x20'+_0x1d924d+'\x20'+_0x42eabf,'timestamp':_0x5ae3fb},_0x50b437=doc(db,'notifications','notif_number'),_0x4aed7c=await getDoc(_0x50b437);if(_0x4aed7c[_0xb94989(0x1bc)]()){const _0x2f41a3=_0x4aed7c[_0xb94989(0x1bb)]()[_0xb94989(0x1b5)],_0x6a91e9=_0x2f41a3+0x1;await updateDoc(_0x50b437,{'numero':_0x6a91e9});}await addDoc(_0xe1d62b,_0x4c2850);}}setTimeout(()=>{_0xd8978a();},0x5dc);}else{message_cree_produit[_0xb94989(0x1c8)]=_0xb94989(0x1a3),message_cree_produit['style']['color']=_0xb94989(0x190),Doneedit[_0xb94989(0x18c)][_0xb94989(0x18a)]=_0xb94989(0x1be),loaderedit[_0xb94989(0x18c)][_0xb94989(0x18a)]=_0xb94989(0x169);const _0x6afce8=document['getElementById'](_0xb94989(0x1c9));_0x6afce8['style'][_0xb94989(0x193)]=_0xb94989(0x18b);}}catch(_0x17f102){message_cree_produit[_0xb94989(0x1c8)]=_0xb94989(0x19d)+_0x17f102[_0xb94989(0x18e)],message_cree_produit[_0xb94989(0x18c)][_0xb94989(0x17f)]='red',originaledit['style'][_0xb94989(0x18a)]=_0xb94989(0x1be),loaderedit['style']['display']=_0xb94989(0x169),Doneedit[_0xb94989(0x18c)][_0xb94989(0x18a)]=_0xb94989(0x169);const _0x4de650=document['getElementById'](_0xb94989(0x1c9));_0x4de650[_0xb94989(0x18c)][_0xb94989(0x193)]='2px\x20solid\x20red';}}});});





