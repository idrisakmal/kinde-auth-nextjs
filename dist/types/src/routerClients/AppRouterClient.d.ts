import { default as RouterClient } from './RouterClient';
import { NextResponse } from 'next/server';
export default class AppRouterClient extends RouterClient {
    /**
     *
     * @param {import('next/server').NextRequest} req
     * @param {*} res
     * @param {{onError?: () => void; config: {audience?: string | string[], clientId?: string, clientSecret?: string, issuerURL?: string, siteUrl?: string, postLoginRedirectUrl?: string, postLogoutRedirectUrl?: string, scope?: string}}} options
     */
    constructor(req: import('next/server').NextRequest, res: any, options: {
        onError?: () => void;
        config: {
            audience?: string | string[];
            clientId?: string;
            clientSecret?: string;
            issuerURL?: string;
            siteUrl?: string;
            postLoginRedirectUrl?: string;
            postLogoutRedirectUrl?: string;
            scope?: string;
        };
    });
    clientConfig: {
        framework: string;
        audience: string | string[];
        authDomain: string;
        clientId: string;
        clientSecret: string;
        logoutRedirectURL: string;
        redirectURL: string;
        siteUrl: string;
        scope: string;
        frameworkVersion: string;
    };
    kindeClient: {
        handleRedirectToApp: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager, callbackURL: URL) => Promise<void>;
        isAuthenticated: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager) => Promise<boolean>;
        getUserProfile: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager) => Promise<import('@kinde-oss/kinde-typescript-sdk').UserType>;
        createOrg: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager, options?: import('@kinde-oss/kinde-typescript-sdk').CreateOrgURLOptions) => Promise<URL>;
        getToken: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager) => Promise<string>;
        refreshTokens: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager, commitToSession?: boolean) => Promise<import('@kinde-oss/kinde-typescript-sdk').OAuth2CodeExchangeResponse>;
        register: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager, options?: import('@kinde-oss/kinde-typescript-sdk').RegisterURLOptions) => Promise<URL>;
        getUser: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager) => Promise<import('@kinde-oss/kinde-typescript-sdk').UserType>;
        logout: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager) => Promise<URL>;
        login: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager, options?: import('@kinde-oss/kinde-typescript-sdk').LoginURLOptions) => Promise<URL>;
        portal: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager, options: import('@kinde-oss/kinde-typescript-sdk').GeneratePortalUrlParams) => Promise<{
            url: URL;
        }>;
        getUserOrganizations: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager) => Promise<{
            orgCodes: string[];
        }>;
        getOrganization: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager) => Promise<{
            orgCode: string | null;
        }>;
        getBooleanFlag: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager, code: string, defaultValue?: boolean) => Promise<boolean>;
        getIntegerFlag: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager, code: string, defaultValue?: number) => Promise<number>;
        getPermissions: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager) => Promise<{
            permissions: string[];
            orgCode: string | null;
        }>;
        getPermission: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager, name: string) => Promise<{
            orgCode: string | null;
            isGranted: boolean;
        }>;
        getClaimValue: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager, claim: string, type?: import('@kinde-oss/kinde-typescript-sdk').ClaimTokenType) => Promise<unknown | null>;
        getStringFlag: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager, code: string, defaultValue?: string) => Promise<string>;
        getClaim: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager, claim: string, type?: import('@kinde-oss/kinde-typescript-sdk').ClaimTokenType) => Promise<{
            name: string;
            value: unknown | null;
        }>;
        getFlag: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager, code: string, defaultValue?: import('@kinde-oss/kinde-typescript-sdk').FlagType[keyof import('@kinde-oss/kinde-typescript-sdk').FlagType], type?: keyof import('@kinde-oss/kinde-typescript-sdk').FlagType) => Promise<import('@kinde-oss/kinde-typescript-sdk').GetFlagType>;
    } | {
        isAuthenticated: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager) => Promise<boolean>;
        getToken: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager) => Promise<string>;
        logout: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager) => Promise<URL>;
        getUserOrganizations: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager) => Promise<{
            orgCodes: string[];
        }>;
        getOrganization: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager) => Promise<{
            orgCode: string | null;
        }>;
        getBooleanFlag: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager, code: string, defaultValue?: boolean) => Promise<boolean>;
        getIntegerFlag: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager, code: string, defaultValue?: number) => Promise<number>;
        getPermissions: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager) => Promise<{
            permissions: string[];
            orgCode: string | null;
        }>;
        getPermission: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager, name: string) => Promise<{
            orgCode: string | null;
            isGranted: boolean;
        }>;
        getClaimValue: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager, claim: string, type?: import('@kinde-oss/kinde-typescript-sdk').ClaimTokenType) => Promise<unknown | null>;
        getStringFlag: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager, code: string, defaultValue?: string) => Promise<string>;
        getClaim: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager, claim: string, type?: import('@kinde-oss/kinde-typescript-sdk').ClaimTokenType) => Promise<{
            name: string;
            value: unknown | null;
        }>;
        getFlag: (sessionManager: import('@kinde-oss/kinde-typescript-sdk').SessionManager, code: string, defaultValue?: import('@kinde-oss/kinde-typescript-sdk').FlagType[keyof import('@kinde-oss/kinde-typescript-sdk').FlagType], type?: keyof import('@kinde-oss/kinde-typescript-sdk').FlagType) => Promise<import('@kinde-oss/kinde-typescript-sdk').GetFlagType>;
    };
    req: import('next/server').NextRequest;
    onErrorCallback: () => void;
    createStore(): Promise<void>;
    /**
     *
     * @param {string} url
     * @returns
     */
    redirect(url: string): NextResponse<unknown>;
    /**
     *
     * @param {object} data
     * @param {{status: number}} status
     * @returns
     */
    json(data: object, status?: {
        status: number;
    }): NextResponse<any>;
    error(): () => Response;
    onError(error: any): void;
}
//# sourceMappingURL=AppRouterClient.d.ts.map