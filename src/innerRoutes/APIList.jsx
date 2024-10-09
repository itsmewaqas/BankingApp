import { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

function APIList(props) {

  useEffect(() => {
  }, [])

  return (
    <div>
      <Container fluid className='px-1'>
        <Row>
          <Col md={12}>
            <h1>API List</h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default APIList;
