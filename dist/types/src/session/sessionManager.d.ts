export function sessionManager(req?: import('next').NextApiRequest, res?: import('next').NextApiResponse | import('next').NextResponse, options?: {
    persistent?: boolean;
}): Promise<import('@kinde-oss/kinde-typescript-sdk').SessionManager>;
export function appRouterSessionManager(cookieStore: import('next/dist/server/web/spec-extension/adapters/request-cookies').ReadonlyRequestCookies, persistent?: boolean): import('@kinde-oss/kinde-typescript-sdk').SessionManager;
export function pageRouterSessionManager(req: import('next/types').NextApiRequest, res?: import('next').NextApiResponse, persistent?: boolean): import('@kinde-oss/kinde-typescript-sdk').SessionManager;
//# sourceMappingURL=sessionManager.d.ts.map