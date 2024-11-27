import bcrypt from "bcryptjs";

const users = [
    {
        username: "admin",
        email: "admin@example.com",
        phone: "0911000000",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        username: "mei",
        email: "mei@example.com",
        phone: "0911000111",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        username: "min",
        email: "min@example.com",
        phone: "0911000222",
        password: bcrypt.hashSync("123456", 10),
    },
];

export default users;
