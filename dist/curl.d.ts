interface CurlOptions {
    mode?: "GET" | "PUT" | "PUSH" | "DELETE" | "POST";
    headers?: {
        apiKey?: string;
        [key: string]: any;
    };
    user?: {
        user: string;
        password: string;
    };
    data?: {
        [key: string]: any;
    };
    flags?: string[];
}
/**
 * Make a curl request to a remote server.
 * @param address The address to send the curl request to.
 * @param options Optional params that can be sent with the request
 */
export declare function curl(address: string, { mode, headers, user, data, flags }: CurlOptions): Promise<string>;
export {};
