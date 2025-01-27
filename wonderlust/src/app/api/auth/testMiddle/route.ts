import { NextResponse } from 'next/server';
import { authenticateJWT } from '../../../../../util/middleware';
import User from '../../../../../models/User';

export async function GET(req) {
    // console.log("asdasdasd")
    return new Promise((resolve, reject) => {
        authenticateJWT(req, {
            json: (data) => resolve(NextResponse.json(data)),
            status: (statusCode) => ({
                json: (data) => resolve(NextResponse.json(data, { status: statusCode })),
            }),
        }, async () => {
            try {
                const users = await User.find({});
                resolve(NextResponse.json(users));
            } catch (error) {
                reject(NextResponse.json({ message: 'Could not fetch users' }, { status: 500 }));
            }
        });
    });
}