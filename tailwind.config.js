const animate = require('tailwindcss-animate');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	safelist: ['dark'],
	prefix: '',

	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				green: {
					DEFAULT: '#B5E275',
					50: '#f5fbea',
					100: '#e8f6d1',
					200: '#d3efa7',
					300: '#b5e275',
					400: '#98d249',
					500: '#79b72b',
					600: '#5d921e',
					700: '#47701b',
					800: '#3b591b',
					900: '#334c1b',
					950: '#19290a'
				},
				sky: {
					DEFAULT: '#79D8DF'
				},
				black: {
					DEFAULT: '#272727',
					0: '#020105',
					1: '#353437'
				},
				grey: {
					DEFAULT: '#5D5D5F',
					0: '#F5F5F7',
					1: '#E2E2EE',
					2: '#C2C2C3',
					3: '#9A999B',
					4: '#EBEBEB'
				}
			},
			borderRadius: {
				xl: 'calc(var(--radius) + 4px)',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 }
				},
				'collapsible-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-collapsible-content-height)' }
				},
				'collapsible-up': {
					from: { height: 'var(--radix-collapsible-content-height)' },
					to: { height: 0 }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'collapsible-down': 'collapsible-down 0.2s ease-in-out',
				'collapsible-up': 'collapsible-up 0.2s ease-in-out'
			}
		}
	},
	plugins: [animate]
};
