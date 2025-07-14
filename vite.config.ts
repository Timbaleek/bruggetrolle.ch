import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'legacy',
				includePaths: ['node_modules'] // allow imports like "bulma/bulma"
			}
		}
	}
});