import react from 'react'
import {Button as ButtonComponent} from './styled'


function Button({children,...props}) { 
    return( <ButtonComponent onClick={onClick} isBlack={isBlack}>{children}</ButtonComponent>)
}

export default Button