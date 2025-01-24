import { HttpStatusCode } from 'axios';  
import connectMongo from '../../../../../util/connect-mongo';  
import User from '../../../../../models/User';  
import { CreateUserDto } from '../../../../../dto/create-user.dto';  
import { NextRequest, NextResponse } from 'next/server'; 
import bcryptjs from "bcryptjs";
  
export async function POST(req: NextRequest) {  
    try {  
        await connectMongo();  
        const body: CreateUserDto = await req.json(); 
        const {user, email, password} = body 
        if (user && email && password) {
            const salt = await bcryptjs.genSalt(10)
            const hashedPassword = await bcryptjs.hash(body.password, salt)  

            const userCheck = await User.findOne({email})
            
            if(userCheck){
                return NextResponse.json({error: "User already exists with same email"}, {status: 400})
            }

            const newUser = await User.create({
                user,
                email,
                password: hashedPassword});  
            return NextResponse.json(  
                { status: HttpStatusCode.Created },  
            );  
        }  
        return NextResponse.json({ message: 'Missing field' }, { status: HttpStatusCode.BadRequest });  
    } catch (error) {  
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });  
    }  
}  

