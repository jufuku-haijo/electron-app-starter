import { resolve } from 'node:path'

const queryPath = async () => {
  return resolve(__dirname, '.')
}

export { queryPath }
