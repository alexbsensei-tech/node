const express = require("express"); // express framework
const path = require("path"); // path module
const app = express();
const PORT = 3000;

// MIDDLEWARE - Промежуточное программное обеспечение
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// ROUTE MOUNTS - Закрепление маршрутов
const seacraftsRoute = require("./routes/seacrafts");
const usersRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const statusRoute = require("./routes/status");
const headerRoute = require("./routes/header");
const avatarRoutes = require("./routes/avatar");
const createUserRoute = require("./routes/createUser");
const testsRoute = require("./routes/tests");
const supplementsRoute = require("./routes/supplements");
const footerRoute = require("./routes/footer");

app.use("/seacrafts", seacraftsRoute); // Mount seacrafts route - Закрепить маршрут морских судов
app.use("/users", usersRoute); // Mount users route - Закрепить маршрут пользователей
app.use("/", authRoute); // Mount auth route - Закрепить маршрут аутентификации
app.use("/status", statusRoute); // Mount status route - Закрепить маршрут статуса  
app.use("/header", headerRoute); // Mount header route - Закрепить маршрут заголовка
app.use("/", avatarRoutes); // Mount avatar upload route - Закрепить маршрут загрузки аватара
app.use("/", createUserRoute); // Mount create user route - Закрепить маршрут создания пользователя
app.use("/tests", testsRoute); // Mount tests route - Закрепить маршрут тестов
app.use("/supplements", supplementsRoute); // Mount supplements route - Закрепить маршрут добавок
app.use("/footer", footerRoute); // Mount footer route - Закрепить маршрут подвала

// Start server - запуск сервера
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});