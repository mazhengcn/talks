import defaultConfig from '@slidev/client/uno.config.ts'
import { mergeConfigs, presetWebFonts } from 'unocss'
import { presetSJTU } from './styles/preset-sjtu'

export default mergeConfigs([
  defaultConfig,
  {
    shortcuts: {
      'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500',
    },
    presets: [
      presetSJTU(),
      presetWebFonts({
        fonts: {
          sans: 'Inter',
          mono: 'JetBrains Mono',
          fast: 'Ubuntu',
          hand: 'Caveat',
        },
      }),
    ],
  },
])
