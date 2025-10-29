import { NextApiRequest, NextApiResponse } from 'next';
import { OAuth2CodeExchangeResponse } from '@kinde-oss/kinde-typescript-sdk';
import { KindeAccessToken, KindeIdToken, KindeOrganization, KindeOrganizations, KindePermission, KindePermissions, KindeUser, KindeRoles } from '../types';
import { getEntitlementsResponse } from '@kinde-oss/kinde-auth-react/utils';
declare const sessionHandler: (req?: NextApiRequest, res?: NextApiResponse) => {
    refreshTokens: () => Promise<OAuth2CodeExchangeResponse>;
    getAccessToken: () => Promise<KindeAccessToken> | null;
    getBooleanFlag: (code: string, defaultValue: boolean) => Promise<boolean> | null | undefined;
    getFlag: (code: string, defaultValue: string | number | boolean, flagType: string) => any | null;
    getIdToken: () => Promise<KindeIdToken> | null;
    getIdTokenRaw: () => Promise<string> | null;
    getAccessTokenRaw: () => Promise<string> | null;
    getIntegerFlag: (code: string, defaultValue: number) => Promise<number> | null | undefined;
    getOrganization: <T>() => Promise<KindeOrganization<T> | null>;
    getPermission: (key: string) => Promise<KindePermission> | null;
    getPermissions: () => Promise<KindePermissions | null>;
    getStringFlag: (code: string, defaultValue: string) => Promise<string> | null | undefined;
    getUser: <T = Record<string, any>>() => Promise<KindeUser<T> | null>;
    getUserOrganizations: () => Promise<KindeOrganizations | null>;
    isAuthenticated: () => Promise<boolean> | null;
    getRoles: () => Promise<KindeRoles | null>;
    getClaim: (claim: string, tokenKey?: "access_token" | "id_token") => Promise<{
        name: string;
        value: string;
    }> | null;
    getEntitlements: () => Promise<getEntitlementsResponse | null>;
};
export default sessionHandler;
//# sourceMappingURL=index.d.ts.map