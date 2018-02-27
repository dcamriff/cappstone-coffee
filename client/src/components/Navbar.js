import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PersonIconStyle, CartIconStyle, LogoImage } from './styled-components/Images'
import { Nav } from './styled-components/NavStyle'
import PersonIcon from './styled-components/img/person2.png'
import CartIcon from './styled-components/img/cart.png'

class Navbar extends Component {
    render() {
        return (
            <Nav>
                <Link to="/"><LogoImage src="https://i.imgur.com/Iv70Ed1.png"/></Link>
            
                <div>
                    <Link to="/login">
                    <PersonIconStyle src={PersonIcon} alt="cappstone login"/></Link>
                    
                    <Link to="/login">
                    <CartIconStyle src={CartIcon} alt="cappstone cart"/>
                    </Link>
                </div>
            </Nav>
        )
    }
}

export default Navbar

// CartIcon Credit: <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// PersonIcon Credit: www.pngtree.com