type ComponentProps = {
  iconName: string
  className?: string
  fill?: string
  onClick?: () => void
}

export const MaterialSymbolsIcon = ({
  iconName,
  className,
  fill,
  onClick,
}: ComponentProps) => {
  return (
    <i
      className={`${
        className ? className : ''
      } material-symbols-rounded material-icon hover:cursor-pointer ${
        fill ? 'fill' : ''
      }`}
      onClick={onClick}
    >
      {iconName}
    </i>
  )
}
