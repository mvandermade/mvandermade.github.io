// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'mvandermade.github.io',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mvandermade' }],
			sidebar: [
				{
					label: 'Books',
					autogenerate: { directory: 'Books' },
				},
				{
					label: 'Software',
					autogenerate: { directory: 'Software' },
				},
				{
					label: 'Software Development',
					autogenerate: { directory: 'Software Development' },
				},
			],
		}),
	],
	site: 'https://mvandermade.github.io',
});
