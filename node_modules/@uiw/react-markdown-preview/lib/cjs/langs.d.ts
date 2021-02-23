export interface ILangData {
    [key: string]: {
        /**
         * alias
         */
        a?: string | string[];
        /**
         * require
         */
        r?: string | string[];
        /**
         * peerDependencies
         */
        p?: string | string[];
        /**
         * file does not exist
         */
        e?: boolean;
    };
}
declare const langData: ILangData;
export declare function loadLang(ext: string): Promise<any[] | undefined>;
export default langData;
