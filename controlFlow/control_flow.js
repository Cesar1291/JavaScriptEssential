let userRole = "admin";
let accesslevel;

if (userRole === "admin") {
    accessLevel = "Acceso completo";
} else if (userRole === "manager") {
    accessLevel = "Acceso limitado a permisos";
} else {
    accessLevel = "Sin permisos de acceso";
}

//console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

//console.log("User message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

//console.log("User category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Estatus de autentificación:", authenticationStatus);