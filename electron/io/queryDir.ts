import { homedir } from 'node:os'
import { readdir } from 'node:fs/promises'

const queryDir = async (_evt, maxLen: number) => {
  const res = await readdir(homedir())

  return res.slice(0, maxLen)
}

export { queryDir }
