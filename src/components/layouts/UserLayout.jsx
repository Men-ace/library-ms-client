import React from 'react'
import { Header } from './Header'
import Footer   from './Footer'
import { Outlet } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

const UserLayout = () => {
  return (
    <div>
      {/* navbar */}
        <Header />


    <Container fluid>
      <Row>
        <Col xs={2} md={3} xl={2}className='bg-dark text-white'>
            <div className="p3"></div>
        </Col>

        <Col xs={10} md={9}  xl={10}>
          {/* main body */}
              <main className='main'>
                  <Outlet/>
              </main>
      </Col>

      </Row>
    </Container>





    {/* footer */}
        <Footer />
      
        
    </div>
  )
}

export default UserLayout
