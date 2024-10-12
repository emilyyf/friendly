import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config}*/
const config = {
	preprocess: [vitePreprocess()],
	vitePlugin: {
		/** This solves the following issue: https://github.com/sveltejs/svelte/issues/9632 */
		dynamicCompileOptions({ filename }) {
			if (filename.includes('node_modules')) {
				return { runes: false };
			}
		},
	},
	compilerOptions: {
		runes: true,
	},
	kit: {
		adapter: adapter(),
	},
};
export default config;
