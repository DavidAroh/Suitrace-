import './SidebarOption.css'

function SidebarOption({ text, Icon, active, onClick }) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`} onClick={onClick}>
      <div className="sidebarOption__container">
        <Icon className="sidebarOption__icon" />
        <h2 className="sidebarOption__text">{text}</h2>
      </div>
    </div>
  )
}

export default SidebarOption