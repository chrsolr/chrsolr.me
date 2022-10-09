import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import ThemeContextProvider from './contexts/ThemeContextProvider'
import TopBar from './shared/components/TopBar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import NoMatch from './pages/NoMatch'
import Sidebar from './shared/components/Sidebar'
import { LayoutContext } from './contexts/LayoutContextProvider'
import BlogDetails from './pages/BlogDetails'
import Resume from './pages/Resume'
import WorkInProgress from './pages/wip'

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
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="work-in-progress" element={<WorkInProgress />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogDetails />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </ThemeContextProvider>
  )
}

export default App
