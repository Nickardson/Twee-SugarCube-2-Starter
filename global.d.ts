/* eslint-disable no-unused-vars */

/**
 * Namespace for all things exported from the "lib" folder.
 */
declare const lib: typeof import('./lib/index')

/*
 * NodeJS
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const global: NodeJS.Global & Record<string, any>
