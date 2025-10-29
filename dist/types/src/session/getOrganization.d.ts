import { KindeOrganization, KindeProperties } from '../types';
/**
 * @template T Type of organization property values. Defaults to KindeProperties
 * @param {import('next').NextApiRequest} [req]
 * @param {import('next').NextApiResponse} [res]
 * @returns {KindeOrganization<T>}
 */
interface GetOrganizationFactoryParams {
    req?: import('next').NextApiRequest;
    res?: import('next').NextApiResponse;
}
export declare const getOrganizationFactory: <T = KindeProperties>(req: GetOrganizationFactoryParams["req"], res: GetOrganizationFactoryParams["res"]) => () => Promise<KindeOrganization<T> | null>;
export {};
//# sourceMappingURL=getOrganization.d.ts.map