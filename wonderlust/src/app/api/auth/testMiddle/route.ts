import { NextResponse } from 'next/server';
import { authenticateJWT } from '../../../../../util/middleware';
import User from '../../../../../models/User';

export async function GET(req) {
    return new Promise((resolve) => {
        authenticateJWT(req, {
            json: (data) => resolve(NextResponse.json(data)),
            status: (statusCode) => resolve(NextResponse.json({ message: 'Error occurred' }, { status: statusCode })),
        }, async () => {
            try {
                const users = await User.find({});
                resolve(NextResponse.json(users));
            } catch (error) {
                resolve(NextResponse.json({ message: 'Could not fetch users' }, { status: 500 }));
            }
        });
    });
}