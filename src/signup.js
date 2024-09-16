// import React, {useState} from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import {  createUserWithEmailAndPassword  } from 'firebase/auth';
// import { auth } from './firebase';
 
// const Signup = () => {
//     const navigate = useNavigate();
 
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('');
 
//     const onSubmit = async (e) => {
//       e.preventDefault()
     
//       await createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             console.log(user);
//             navigate("/login")
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode, errorMessage);
//             // ..
//         });
 
   
//     }
 
//   return (
//     <main >        
//         <section>
//             <div>
//                 <div>                  
//                     <h1> FocusApp </h1>                                                                            
//                     <form>                                                                                            
//                         <div>
//                             <label htmlFor="email-address">
//                                 Email address
//                             </label>
//                             <input
//                                 type="email"
//                                 label="Email address"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}  
//                                 required                                    
//                                 placeholder="Email address"                                
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="password">
//                                 Password
//                             </label>
//                             <input
//                                 type="password"
//                                 label="Create password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)} 
//                                 required                                 
//                                 placeholder="Password"              
//                             />
//                         </div>                                             
                        
//                         <button
//                             type="submit" 
//                             onClick={onSubmit}                        
//                         >  
//                             Sign up                                
//                         </button>
                                                                     
//                     </form>
                   
//                     <p>
//                         Already have an account?{' '}
//                         <NavLink to="/login" >
//                             Sign in
//                         </NavLink>
//                     </p>                   
//                 </div>
//             </div>
//         </section>
//     </main>
//   )
// }
 
// export default Signup

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {  auth, db } from './firebase';
import {doc, setDoc, updateDoc} from 'firebase/firestore'
import styled from 'styled-components';
import { useAuth } from './AuthContext';

// Define your color palette
const colors = {
  primary: '#4070f4',
  text: '#1a202c',
  background: '#f0f2f5',
  buttonHover: '#365abf',
};

// Styled components
const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${colors.background};
`;

const Section = styled.section`
  padding: 20px;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const Title = styled.h1`
  font-size: 2em;
  color: ${colors.text};
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  color: ${colors.text};
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${colors.buttonHover};
  }
`;

const Text = styled.p`
  color: ${colors.text};
  text-align: center;
  margin-top: 20px;
`;

const StyledNavLink = styled(NavLink)`
  color: ${colors.primary};
`;

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} = useAuth();

  
  

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        
        console.log(user);
        setUser(user)
        navigate('/preferences');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <Main>
      <Section>
        <Title>SignUp</Title>
        <Form onSubmit={onSubmit}>
            <Label htmlFor="email-address">Email address</Label>
            <Input
              type="email"
              id="email-address"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />


            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          <Button type="submit">Sign up</Button>
        </Form>

        <Text>
          Already have an account? <StyledNavLink to="/login">Sign in</StyledNavLink>
        </Text>
      </Section>
    </Main>
  );
};

export default Signup;
