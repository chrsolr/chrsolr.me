import React, { useContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ThemeContextProvider from './contexts/ThemeContextProvider'
import TopBar from './shared/components/TopBar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import NoMatch from './pages/NoMatch'
import Sidebar from './shared/components/Sidebar'
import { LayoutContext } from './contexts/LayoutContextProvider'

function NavigationLayout() {
  const { isMenuOpen, toggleMenu } = useContext(LayoutContext)
  return (
    <>
      <TopBar headerTitle={['chr', 'solr', '.io']} onMenuClick={toggleMenu} />
      <Sidebar isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  )
}

function App() {
  const { theme } = useContext(LayoutContext)

  return (
    <ThemeContextProvider theme={theme}>
      <Routes>
        <Route path="/" element={<NavigationLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Route>
      </Routes>
    </ThemeContextProvider>
  )
}

export default App
