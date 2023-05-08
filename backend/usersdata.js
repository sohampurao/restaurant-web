import bcrypt from 'bcryptjs'
const data = {
    users:[
        {
            name:'soham',
            email:'sohampurao1@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin : true,
        },
        {
            name: 'user',
            email: 'user@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin : false,
        }
    ],
}

export default data;