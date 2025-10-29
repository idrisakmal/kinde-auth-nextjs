import { NextResponse } from 'next/server';
export function health(): Promise<NextResponse<{
    apiPath: string;
    redirectURL: string;
    postLoginRedirectURL: string;
    issuerURL: string;
    clientID: string;
    clientSecret: string;
    postLogoutRedirectURL: string;
    audience: "" | string[];
    cookieDomain: string;
    logoutRedirectURL: string;
}>>;
//# sourceMappingURL=health.d.ts.map