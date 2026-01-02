import { prisma } from "../lib/prisma"
import { UserRole } from "../middleware/auth"

async function seedAdmin(){
    try{
        const adminData = {
            name: "Admin shuvo",
            email: "admin@gmail.com",
            role: UserRole.ADMIN,
            password: "admin1234"
        }
        const existingUser = await prisma.user.findUnique({
            where: {
                email: adminData.email
            }
        })

        if(existingUser){
            throw new Error("User alrady exists in db")
        }

        const signUpAdmin = await fetch("http://localhost:3000/api/auth/sign-up/email", {
            method: "POST",
            headers:{
                "Content-Type": 'application/json'
            },
            body:JSON.stringify(adminData)
        })

    }catch(error){
        console.error(error)
    }
}