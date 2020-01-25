"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
/**
 * Make a curl request to a remote server.
 * @param address The address to send the curl request to.
 * @param options Optional params that can be sent with the request
 */
async function curl(address, { mode = "GET", headers = {}, user, data, flags = [] }) {
    const reqHeaders = Object.keys(headers).reduce((acc, curr) => (acc += `-H "${curr}: ${headers[curr]}"`), "");
    // Build the curl string.
    let curlString = `curl -X ${mode} ${reqHeaders} ${data ? "-d " + JSON.stringify(data) : ""} ${user ? "--user" + user.user + ":" + user.password : ""} ${flags.join(" ")} ${address}`;
    // Execute the curl, and
    return new Promise((resolve, reject) => {
        child_process_1.exec(curlString, (err, stdout) => {
            if (err)
                reject(err);
            return resolve(stdout);
        });
    });
}
exports.curl = curl;
//# sourceMappingURL=curl.js.map