import './LinkButton.sass'

interface ILinkButton {
  classname: string
  icon: JSX.Element
  title: string
}

const LinkButton = ({classname, icon, title}: ILinkButton) => {
  return (
    <a className={classname} href=''>
      {icon}
      {title}
    </a>
  )
}

export default LinkButton
