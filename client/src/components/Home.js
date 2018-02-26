import React, { Component } from 'react'
import { SplashImage } from './styled-components/Images'
import { SplashContainer, LoginContainer } from './styled-components/Containers'

class Home extends Component {
    render () {
        return (
            <div>
                <div>Hello from Home</div>
                {/* <SplashImage src="https://i.imgur.com/zIMBOmk.jpg" alt="cappstone coffee splash"/> */}
                <SplashContainer>
                    <LoginContainer>
                        <form action="">
                            <input name="email" type="text"/>
                            <input name="password" type="text"/>
                            <br/>
                            <button>Sign Up</button>
                            <input type="submit" value="Log In"/>
                        </form>
                    </LoginContainer>
                </SplashContainer>
            </div>
        )
    }
}
export default Home