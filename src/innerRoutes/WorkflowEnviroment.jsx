import { useState, useEffect, useRef } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import React, { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import c1 from '../assets/images/c1.svg';
import c2 from '../assets/images/c2.svg';
import c3 from '../assets/images/c3.svg';
import c4 from '../assets/images/c4.svg';
import WorkflowEnviromentServices from '../sharedComponents/WorkflowEnviromentServices';
import save from '../assets/images/save.svg';
import notes from '../assets/images/notes.svg';
import settings from '../assets/images/settings.svg';
import more from '../assets/images/more.svg';

function WorkflowEnviroment(props) {

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectItem, setSelectItem] = useState(0);
  const [moreMenu, setMoreMenu] = useState(false);

  const workflowMenuData = [
    {
      id: 1,
      title: 'Workflow name 142',
    },
    {
      id: 2,
      title: 'Workflow name 143',
    },
    {
      id: 3,
      title: 'Settings',
    }
  ]

  const menuItems = [
    { icon: save, label: 'Save' },
    { icon: notes, label: 'Notes' },
    { icon: settings, label: 'Settings' },
    { icon: more, label: 'More' },
  ];

  const selectMenu = (index) => {
    if (selectItem === index) {
      setSelectItem(null);
    } else {
      setSelectItem(index);
    }
  }

  const handleClick = (index) => {
    setActiveIndex(index);
    if (index == 3) {
      setMoreMenu(true)
    } else {
      setMoreMenu(null)
    }
  };

  const moreMenuHide = useRef(null)
  const closeMoreMenus = (e) => {
    if (moreMenuHide.current && moreMenu && !moreMenuHide.current.contains(e.target)) {
      setMoreMenu(false)
    }
  }
  document.addEventListener('mousedown', closeMoreMenus);


  const initialNodes = [
    {
      id: 'horizontal-1',
      sourcePosition: 'right',
      type: 'input',
      data: { label: 'Input' },
      position: { x: 0, y: 80 },
    },
    {
      id: 'horizontal-2',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: 'A Node' },
      position: { x: 250, y: 0 },
    },
    {
      id: 'horizontal-3',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: 'Node 3' },
      position: { x: 250, y: 160 },
    },
    {
      id: 'horizontal-4',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: 'Node 4' },
      position: { x: 500, y: 0 },
    },
    {
      id: 'horizontal-5',
      sourcePosition: 'top',
      targetPosition: 'bottom',
      data: { label: 'Node 5' },
      position: { x: 500, y: 100 },
    },
    {
      id: 'horizontal-6',
      sourcePosition: 'bottom',
      targetPosition: 'top',
      data: { label: 'Node 6' },
      position: { x: 500, y: 230 },
    },
    {
      id: 'horizontal-7',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: 'Node 7' },
      position: { x: 750, y: 50 },
    },
    {
      id: 'horizontal-8',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: 'Node 8' },
      position: { x: 750, y: 300 },
    },
  ];

  const initialEdges = [
    {
      id: 'horizontal-e1-2',
      source: 'horizontal-1',
      type: 'smoothstep',
      target: 'horizontal-2',
      animated: true,
    },
    {
      id: 'horizontal-e1-3',
      source: 'horizontal-1',
      type: 'smoothstep',
      target: 'horizontal-3',
      animated: true,
    },
    {
      id: 'horizontal-e1-4',
      source: 'horizontal-2',
      type: 'smoothstep',
      target: 'horizontal-4',
      label: 'edge label',
    },
    {
      id: 'horizontal-e3-5',
      source: 'horizontal-3',
      type: 'smoothstep',
      target: 'horizontal-5',
      animated: true,
    },
    {
      id: 'horizontal-e3-6',
      source: 'horizontal-3',
      type: 'smoothstep',
      target: 'horizontal-6',
      animated: true,
    },
    {
      id: 'horizontal-e5-7',
      source: 'horizontal-5',
      type: 'smoothstep',
      target: 'horizontal-7',
      animated: true,
    },
    {
      id: 'horizontal-e6-8',
      source: 'horizontal-6',
      type: 'smoothstep',
      target: 'horizontal-8',
      animated: true,
    },
  ];

  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    [],
  );

  useEffect(() => {
  }, [])

  return (
    <div>
      <div className='enviromentNavBar'>
        <ul>
          {workflowMenuData.map((item, index) => {
            return (
              <li key={index.toString()}>
                <a className={selectItem === index ? 'active' : ''} onClick={() => selectMenu(index)}><i></i> {item.title}</a>
              </li>)
          })}
        </ul>
      </div>
      <WorkflowEnviromentServices />
      <nav class="breadcrumb">
        <ul>
          <li><a href="/#/WorkflowProcesses">My Workflows</a></li>
          <li><a aria-current="page">Workflow Enviroment</a></li>
        </ul>
      </nav>
      <Container fluid className='px-1'>
        <Row>
          <Col md={12}>
            <div style={{ height: '600px' }}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                attributionPosition="top-left"
              ></ReactFlow>
            </div>
          </Col>
        </Row>
      </Container>

      <div className='envBottomMenu'>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index.toString()}>
              <a className={activeIndex === index ? 'active' : ''} onClick={() => handleClick(index)}>
                <img src={item.icon} alt="" /><span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {moreMenu && <dir className='moreMenu' ref={moreMenuHide}>
        <ul>
          <li><a><img src={c1} alt='' /><p>Team management<span>Manage Team members</span></p></a></li>
          <li><a><img src={c2} alt='' /><p>API Configuration<span>Edit or update APIs Request</span></p></a></li>
          <li><a><img src={c3} alt='' /><p>Schedule Process<span>Schedule Cron Jobs</span></p></a></li>
          <li><a><img src={c4} alt='' /><p>Share Workflow<span>Share workflow to anyone</span></p></a></li>
        </ul>
      </dir>}
    </div>
  )
}

export default WorkflowEnviroment;
