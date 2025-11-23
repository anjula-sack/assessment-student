function importAll(r: any) {
  const files: Record<string, string> = {}

  r.keys().forEach((key) => {
    const normalized = key.replace('./', '').replace(/\.(mp3|m4a)$/, '')

    files[normalized] = r(key)
  })

  return files
}

export const audioAr = importAll(
  require.context('@/assets/audios/ar', false, /\.(mp3|m4a)$/),
)

export const audioEn = importAll(
  require.context('@/assets/audios/en', false, /\.(mp3|m4a)$/),
)

export const getAudio = (lang: string) => (lang === 'ar' ? audioAr : audioEn)
