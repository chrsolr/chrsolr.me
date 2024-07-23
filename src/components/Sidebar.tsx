import { useRef } from 'react'

export default function ({
  show = false,
  onMenuItemClick,
}: { show: boolean; onMenuItemClick: (url: string) => void }) {
  const homeRef = useRef(null)
  const toolsRef = useRef(null)

  // const handleKeyDown = (event) => {
  //     if (event.key === 'Tab') {
  //       event.preventDefault(); // Prevent default tab behavior
  //
  //       // Find the next tabindex element and focus it
  //       if (document.activeElement === inputRef1.current) {
  //         inputRef2.current.focus();
  //       } else if (document.activeElement === inputRef2.current) {
  //         inputRef3.current.focus();
  //       } else if (document.activeElement === inputRef3.current) {
  //         inputRef1.current.focus(); // Loop back to the first element
  //       }
  //     }

  if (show) {
    return (
      <article className="flex flex-col min-h-screen bg-slate-700 max-w-72 p-4">
        <ul>
          <li
            ref={homeRef}
            tabIndex="1"
            onClick={() => onMenuItemClick('/home')}>
            home
          </li>
          <li
            ref={toolsRef}
            tabIndex="2"
            onClick={() => onMenuItemClick('/tools')}>
            tools
          </li>
          <li tabIndex="3" onClick={() => onMenuItemClick('/blog')}>
            blog
          </li>
          <li tabIndex="4" onClick={() => onMenuItemClick('/resume')}>
            resume
          </li>
        </ul>
      </article>
    )
  }
}
