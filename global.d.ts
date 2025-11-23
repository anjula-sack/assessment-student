declare module '*.mp3' {
  const src: string
  export default src
}

declare module '*.m4a' {
  const src: string
  export default src
}

declare module '*.mp4' {
  const src: string
  export default src
}

declare interface NodeRequire {
  context: (
    path: string,
    deep?: boolean,
    filter?: RegExp,
  ) => __WebpackModuleApi.RequireContext
}
