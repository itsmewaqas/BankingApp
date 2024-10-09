import { useState, useEffect, useMemo } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { SimpleButton, OutlineButton, FilledButton, ModeViewButton } from '../sharedComponents/ButtonComponents';
import filterIcon from '../assets/images/filterIcon.svg';
import gridIcon from '../assets/images/gridIcon.svg';
import tabularViewIcon from '../assets/images/tabularViewIcon.svg';
import createIcon from '../assets/images/createIcon.svg';
import { GridView, TableView } from '../sharedComponents/ChannelCard';

import { useNavigate } from "react-router-dom";

function Channels(props) {

  let navigate = useNavigate();

  const [modeCtrl, setModeCtrl] = useState(false);

  const channelData = [
    {
      id: 1,
      title: 'Faysal Omni',
      channelCount: 84,
      subtitle: 'Omni Channel',
      date: '24 Dec 2024',
      user: ['A', 'B', 'C']
    },
    {
      id: 2,
      title: 'UBL Omni',
      channelCount: 74,
      subtitle: 'Omni Channel2',
      date: '23 Dec 2024',
      user: ['A', 'B']
    },
    {
      id: 3,
      title: 'MCB Omni',
      channelCount: 54,
      subtitle: 'Omni Channel3',
      date: '1 Dec 2024',
      user: ['A', 'B', 'C']
    },
    {
      id: 4,
      title: 'HBL Omni',
      channelCount: 44,
      subtitle: 'Omni Channel4',
      date: '03 Dec 2024',
      user: ['A', 'B']
    },
    {
      id: 5,
      title: 'JS Omni',
      channelCount: 74,
      subtitle: 'Omni Channel5',
      date: '03 Dec 2024',
      user: ['A', 'B', 'C']
    },
    {
      id: 6,
      title: 'Meezan Omni',
      channelCount: 94,
      subtitle: 'Omni Channel6',
      date: '15 Dec 2024',
      user: ['A', 'B']
    },
    {
      id: 7,
      title: 'Sindh Omni',
      channelCount: 64,
      subtitle: 'Omni Channel7',
      date: '18 Dec 2024',
      user: ['A', 'B', 'C']
    },
    {
      id: 8,
      title: 'SCB Omni',
      channelCount: 84,
      subtitle: 'Omni Channel8',
      date: '19 Dec 2024',
      user: ['A', 'B']
    },
    {
      id: 9,
      title: 'Silk Omni',
      channelCount: 34,
      subtitle: 'Omni Channel9',
      date: '23 Dec 2024',
      user: ['A', 'B', 'C']
    },
    {
      id: 10,
      title: 'Summit Omni',
      channelCount: 33,
      subtitle: 'Omni Channel10',
      date: '24 Dec 2024',
      user: ['A', 'B']
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
            <h1>My Channels</h1>
          </Col>
          <Col md={6}>
            <FilledButton
              buttonText="Create Channel"
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
          dataSet={channelData.length === 0 ? [] : channelData}
          boxClick={(item) => console.log('box click', item)}
          editFunc={(item, e) => edit(item, e)}
          deleteFunc={(item, e) => remove(item, e)}
          infoFunc={(item, e) => info(item, e)}
        />
        :
        <TableView
          dataSet={channelData.length === 0 ? [] : channelData}
          boxClick={(item) => console.log('box click', item)}
          editFunc={(item, e) => edit(item, e)}
          deleteFunc={(item, e) => remove(item, e)}
          infoFunc={(item, e) => info(item, e)}
        />
      }
    </div>
  )
}

export default Channels;
