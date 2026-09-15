import { useState } from 'react'
import Invitation from './components/Invitations'

function App() {
  const [opened, setOpened] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-900 flex justify-center items-center">
      <Invitation />
    </div>
  )
}

export default App