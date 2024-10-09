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
            <h1>Teams Management</h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TeamsManagement;
