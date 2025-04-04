import React from 'react'
import { Header } from './Header'
import Footer   from './Footer'
import { Outlet } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { Sidebar } from './SideBar'
import { AuthRoute } from '../auth/AuthRoute'


const UserLayout = () => {
  return (
   <AuthRoute>
      {/* navbar */}
        <Header />


    <Container fluid>
      <Row>
        <Col xs={2} md={3} xl={2}className='bg-dark text-white'>
            <div className="p3">
              <div>welcome back</div>
              <h4>shailesh</h4>
            </div>
            <hr />
            <Sidebar />


        </Col>
        import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Sidebar } from "./Sidebar";
import { AuthRoute } from "../auth/AuthRoute";

export const UserLayout = () => {
  return (
    <AuthRoute>
      {/* navbar  */}
      <Header />

      <div className="d-flex">
        <div className="bg-dark text-white p-3 " style={{ width: "200px" }}>
          <div className="p-3">
            <div>Welcome Back</div>
            <h4>Shailesh Gharti</h4>
          </div>
          <hr />
          <Sidebar />
        </div>

        {/* main body  */}
        <main className="user-main">
          <Outlet />
        </main>
      </div>

      {/* Footer  */}
      <Footer />
    </AuthRoute>
  );
};

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
        
   </AuthRoute>
  )
}

export default UserLayout
