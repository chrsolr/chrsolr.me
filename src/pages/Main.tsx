const Main = () => {
  return <>Hey from West-Main, Let's go!</>
}

export default Main

// import { ReactNode, useContext } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Layout from '../components/Layout'
// import LayoutContext from '../contexts/LayoutContext'
// import Sidebar from '../components/Sidebar'
// import About from './About'
// import Base64ToPfx from './Base64ToPfx'
// import Encryptions from './Encryptions'
// import Home from './Home'
// import PfxToBase64 from './PfxToBase64'
// import OneDotZeroLogin from './OneDotZeroLogin'
// import LSAccounts from './LsAccounts'
//
// function Page({ children }: { children: ReactNode }) {
//   return <div className="h-screen w-screen">{children}</div>
// }
//
// function MainContent({ children }: { children: ReactNode }) {
//   return (
//     <div className="flex flex-col flex-grow ml-60 h-full">
//       <main className="flex flex-col w-full overflow-y-scroll h-screen">
//         {children}
//       </main>
//     </div>
//   )
// }
//
// function NavigationLayout({ children }: { children: ReactNode }) {
//   return (
//     <Page>
//       <Sidebar />
//       <MainContent>{children}</MainContent>
//     </Page>
//   )
// }
//
// export default function App() {
//   const { theme, setTheme } = useContext(LayoutContext)
//
//   function handleChangeTheme(theme: 'dark' | 'light') {
//     const [html] = document.getElementsByTagName('html')
//     html.removeAttribute('class')
//     html.classList.add(theme)
//     setTheme(theme)
//   }
//
//   window.theme.toggleTheme(() => {
//     const toggledTheme = theme === 'light' ? 'dark' : 'light'
//     handleChangeTheme(toggledTheme)
//   })
//
//   handleChangeTheme(theme)
//
//   return (
//     <NavigationLayout>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/main_window" element={<Home />} />
//           <Route path="/onedotzero/login" element={<OneDotZeroLogin />} />
//           <Route path="/onedotzero/lsaccounts" element={<LSAccounts />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/tools/encryptions" element={<Encryptions />} />
//           <Route path="/tools/pfx-to-base64" element={<PfxToBase64 />} />
//           <Route path="/tools/base64-to-pfx" element={<Base64ToPfx />} />
//         </Route>
//       </Routes>
//     </NavigationLayout>
//   )
// }
