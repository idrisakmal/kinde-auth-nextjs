type Config = {
    isDebugMode: boolean;
    apiPath: string;
    initialState: any;
    SESSION_PREFIX: string;
    redirectURL: string;
    postLoginRedirectURL: string;
    postLoginAllowedURLRegex: string;
    issuerURL: string;
    clientID: string;
    clientSecret: string;
    postLogoutRedirectURL: string;
    audience: string[] | "";
    cookieDomain: string;
    responseType: "code";
    codeChallengeMethod: "S256";
    redirectRoutes: {
        callback: string;
    };
    issuerRoutes: {
        logout: "/logout";
        login: "/oauth2/auth";
        register: "/oauth2/auth";
        token: "/oauth2/token";
        profile: "/oauth2/v2/user_profile";
    };
    clientOptions: {
        audience: string[] | "";
        authDomain: string;
        clientId: string;
        clientSecret: string;
        logoutRedirectURL: string;
        redirectURL: string;
        frameworkVersion: string;
        scope: string;
    };
    grantType: "AUTHORIZATION_CODE";
};
export declare const config: Config;
export declare const routes: {
    login: string;
    logout: string;
    register: string;
    createOrg: string;
    health: string;
    setup: string;
    portal: string;
};
export {};
//# sourceMappingURL=index.d.ts.map