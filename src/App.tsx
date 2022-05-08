import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ThemeContextProvider from './providers/ThemeContextProvider'
import TopBar from './shared/components/TopBar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import NoMatch from './pages/NoMatch'

function App() {
  return (
    <ThemeContextProvider theme={'light'}>
      {/* <TopBar headerTitle={['chr', 'solr', '.io']} /> */}
      <Routes>
        <Route
          path="/"
          element={<TopBar headerTitle={['chr', 'solr', '.io']} />}
        >
          <Route index element={<Home />}></Route>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Route>
      </Routes>
    </ThemeContextProvider>
  )
}

export default App
