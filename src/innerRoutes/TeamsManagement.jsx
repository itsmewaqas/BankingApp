import { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

function TeamsManagement(props) {

  useEffect(() => {
  }, [])

  return (
    <div>
      <Container fluid className='px-1'>
        <Row>
          <Col md={12}>
            <nav class="breadcrumb">
              <ul>
                <li><a href="/">Teams Management</a></li>
              </ul>
            </nav>
            {/* <nav class="breadcrumb">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/category">Category</a></li>
                <li><a href="/category/subcategory">Subcategory</a></li>
                <li aria-current="page">Current Page</li>
              </ul>
            </nav> */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TeamsManagement;
