import type { Preset } from 'unocss'

/**
 * SJTU-inspired color system preset for UnoCSS
 * Based on Shanghai Jiao Tong University's visual identity
 * Provides comprehensive color palette for both light and dark modes
 */
export function presetSJTU(): Preset {
  return {
    name: 'preset-sjtu',
    theme: {
      colors: {
        // Modernized SJTU colors
        sjtu: {
          50: '#eaf6ff',
          100: '#d4ecff',
          200: '#a3d8ff',
          300: '#5fc2ff',
          400: '#1faaff',
          500: '#008cff',
          600: '#0074e6', // More vibrant SJTU Blue
          700: '#005bb5',
          800: '#004080',
          900: '#002c4c',
          950: '#001a2e',
          DEFAULT: '#0074e6',
        },
        academic: {
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffd966',
          300: '#ffc233',
          400: '#ffb300',
          500: '#ff9800',
          600: '#ff8200', // More vibrant gold
          700: '#e67300',
          800: '#b35a00',
          900: '#804000',
          950: '#402000',
          DEFAULT: '#ff8200',
        },
        // Vibrant accent colors
        accent: {
          magenta: {
            500: '#e100ff',
            700: '#b300cc',
            DEFAULT: '#e100ff',
          },
          aqua: {
            500: '#00ffe7',
            700: '#00b3a6',
            DEFAULT: '#00ffe7',
          },
        },
        tech: {
          electric: {
            50: '#e0f7ff',
            100: '#b3ecff',
            200: '#66d9ff',
            300: '#33c2ff',
            400: '#00b3ff',
            500: '#0099e6',
            600: '#007acc',
            700: '#005fa3',
            800: '#004080',
            900: '#002c4c',
            DEFAULT: '#00b3ff',
          },
          cyber: {
            50: '#e0fff7',
            100: '#b3ffe7',
            200: '#66ffd9',
            300: '#33ffc2',
            400: '#00ffb3',
            500: '#00e699',
            600: '#00cc82',
            700: '#00a366',
            800: '#00804c',
            900: '#004c2c',
            DEFAULT: '#00ffb3',
          },
          innovation: {
            50: '#f5e0ff',
            100: '#e7b3ff',
            200: '#d966ff',
            300: '#c233ff',
            400: '#b300ff',
            500: '#9900e6',
            600: '#7a00cc',
            700: '#5f00a3',
            800: '#400080',
            900: '#2c004c',
            DEFAULT: '#b300ff',
          },
          energy: {
            50: '#fff0e0',
            100: '#ffd9b3',
            200: '#ffb366',
            300: '#ff9933',
            400: '#ff8200',
            500: '#e66f00',
            600: '#cc5c00',
            700: '#a34a00',
            800: '#803800',
            900: '#4c2200',
            DEFAULT: '#ff8200',
          },
        },
        // Semantic colors
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          DEFAULT: '#22c55e',
        },
        warning: {
          50: '#fffbf0',
          100: '#fef7e0',
          200: '#fcecc0',
          300: '#f9dd95',
          400: '#f5c968',
          500: '#f1b544',
          600: '#e29a28',
          700: '#bc7a1d',
          800: '#965f1c',
          900: '#7a4e1c',
          DEFAULT: '#f1b544',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          DEFAULT: '#ef4444',
        },
        info: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          DEFAULT: '#0ea5e9',
        },
        // Neutral colors for both modes
        neutral: {
          0: '#ffffff',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
          1000: '#000000',
        },
      },
    },
    rules: [
      // Modern vibrant gradients
      [
        'text-gradient-sjtu',
        {
          'background-image': 'linear-gradient(120deg, #0074e6 0%, #00b3ff 40%, #e100ff 100%)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
        },
      ],
      [
        'text-gradient-academic',
        {
          'background-image': 'linear-gradient(120deg, #ff8200 0%, #ffb300 50%, #00ffe7 100%)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
        },
      ],
      [
        'text-gradient-tech',
        {
          'background-image': 'linear-gradient(120deg, #00b3ff 0%, #b300ff 50%, #00ffb3 100%)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
        },
      ],
      // Background gradients
      [
        'bg-gradient-sjtu',
        {
          'background-image': 'linear-gradient(120deg, #0074e6 0%, #00b3ff 40%, #e100ff 100%)',
        },
      ],
      [
        'bg-gradient-academic',
        {
          'background-image': 'linear-gradient(120deg, #ff8200 0%, #ffb300 50%, #00ffe7 100%)',
        },
      ],
      [
        'bg-gradient-tech',
        {
          'background-image': 'linear-gradient(120deg, #00b3ff 0%, #b300ff 50%, #00ffb3 100%)',
        },
      ],
      // Glow effects - adaptive for light/dark
      [
        'glow-sjtu',
        {
          'box-shadow': '0 0 20px rgba(0, 102, 204, 0.3), 0 0 40px rgba(0, 102, 204, 0.1)',
        },
      ],
      [
        'glow-sjtu-dark',
        {
          'box-shadow': '0 0 20px rgba(54, 172, 255, 0.5), 0 0 40px rgba(54, 172, 255, 0.3)',
        },
      ],
      [
        'glow-tech',
        {
          'box-shadow': '0 0 20px rgba(14, 165, 233, 0.3), 0 0 40px rgba(14, 165, 233, 0.1)',
        },
      ],
      [
        'glow-tech-dark',
        {
          'box-shadow': '0 0 20px rgba(14, 165, 233, 0.5), 0 0 40px rgba(14, 165, 233, 0.3)',
        },
      ],
    ],
    shortcuts: {
      // Theme-aware shortcuts
      'bg-primary': 'bg-sjtu-600 dark:bg-sjtu-400',
      'text-primary': 'text-sjtu-700 dark:text-sjtu-300',
      'border-primary': 'border-sjtu-600 dark:border-sjtu-500',

      'bg-secondary': 'bg-academic-600 dark:bg-academic-400',
      'text-secondary': 'text-academic-700 dark:text-academic-300',
      'border-secondary': 'border-academic-600 dark:border-academic-500',

      'bg-accent': 'bg-tech-electric-500 dark:bg-tech-electric-400',
      'text-accent': 'text-tech-electric-700 dark:text-tech-electric-300',
      'border-accent': 'border-tech-electric-500 dark:border-tech-electric-400',

      // Surface colors - enhanced for better contrast
      'bg-surface': 'bg-white dark:bg-neutral-900',
      'bg-surface-2': 'bg-neutral-50 dark:bg-neutral-800',
      'bg-surface-3': 'bg-neutral-100 dark:bg-neutral-700',

      'text-on-surface': 'text-neutral-900 dark:text-neutral-50',
      'text-on-surface-variant': 'text-neutral-700 dark:text-neutral-300',
      'text-on-surface-muted': 'text-neutral-600 dark:text-neutral-400',

      // Interactive states - improved contrast
      'hover-primary': 'hover:bg-sjtu-700 dark:hover:bg-sjtu-300 hover:text-white dark:hover:text-neutral-900',
      'hover-secondary': 'hover:bg-academic-700 dark:hover:bg-academic-300 hover:text-white dark:hover:text-neutral-900',
      'hover-surface': 'hover:bg-neutral-100 dark:hover:bg-neutral-800',

      // Card styles - glassmorphism, transparency, adaptive borders and shadows
      'card': 'bg-surface/60 backdrop-blur-md border border-neutral-300 dark:border-neutral-600 rounded-lg shadow-lg dark:shadow-2xl',
      'card-hover': 'card hover-surface transition-colors duration-200',

      // Code blocks - better contrast
      'code-block': 'bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-lg',

      // Emphasis styles for presentations - theme adaptive
      'emphasis-primary': 'text-gradient-sjtu font-semibold',
      'emphasis-secondary': 'text-gradient-academic font-semibold',
      'emphasis-tech': 'text-gradient-tech font-semibold',

      // Button styles - enhanced for both themes
      'btn-primary': 'bg-primary text-white dark:text-neutral-900 hover-primary px-4 py-2 rounded-lg font-medium transition-colors shadow-md',
      'btn-secondary': 'bg-secondary text-white dark:text-neutral-900 hover-secondary px-4 py-2 rounded-lg font-medium transition-colors shadow-md',
      'btn-outline': 'border-2 border-primary text-primary hover-primary px-4 py-2 rounded-lg font-medium transition-colors bg-transparent',

      // Theme-adaptive glow effects
      'glow-adaptive': 'glow-sjtu dark:glow-sjtu-dark',
      'glow-tech-adaptive': 'glow-tech dark:glow-tech-dark',
    },
  }
}
