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
            const userCheck = await User.findOne({email})

            if (userCheck.email === email && userCheck.user === user ){
                const passwordMatches = await bcryptjs.compare(password, userCheck.password)
                    if (passwordMatches){
                        return NextResponse.json({ message: 'logged in' }, { status: 200 });
                    }
                }
        }
        return NextResponse.json({ message: 'Incorrect email or password' }, { status: HttpStatusCode.BadRequest }); 
        
    } catch (error) {  
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });  
    }
}