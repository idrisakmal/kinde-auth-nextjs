import { KindeAccessToken, KindeIdToken } from '../../types';
export declare const getClaimFactory: (accessToken: KindeAccessToken, idToken: KindeIdToken) => (claim: string, tokenKey?: "access_token" | "id_token") => {
    name: string;
    value: any;
};
export declare const getNextTypedAccessTokenFactory: (accessToken: KindeAccessToken) => () => KindeAccessToken | null;
export declare const getRawAccessTokenFactory: (rawAccessToken: string) => () => string | null;
export declare const getNextTypedIdTokenFactory: (idToken: KindeIdToken) => () => KindeIdToken | null;
export declare const getRawIdTokenFactory: (rawIdToken: string) => () => string | null;
//# sourceMappingURL=token-factory.d.ts.map