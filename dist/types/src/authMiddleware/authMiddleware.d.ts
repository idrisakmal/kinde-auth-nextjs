import { NextResponse } from 'next/server';
/**
 * @param {Request} [req]
 * @param {function(req: Request & {kindeAuth: {user: any, token: string}})} [onIsAuthorized]
 */
export declare function withAuth(...args: any[]): Promise<NextResponse<any>> | ((...args: any[]) => Promise<NextResponse<any>>);
//# sourceMappingURL=authMiddleware.d.ts.map