import React from 'react'

import { Container } from 'react-bootstrap';


const Header = () => {

  return (

    <Container
      className="App"
    >

      <h1
        className='headingOfProject'
        data-testid = "heading"
      >
        Admin UI
      </h1>

    </Container>
  )
}

export default Header