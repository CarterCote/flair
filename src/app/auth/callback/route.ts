import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<NextResponse> {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get('code');
    let redirectUrl = requestUrl.origin;
    if (code) {
        const cookieStore = cookies();
        const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
        try {
            const { error } = await supabase.auth.exchangeCodeForSession(code);
            if (error) {
                console.error('Error exchanging code for session:', error.message);
                redirectUrl += '/error?message=Authentication+Failed';
            // } else {
            //     redirectUrl += '/dashboard';
            // }
            }
        } catch (error) {
            console.error('Exception when exchanging code for session:', error);
            // Handle exceptions, possibly network errors or misconfigurations
            redirectUrl += '/error?message=Authentication+Exception';
        }
        // await supabase.auth.exchangeCodeForSession(code);
    }
    return NextResponse.redirect(redirectUrl);
}