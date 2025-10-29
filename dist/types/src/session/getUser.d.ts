import { NextApiRequest, NextApiResponse } from 'next';
import { KindeProperties, KindeUser } from '../types';
export declare const getUserFactory: (req: NextApiRequest, res: NextApiResponse) => <T = KindeProperties>() => Promise<KindeUser<T>>;
//# sourceMappingURL=getUser.d.ts.map