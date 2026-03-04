const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/users.json");

function loadUsers() { // Load users from file
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function saveUsers(users) { // Save users to file
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2)); // Pretty print with 2 spaces
}

function deleteUser(username) { // Delete user by username
  const users = loadUsers();

  if (users[username]) {
    delete users[username];
    saveUsers(users);
    return true;
  }

  return false;
}


module.exports = { loadUsers, saveUsers, deleteUser };