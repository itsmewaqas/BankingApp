import { Outlet } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { SimpleButton, OutlineButton, FilledButton, ModeViewButton } from '../sharedComponents/ButtonComponents';
import filterIcon from '../assets/images/filterIcon.svg';
import gridIcon from '../assets/images/gridIcon.svg';
import tabularViewIcon from '../assets/images/tabularViewIcon.svg';
import createIcon from '../assets/images/createIcon.svg';
import { GridView, TableView } from '../sharedComponents/FlowCard';
import { useNavigate } from "react-router-dom";

function WorkflowProcesses() {

  let navigate = useNavigate();

  const [modeCtrl, setModeCtrl] = useState(false);

  const workFlowData = [
    {
      id: 1,
      title: 'Faysal Omni',
      fimg:require('../assets/images/workflowLarg.png'),
      name: 'Alber',
      lastModified: 'Edited 1 days ago',
    },
    {
      id: 2,
      title: 'UBL Omni',
      fimg:require('../assets/images/workflowLarg.png'),
      name: 'Waqas',
      lastModified: 'Edited 2 days ago',
    },
    {
      id: 3,
      title: 'MCB Omni',
      fimg:require('../assets/images/workflowLarg.png'),
      name: 'junaid',
      lastModified: 'Edited 3 days ago',
    },
    {
      id: 4,
      title: 'HBL Omni',
      fimg:require('../assets/images/workflowLarg.png'),
      name: 'Waseem',
      lastModified: 'Edited 5 days ago',
    },
    {
      id: 5,
      title: 'JS Omni',
      fimg:require('../assets/images/workflowLarg.png'),
      name: 'Qasid',
      lastModified: 'Edited 2 days ago',
    },
    {
      id: 6,
      title: 'Meezan Omni',
      fimg:require('../assets/images/workflowLarg.png'),
      name: 'Rija',
      lastModified: 'Edited 4 days ago',
    },
    {
      id: 7,
      title: 'Sindh Omni',
      fimg:require('../assets/images/workflowLarg.png'),
      name: 'Zeeshan',
      lastModified: 'Edited 3 days ago',
    },
    {
      id: 8,
      title: 'SCB Omni',
      fimg:require('../assets/images/workflowLarg.png'),
      name: 'Fahad',
      lastModified: 'Edited 7 days ago',
    },
    {
      id: 9,
      title: 'Silk Omni',
      fimg:require('../assets/images/workflowLarg.png'),
      name: 'Ali',
      lastModified: 'Edited 2 days ago',
    },
    {
      id: 10,
      title: 'Summit Omni',
      fimg:require('../assets/images/workflowLarg.png'),
      name: 'Wajid',
      lastModified: 'Edited 3 days ago',
    }
  ]

  const edit = (item, e) => {
    e.stopPropagation();
    console.log('Edit clicked for:', item);
  };

  const remove = (item, e) => {
    e.stopPropagation();
    console.log('remove clicked for:', item);
  };

  const info = (item, e) => {
    e.stopPropagation();
    console.log('info clicked for:', item);
  };

  useEffect(() => {
  }, [])

  return (
    <div>
      <Container fluid className='px-1'>
        <Row>
          <Col md={6}>
            <h1>My Workflows</h1>
          </Col>
          <Col md={6}>
            <FilledButton
              buttonText="Create Workflow"
              buttonClick={() => console.log('tets')}
              disabled={false}
              buttonIcon={createIcon}
            />
          </Col>
          <Col md={6}>
            <h2>Recent Updated</h2>
          </Col>
          <Col md={6}>
            <ModeViewButton
              buttonClick={() => setModeCtrl(false)}
              disabled={false}
              activStyle={modeCtrl == false ? "#fff" : ""}
              buttonIcon={gridIcon}
            />
            <ModeViewButton
              buttonClick={() => setModeCtrl(true)}
              disabled={false}
              activStyle={modeCtrl === true ? "#fff" : ""}
              buttonIcon={tabularViewIcon}
            />
            <SimpleButton
              buttonText="Filters"
              buttonClick={() => console.log('click')}
              disabled={false}
              buttonIcon={filterIcon}
            />
          </Col>
        </Row>
      </Container>
      {modeCtrl == false ?
        <GridView
          dataSet={workFlowData.length === 0 ? [] : workFlowData}
          boxClick={(item) => navigate('/WorkflowEnviroment', item)}
          editFunc={(item, e) => edit(item, e)}
          deleteFunc={(item, e) => remove(item, e)}
          infoFunc={(item, e) => info(item, e)}
        />
        :
        <TableView
          dataSet={workFlowData.length === 0 ? [] : workFlowData}
          boxClick={(item) => navigate('/WorkflowEnviroment', item)}
          editFunc={(item, e) => edit(item, e)}
          deleteFunc={(item, e) => remove(item, e)}
          infoFunc={(item, e) => info(item, e)}
        />
      }
    </div>
  );
}

export default WorkflowProcesses;