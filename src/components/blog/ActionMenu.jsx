import edit from '../../assets/icons/edit.svg'
import deleteIcon from '../../assets/icons/delete.svg'
const ActionMenu = () => {
 
  return (
    <div className="action-modal-container">
          <button className="action-menu-item hover:text-lwsGreen">
            <img src={edit}alt="Edit" />
            Edit
          </button>
          <button className="action-menu-item hover:text-red-500">
            <img src={deleteIcon} alt="Delete" />
            Delete
          </button>
        </div>
  )
}

export default ActionMenu