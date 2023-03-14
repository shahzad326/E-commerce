import bcrypt from 'bcrypt';

const users = [
    {
        name: "Admin User",
        email: "shahzadaliraja302@gmail.com",
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true,
    },
    {
        name: "Admin User11",
        email: "shahzadaliraja111@gmail.com",

        password: bcrypt.hashSync('67890', 10),
       
    },
    {
        name: "Admin User22",
        email: "shahzadaliraja222@gmail.com",
        password: bcrypt.hashSync('12345', 10),
       
    },
]

export default users