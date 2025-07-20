import config from '@slidev/client/uno.config.ts'
import { mergeConfigs, presetWebFonts } from 'unocss'

export default mergeConfigs([
  config,
  {
    shortcuts: {
      'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500',
    },
    presets: [
      presetWebFonts({
        fonts: {
          sans: 'Noto Sans SC',
          mono: 'DM Mono',
          fast: 'Ubuntu',
          hand: 'Caveat',
        },
      }),
    ],
  },
])
