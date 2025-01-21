import React from 'react'
import Header from './components/Header.jsx'
import AppRouter from '../router.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
    // <div className='min-h-screen bg-gray-100'>
    //   <div className='container mx-auto p-4'>
    //       <AppRouter />
    //   </div>
    // </div>

    <div className='flex flex-col min-h-screen bg-gray-900'>
      {/* header */}
      <Header />

      {/* Main Content */}
      <main className='flex-grow container mx-auto p-6 '>
        <AppRouter />
      </main>

      {/* footer */}
      <Footer />

    </div>
  )
}

export default App