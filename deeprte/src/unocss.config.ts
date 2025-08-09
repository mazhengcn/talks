import config from '@slidev/client/uno.config.ts'
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import { mergeConfigs, presetIcons, presetWebFonts } from 'unocss'
import { presetSJTU } from './preset-sjtu'

export default mergeConfigs([
  config,
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
        processors: createLocalFontProcessor(),
      }),
    ],
  },
])
