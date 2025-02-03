import { NextResponse } from 'next/server';
import { authenticateJWT } from '../../../../../util/middleware';
import User from '../../../../../models/User';

export async function GET(req) {
    const authResult = await new Promise((resolve) => {
        authenticateJWT(req, {
            json: (data) => resolve({ success: true, data }),
            status: (statusCode) => resolve({ success: false, statusCode }),
        }, () => {
            resolve({ success: true });
        });
    });

    if (!authResult.success) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: authResult.statusCode || 401 });
    }

    try {
        const users = await User.find({});
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({ message: 'Could not fetch users' }, { status: 500 });
    }
}