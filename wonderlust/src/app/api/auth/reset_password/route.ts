import { HttpStatusCode } from 'axios';  
import connectMongo from '../../../../../util/connect-mongo';  
import User from '../../../../../models/User';  
import { CreateUserDto } from '../../../../../dto/create-user.dto';  
import { NextRequest, NextResponse } from 'next/server'; 
import bcryptjs from "bcryptjs";
  
export async function PUT(req: NextRequest) {  
    try {  
        await connectMongo();  
        const body: CreateUserDto = await req.json(); 
        const {email, password} = body 
        if (email && password) {
            const salt = await bcryptjs.genSalt(10)
            const hashedPassword = await bcryptjs.hash(password, salt)  

            const userCheck = await User.findOne({ email });
            
            if(!userCheck){
                return NextResponse.json({error: "User not found"}, {status: 404})
            }

            userCheck.password = hashedPassword;
            await userCheck.save();  

            return NextResponse.json(  
                { status: HttpStatusCode.Ok, message:"Password updated successfully" },  
            );  
        }  
        return NextResponse.json({ message: 'Missing field' }, { status: HttpStatusCode.BadRequest });  
    } catch (error) {  
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });  
    }  
}  

