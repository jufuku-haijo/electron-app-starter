
/**
 * This is essential to make your renderer files
 * got intellisense.
 */
export interface ElectronAPI {
    queryPath: () => Promise<string>,
    queryDir: (maxLen: number) => Promise<string[]>
}
  
declare global {
    interface Window {
        electronAPI: ElectronAPI
    }
}