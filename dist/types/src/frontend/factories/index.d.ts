import { KindeContextProps } from '@kinde-oss/kinde-auth-react';
import { KindeNextClientState } from '../types';
import { KindeAccessToken, KindeIdToken } from '../../types';
export declare const constructKindeClientState: (state: KindeNextClientState) => {
    isAuthenticated: boolean;
    accessTokenRaw: string;
    idTokenEncoded: string;
    getFlag: (code: string, defaultValue: string | number | boolean, flagType: import('../..').KindeFlagTypeCode) => import('../..').KindeFlag;
    getBooleanFlag: (code: string, defaultValue: boolean) => any;
    getIntegerFlag: (code: string, defaultValue: number) => any;
    getStringFlag: (code: string, defaultValue: string) => any;
    getClaim: (claim: string, tokenKey?: "access_token" | "id_token") => {
        name: string;
        value: any;
    };
    getAccessToken: () => KindeAccessToken | null;
    getToken: () => string | null;
    getAccessTokenRaw: () => string | null;
    getIdToken: () => KindeIdToken | null;
    getIdTokenRaw: () => string | null;
    getOrganization: <T>() => import('../..').KindeOrganization<T> | null;
    getPermissions: () => import('../..').KindePermissions;
    getUserOrganizations: () => import('../..').KindeOrganizations;
    getPermission: (key: string) => {
        isGranted: boolean;
        orgCode: string;
    };
    getUser: () => import('../..').KindeUser<Record<string, string>>;
    accessToken: KindeAccessToken | null;
    accessTokenEncoded: string | null;
    featureFlags: import('../types').KindeFeatureFlags;
    idToken: KindeIdToken | null;
    idTokenRaw: string | null;
    organization: import('../..').KindeOrganization | null;
    permissions: import('../..').KindePermissions | null;
    user: import('../..').KindeUser<Record<string, string>> | null;
    userOrganizations: import('../..').KindeOrganizations | null;
    isLoading: boolean;
    error: string | null;
};
export declare const transformReactAuthStateToNextState: (reactAuthState: KindeContextProps) => Promise<KindeNextClientState>;
//# sourceMappingURL=index.d.ts.map