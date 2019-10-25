/* Constants set with DefinePlugin in webpack.base.conf */
declare const IS_PROD: boolean;
declare const IS_DEV: boolean;
declare const DEV_SERVER_URL: string;

declare module '*.html';

declare module '*.json' {
    const value: any;
    export default value;
}

//tslint:disable-next-line:interface-name
interface Window {
    postal: any;
    $: any;
    jQuery: any;
}

interface IWebpackRequire extends NodeRequire {
    context (file: string, flag?: boolean, exp?: RegExp): any;
}

declare type anyJS = any;
declare type anyTODO = any;

declare module 'server' {
    const startServer: Function;
    export default startServer;
}
