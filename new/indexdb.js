let db;

let openReq = indexedDB.open('CompanyDB', 1)

openReq.onsuccess = function(event) {
    db = event.target

    if (!db.objectStoreNames.contains('Employees')) {
        db.createObjectStore('Employees', {'keyPath': 'id', autoIncrement: true})
    }
}

openReq.onerror = function(event) {
    console.log("Error in Db opeing request: ", event.target.errorCode)
}