import { KindeFlag, KindeFlagTypeCode } from '../../types';
import { KindeFeatureFlags } from '../types';
export declare const getFlagFactory: (featureFlags: KindeFeatureFlags) => (code: string, defaultValue: string | number | boolean, flagType: KindeFlagTypeCode) => KindeFlag;
export declare const getBooleanFlagFactory: (featureFlags: KindeFeatureFlags) => (code: string, defaultValue: boolean) => any;
export declare const getStringFlagFactory: (featureFlags: KindeFeatureFlags) => (code: string, defaultValue: string) => any;
export declare const getIntegerFlagFactory: (featureFlags: KindeFeatureFlags) => (code: string, defaultValue: number) => any;
//# sourceMappingURL=feature-flag-factory.d.ts.map