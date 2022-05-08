import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ThemeContextProvider from './providers/ThemeContextProvider'
import TopBar from './shared/components/TopBar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Error from './pages/Error'

function App() {
  return (
    <ThemeContextProvider theme={'light'}>
      <Router>
        <TopBar headerTitle={['chr', 'solr', '.io']} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </Router>
    </ThemeContextProvider>
  )
}

export default App
