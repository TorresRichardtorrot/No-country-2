import User from "../models/user.model.js";
// ? Registrar usuario
export const register = async (req,res)=>{
    const {name,email,password} = req.body
    try {
        const userFound = User.findOne({email})
        if (userFound) return res.send().json('El Correo ya esta en uso')

        res.status(200).send('register')
    } catch (error) {
        console.error(error)
        res.status(500)
    }
}

// ? iniciar seccion
export const login = async (req,res)=>{
    try {
         res.status(200).send('login')
    } catch (error) {
        console.error(error)
        res.status(500)
    }
}

// ? Salir de seccion
export const logout = async (req,res)=>{
    try {
         res.status(200).send('logout')
    } catch (error) {
        console.error(error)
        res.status(500)
    }
}