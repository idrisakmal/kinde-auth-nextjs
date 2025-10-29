import { KindeNextClientState, PublicKindeConfig } from '../../types';
import { RefreshTokenResult } from '@kinde-oss/kinde-auth-react/utils';
export declare const calculateExpirySeconds: () => Promise<number | null>;
export declare const useSessionSync: (shouldAutoRefresh?: boolean) => {
    config: PublicKindeConfig;
    getFetchedState: () => KindeNextClientState;
    loading: boolean;
    refetch: () => Promise<{
        success: boolean;
        error: string;
        accessToken?: undefined;
        idToken?: undefined;
    } | {
        success: boolean;
        accessToken: string;
        idToken: string;
        error?: undefined;
    }>;
    refreshHandler: () => Promise<RefreshTokenResult>;
};
//# sourceMappingURL=use-session-sync.d.ts.map