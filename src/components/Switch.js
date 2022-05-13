import { useContext } from "react"
import AuthContext from "../store/auth-context"
import  './Switch.css'

function Switch(){
const switchData = useContext(AuthContext)
return(
    <>
    <label className='switch'>
      <input type="checkbox" 
      onClick={() => switchData.onSwitch(prevState=> !prevState)}
      />
      <span className="switch" />
    </label>
    </>
)
}
export default Switch