// ========================================
// SAMPLE DATA
// ========================================

const employeeData = [
  {
    name: "John Smith",
    email: "john@company.com"
  },
  {
    name: "Jill Patrick",
    email: "jill@company.com"
  },
  {
    name: "Rock Ethan",
    email: "rock@company.com"
  },
  {
    name: "Daniel Andrew",
    email: "daniel@company.com"
  }
];

// ========================================
// PROMISIFY HELPER
// ========================================

function promisifyRequest(request) {
    // asynchornous operations start with pending 
    // settle success (resolve) or fail/error (reject)
    // promise are used to work with Asynchronous operations
    
  return new Promise(function (resolve, reject) {
    request.onsuccess = function() {resolve(request.result);}
    request.onerror = function() { reject(request.error);}
  });

}

// ========================================
// OPEN DATABASE
// ========================================

function openDB() {
  return new Promise(function (resolve, reject) {
    const request = indexedDB.open("CompanyDB", 1);

    request.onerror = () => {
      reject(request.error);
    };

    request.onsuccess = () => {
      console.log("Database opened successfully");
      resolve(request.result);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      console.log("Running database upgrade...");

      if (!db.objectStoreNames.contains("employees")) {
        const store = db.createObjectStore("employees", {
          keyPath: "id",
          autoIncrement: true
        });

        store.createIndex("name", "name", {
          unique: false
        });

        store.createIndex("email", "email", {
          unique: true
        });

        console.log("Employees store created");
      }
    };
  });
}

// ========================================
// ADD ONE EMPLOYEE
// ========================================

async function addEmployee(employee) {
  const db = await openDB();

  const tx = db.transaction("employees", "readwrite");
  const store = tx.objectStore("employees");

  const request = store.add(employee);

  return promisifyRequest(request);
}

// ========================================
// ADD MULTIPLE EMPLOYEES
// ========================================

async function addEmployees(employees) {
  const db = await openDB();

  const tx = db.transaction("employees", "readwrite");
  const store = tx.objectStore("employees");

  for (const employee of employees) {
    store.add(employee);
  }

  return new Promise((resolve, reject) => {
    tx.oncomplete = () => {
      console.log("Employees inserted");
      resolve();
    };

    tx.onerror = () => reject(tx.error);
  });
}

// ========================================
// GET EMPLOYEE BY ID
// ========================================

async function getEmployeeById(id) {
  const db = await openDB();

  const tx = db.transaction("employees", "readonly");
  const store = tx.objectStore("employees");

  return promisifyRequest(store.get(id));
}

// ========================================
// GET EMPLOYEE BY EMAIL
// ========================================

async function getEmployeeByEmail(email) {
  const db = await openDB();

  const tx = db.transaction("employees", "readonly");
  const store = tx.objectStore("employees");

  const index = store.index("email");

  return promisifyRequest(index.get(email));
}

// ========================================
// GET ALL EMPLOYEES (OPTION 1)
// RECOMMENDED
// ========================================

async function getAllEmployees() {
  const db = await openDB();

  const tx = db.transaction("employees", "readonly");
  const store = tx.objectStore("employees");

  return promisifyRequest(store.getAll());
}

// ========================================
// GET ALL EMPLOYEES (OPTION 2)
// USING CURSOR
// ========================================

async function getAllEmployeesCursor() {
  const db = await openDB();

  const tx = db.transaction("employees", "readonly");
  const store = tx.objectStore("employees");

  return new Promise((resolve, reject) => {
    const employees = [];

    const request = store.openCursor();

    request.onsuccess = (event) => {
      const cursor = event.target.result;

      if (cursor) {
        employees.push(cursor.value);

        cursor.continue();
      } else {
        resolve(employees);
      }
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

// ========================================
// UPDATE EMPLOYEE
// ========================================

async function updateEmployee(employee) {
  const db = await openDB();

  const tx = db.transaction("employees", "readwrite");
  const store = tx.objectStore("employees");

  return promisifyRequest(store.put(employee));
}

// ========================================
// DELETE EMPLOYEE
// ========================================

async function deleteEmployee(id) {
  const db = await openDB();

  const tx = db.transaction("employees", "readwrite");
  const store = tx.objectStore("employees");

  return promisifyRequest(store.delete(id));
}

// ========================================
// CLEAR STORE
// ========================================

async function clearEmployees() {
  const db = await openDB();

  const tx = db.transaction("employees", "readwrite");
  const store = tx.objectStore("employees");

  return promisifyRequest(store.clear());
}

// ========================================
// GET EMPLOYEES BY NAME
// USING INDEX
// ========================================

async function getEmployeesByName(name) {
  const db = await openDB();

  const tx = db.transaction("employees", "readonly");
  const store = tx.objectStore("employees");

  const index = store.index("name");

  return promisifyRequest(index.getAll(name));
}



// ========================================
// DEMO
// ========================================

async function runDemo() {
  try {
    console.log("Clearing old data...");
    await clearEmployees();

    console.log("Adding employees...");
    await addEmployees(employeeData);

    console.log("---------------");
    console.log("GET ALL");
    console.log(await getAllEmployees());

    console.log("---------------");
    console.log("GET ALL CURSOR");
    console.log(await getAllEmployeesCursor());

    console.log("---------------");
    console.log("GET BY ID");
    console.log(await getEmployeeById(1));

    console.log("---------------");
    console.log("GET BY EMAIL");
    console.log(
      await getEmployeeByEmail(
        "john@company.com"
      )
    );

    console.log("---------------");
    console.log("UPDATE");

    const employee =
      await getEmployeeById(1);

    employee.name =
      "John Smith Updated";

    await updateEmployee(employee);

    console.log(
      await getEmployeeById(1)
    );

    console.log("---------------");
    console.log("DELETE");

    await deleteEmployee(2);

    console.log(
      await getAllEmployees()
    );

  } catch (error) {
    console.error(error);
  }
}

// Run
runDemo();