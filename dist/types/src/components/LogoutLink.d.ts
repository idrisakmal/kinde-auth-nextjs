/**
 * @typedef {Object} PropsType
 * @prop {React.ReactNode} children
 * @prop {string} [postLogoutRedirectURL]
 *
 * @typedef {PropsType & React.AnchorHTMLAttributes<HTMLAnchorElement>} Props
 */
/**
 * @param {Props} props
 */
export function LogoutLink({ children, postLogoutRedirectURL, ...props }: Props): import("react").JSX.Element;
export type PropsType = {
    children: React.ReactNode;
    postLogoutRedirectURL?: string;
};
export type Props = PropsType & React.AnchorHTMLAttributes<HTMLAnchorElement>;
//# sourceMappingURL=LogoutLink.d.ts.map