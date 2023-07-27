import react from 'react'
import {Button as ButtonComponent} from './styled'


function Button({onClick,children,isBlack}) { 
    return( <ButtonComponent onClick={onClick} isBlack={isBlack}>{children}</ButtonComponent>)
}

export default Button