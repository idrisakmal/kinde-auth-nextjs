/**
 * @typedef {Object} PropsType
 * @prop {React.ReactNode} children
 * @prop {string} [orgName]
 *
 * @typedef {PropsType & React.AnchorHTMLAttributes<HTMLAnchorElement>} Props
 */
/**
 * @param {Props} props
 */
export function CreateOrgLink({ children, orgName, ...props }: Props): import("react").JSX.Element;
export type PropsType = {
    children: React.ReactNode;
    orgName?: string;
};
export type Props = PropsType & React.AnchorHTMLAttributes<HTMLAnchorElement>;
//# sourceMappingURL=CreateOrgLink.d.ts.map