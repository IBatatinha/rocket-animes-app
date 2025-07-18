/** @jest-config-loader ts-node */
/** @jest-config-loader-options {"transpileOnly": true} */

import type { Config } from "jest";

export default async (): Promise<Config> => {
	return {
		verbose: true,
	};
};
