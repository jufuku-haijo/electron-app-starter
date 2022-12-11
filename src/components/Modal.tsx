import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  open: boolean
  onClose: () => void
  children: ReactNode
}

const Modal = (props: ModalProps) => {
  return props.open
    ? createPortal(
        <div
          style={{
            width: 400,
            height: 200,
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#404040',
            color: 'red',
          }}
        >
          <span onClick={props.onClose}>Close X</span>
          {props.children}
        </div>,
        document.getElementById('root')!
      )
    : null
}

export { Modal }
