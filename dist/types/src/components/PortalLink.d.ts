import { default as React } from 'react';
import { GeneratePortalUrlParams } from '@kinde-oss/kinde-auth-react/utils';
export interface PortalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, Partial<Omit<GeneratePortalUrlParams, "domain">> {
    children: React.ReactNode;
}
export declare function PortalLink({ subNav, returnUrl, children, ...props }: PortalLinkProps): React.JSX.Element;
//# sourceMappingURL=PortalLink.d.ts.map