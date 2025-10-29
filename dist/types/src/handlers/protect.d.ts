export function protectPage(Page: any, config?: {
    postLoginRedirectURL: string;
    orgCode: string;
    roles: string[];
    permissions: string | string[];
}): Function;
export function protectApi(handler: Function, config: {
    roles: string[];
    permissions: string | string[];
}): Function;
//# sourceMappingURL=protect.d.ts.map