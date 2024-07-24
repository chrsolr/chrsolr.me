import StatusBar from './StatusBar'

export default function NavigationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <StatusBar />
    </>
  )
}
