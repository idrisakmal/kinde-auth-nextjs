import { FetchedKindeState, PublicKindeConfig } from './types.js';
export declare const getRefreshTokensServerAction: () => Promise<typeof import('../session/refreshTokensServerAction.js').refreshTokensServerAction>;
type FetchKindeStateResponse = {
    success: true;
    kindeState: Omit<FetchedKindeState, "env">;
    env: PublicKindeConfig;
} | {
    success: false;
    error: string;
    env: PublicKindeConfig | null;
};
export declare const fetchKindeState: () => Promise<FetchKindeStateResponse>;
export {};
//# sourceMappingURL=utils.d.ts.map