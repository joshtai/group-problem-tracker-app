import React, { Fragment, useState } from 'react';
import { Container} from 'react-bootstrap';
import Navbar from '../components/Navbar';
import LoginModal from '../components/LoginModal';


export default (props: any) => {
    const [showLogin, setShowLogin] = useState<boolean>(false);


    return (
        <Container>
            <Navbar onLogin={() => {setShowLogin(true)}} onHome={() => {}} isLoggedIn={false} />
            <LoginModal show= {showLogin} 
                        onClose={() => {setShowLogin(false)}} 
                        onLogin={(user) => { console.log(user.username + " " + user.password); }}
                        onRegister={(user) => {console.log("Register " + JSON.stringify(user));}}></LoginModal>

        </Container>
    )


}