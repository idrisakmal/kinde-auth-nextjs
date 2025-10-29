import { UsersApi, OAuthApi, SubscribersApi, OrganizationsApi, ConnectedAppsApi, FeatureFlagsApi, EnvironmentsApi, PermissionsApi, RolesApi, BusinessApi, IndustriesApi, TimezonesApi, ApplicationsApi, CallbacksApi, APIsApi } from '@kinde-oss/kinde-typescript-sdk';
export function createKindeManagementAPIClient(req?: Request | import('next').NextApiRequest, res?: Response | import('next').NextApiResponse): Promise<{
    usersApi: UsersApi;
    oauthApi: OAuthApi;
    subscribersApi: SubscribersApi;
    organizationsApi: OrganizationsApi;
    connectedAppsApi: ConnectedAppsApi;
    featureFlagsApi: FeatureFlagsApi;
    environmentsApi: EnvironmentsApi;
    permissionsApi: PermissionsApi;
    rolesApi: RolesApi;
    businessApi: BusinessApi;
    industriesApi: IndustriesApi;
    timezonesApi: TimezonesApi;
    applicationsApi: ApplicationsApi;
    callbacksApi: CallbacksApi;
    apisApi: APIsApi;
}>;
//# sourceMappingURL=api-client.d.ts.map