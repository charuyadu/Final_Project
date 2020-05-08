
const  Users = [
    { Name: 'Charu', Password: '2020', Email: 'yaduc1@hawkmail.newpaltz.edu', userId: 1 },
    { Name: 'Cher', Password: '5780', Email: 'charu@hawkmail.newpaltz.edu', userId: 2 }
];

module.exports = {
    Login(email, password) {
    
        const user = Users.find(x => x.Email == email);
        if(!user) throw Error('User not found');
        if(user.Password != password) throw Error('Wrong Password');
    
        return user;
    },
    Get(userId) {
        return Users[userId]
    }
};