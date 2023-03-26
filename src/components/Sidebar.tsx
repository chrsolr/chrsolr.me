import { MaterialSymbolsIcon } from './MaterialSymbolsIcon'
import { Typography } from './Typography'

type ComponentProps = {
  isOpen: boolean
  onClose: () => void
}

function getOpenClassName(isOpen: boolean): string {
  return isOpen ? 'open' : ''
}

const SideBarLink = function ({}) {
  return <></>
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
      <div className="flex h-[6.25rem] items-center justify-center">
        <MaterialSymbolsIcon
          className="!text-4xl"
          iconName="close"
          onClick={onClose}
        />
      </div>

      <Typography size="3xl" className="lowercase">
        Navigation
      </Typography>

      <div className="my-4 h-1.5 min-w-[1rem] overflow-hidden rounded-full bg-accent" />
    </div>
  )
}
