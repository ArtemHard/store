import {db, UserType}  from '../data/db'


const SignUp = (req, res) => {
    const { name, email, phone, password} = req.body
    console.log('signUp');

  
    res.sendStatus(200);
}

const SignIn = (req, res) => {
    console.log('signIn');
    

    res.sendStatus(200);
}

const getUserInfo = (req, res) => {
    console.log('Get My Info');
    

    res.sendStatus(200);
}

export {
    SignIn,
    SignUp,
    getUserInfo
    
}