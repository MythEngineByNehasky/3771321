
let titleElement = document.querySelector('#title')

let title = localStorage.getItem("title") 

let textElement = document.querySelector('textarea')

let text = localStorage.getItem("text") 
let btnSave = document.querySelector('#save')  
let btnDownload = document.querySelector("#download") 

let firestorage = null

function initFirestorage()

 bindValueToFields()
 btnSave.addEventListener('click', event => { title = titleElement.value.trim()
 
 text = textElement.value.trim()
 
 localStorage.setItem("title",title)
 localStorage.setItem("text",text) 
 
 if(!text || !title){ alert("Título e texto devem ser preenchidos") 
 return } 
 
 uploadFile(text, title+'.txt', "text/plain;charset=utf-8");
 }) 
 function uploadFile(data, filename, type) { return 
 let file = new Blob([data], {type: type});
 let storageRef = firestorage.ref(); let ref = storageRef.child(filename); ref.put(file).then(function(snapshot) {Sucess
 }).catch(function(err){ error }); }
 
function initFirestorage(){ 
   //TODO: Replace with your project's config object 
   
   var config = { apiKey: '<your-api-key>', authDomain: '<your-auth-domain>', databaseURL: '<your-database-url>', storageBucket: '<your-storage-bucket>' }; firebase.initializeApp(config); 
    firestorage = firebase.storage(); } 
   
   function bindValueToFields(){ titleElement.value = title 
   textElement.value = text
   }
   
   function downloadFile(){ let storageRef = firestorage.ref(); storageRef.child(title).getDownloadURL().then(function(url) { var xhr = new XMLHttpRequest(); xhr.responseType = 'blob'; xhr.onload = function(event) { download(xhr.response, title+".text", "text/plain;charset=utf-8") }; xhr.open('GET', url); xhr.send(); }) }
   
   function download (data, filename, type) { 
     
     var file = new Blob([data], {type: type}); if (window.navigator.msSaveOrOpenBlob)
     
   window.navigator.msSaveOrOpenBlob(file, filename); else {var a = document.createElement("a"), url = URL.createObjectURL(file); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); setTimeout(function() { document.body.removeChild(a); window.URL.revokeObjectURL(url); }, 0); }
   } 
   
   /**https://pt.stackoverflow.com/questions/345557/salvar-conte%C3%BAdo-de-um-textarea-em-um-arquivo-txt-e-exibi-los-novamente-ao-atual
   /**
