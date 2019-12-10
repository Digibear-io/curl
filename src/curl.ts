import { exec } from 'child_process';

interface CurlOptions {
	mode?: 'GET' | 'PUT' | 'PUSH' | 'DELETE' | 'POST';
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
export default async (address: string, { mode = 'GET', headers = {}, user, data, flags = [] }: CurlOptions) => {
	const reqHeaders = Object.keys(headers).reduce(
		(acc: string, curr: string) => (acc += `-H "${curr}: ${headers[curr]}"`),
		''
	);

	// Build the curl string.
	let curlString = `curl -X ${mode} ${reqHeaders} ${data ? '-D ' + JSON.stringify(data) : ''} ${user
		? '--user' + user.user + ':' + user.password
		: ''} ${flags.map((flag: string) => '--' + flag).join(' ')} ${address}`;

	// Execute the curl, and
	return new Promise((resolve, reject) => {
		exec(curlString, (err, stdout) => {
			if (err) reject(err);
			return resolve(stdout);
		});
	});
};
