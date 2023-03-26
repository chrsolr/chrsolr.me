type ComponentProps = {
  isOpen: boolean
  onClose: () => void
}

function getOpenClassName(isOpen: boolean): string {
  return isOpen ? 'open' : ''
}

export const SideBar = function ({ isOpen, onClose }: ComponentProps) {
  return (
    <div
      className={`
        sidebar-wrapper
        fixed top-0 bottom-0
        -right-full z-30 flex
        w-full flex-col items-center
      bg-primary-light p-4
      text-primary-dark
      dark:bg-primary-dark
      dark:text-primary-light
        md:-right-1/2
        md:w-1/2
        xl:-right-1/4
        xl:w-1/4
        ${getOpenClassName(isOpen)}`}
    >
      SIDEBAR
    </div>
  )
}
