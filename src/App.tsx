import { useEffect, useState } from 'react'
import styles from 'styles/app.module.scss'
import { Modal } from './components/Modal'


const DirView = () => {
  const [content, setContent] = useState<string[]>([])

  useEffect(() => {
    window.electronAPI
          .queryDir(Math.floor(Math.random() * 10))
          .then(res => setContent(res))
  }, [])

  return (
    content.length === 0 ?  null : <p style={{overflow: 'scroll'}}>{content}</p> 
  )
}



const App: React.FC = () => {
  const [count, setCount] = useState(0)
  const [open, setOpen] = useState(false)

  const queryPath = () => {
    window.electronAPI.queryPath().then(console.log)
  }

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <div className={styles.logos}>
          <div className={styles.imgBox}>
            <img
              src='./electron.png'
              style={{ height: '24vw' }}
              className={styles.appLogo}
              alt="electron"
            />
          </div>
          <div className={styles.imgBox}>
            <img
              src='./vite.svg'
              style={{ height: '19vw' }}
              alt="vite"
            />
          </div>
          <div className={styles.imgBox}>
            <img
              src='./react.svg'
              style={{ maxWidth: '100%' }}
              className={styles.appLogo}
              alt="logo"
            />
          </div>
        </div>
        <p>Hello Electron + Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <button onClick={queryPath}>view path</button>
        </p>
        <p>
          <button onClick={() => setOpen(true)}>view home directory</button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <DirView />
          </Modal>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <div>
          <a
            className={styles.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className={styles.appLink}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          <div className={styles.staticPublic}>
            Place static files into the{' '}
            <code>/public</code> folder
            <img style={{ width: 77 }} src="./node.png" />
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
