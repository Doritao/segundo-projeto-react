import react from 'react'
import {Button as ButtonComponent} from './styled'


function Button({children,...props}) { 
    return( <ButtonComponent {...props}>{children}</ButtonComponent>)
}

export default Button