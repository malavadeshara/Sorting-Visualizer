import './App.css'
import React from 'react'
import SortingVisualizer from './Components/SortingVisualizer'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className='w-full h-full outer bg-[#f8fafc] flex items-center justify-center flex-col'>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            zIndex: 9999,
            fontSize: '1rem',
            padding: '10px',
            fontWeight: '600',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease-in-out',
          },
        }}
      />
        <SortingVisualizer />
    </div>
  )
}

export default App
