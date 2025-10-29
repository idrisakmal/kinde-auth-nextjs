import { getEntitlementsResponse } from '@kinde-oss/kinde-auth-react/utils';
/**
 * Retrieves the entitlements for the current user from the Account API.
 * @param {import('next').NextApiRequest} [req]
 * @param {import('next').NextApiResponse} [res]
 * @returns {Promise<getEntitlementsResponse | null>}
 */
interface GetOrganizationFactoryParams {
    req?: import('next').NextApiRequest;
    res?: import('next').NextApiResponse;
}
export declare const getEntitlementsFactory: (req: GetOrganizationFactoryParams["req"], res: GetOrganizationFactoryParams["res"]) => () => Promise<getEntitlementsResponse | null>;
export {};
//# sourceMappingURL=getEntitlements.d.ts.map