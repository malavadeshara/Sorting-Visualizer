import './App.css'
import React from 'react'
import SortingVisualizer from './Components/SortingVisualizer'
import SortingAlgorithmInfo from './Components/SortingAlgorithmInfo'

function App() {

  return (
    <div className='w-full h-full bg-[#f8fafc] flex item-center justify-center flex-col'>
      <SortingVisualizer />
      <SortingAlgorithmInfo />
    </div>
  )
}

export default App
