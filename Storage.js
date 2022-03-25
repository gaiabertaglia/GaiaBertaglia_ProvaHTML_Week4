function getStorage() {    
    
    let storageName = "localStorage";
    return window[storageName];
}

function subscribe() {
    let storage = getStorage();
    let key = document.getElementById("storageKey").value;
    let value = document.getElementById("storageValue").value;
    storage.setItem(key, value);
}

function unsubscribe() {
    let storage = getStorage();
    let key = document.getElementById("storageKey").value;
    storage.removeItem(key);
    document.getElementById("result").innerHTML = "Eliminato item con chiave " + key;
}

function welcomeMessage() {    
    alert("Benvenuto!");
}