import React from "react";
import { Link } from 'react-router-dom';
import styled, { keyframes } from "styled-components";


const fadeInDown = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(-60px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}
`;

const Styles = styled.div`
  header {
    min-height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    color: #696a6a;
  }

  header h1,
  .links {
    font-weight: lighter;
    animation: ${fadeInDown} 500ms ease-in-out;
  }

  nav {
    margin-top: .5em;
  }

  .links {
    font-weight: normal;
    text-decoration: none;
    color: #696a6a;
    margin: 0 1em;
  }

  .links:hover {
    color: #62cb31;
  }
`;

export const Home = () => (
  <Styles>
    <div>
      <header>
        <h1>Welcome to Freight Mule</h1>
          <nav>
            <Link className="links" to="../login">Login</Link>
            <Link className="links" to="../signup">Signup</Link>
          </nav>
      </header>
    </div>
  </Styles>
)
