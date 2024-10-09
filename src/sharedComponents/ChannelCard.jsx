import React, { useState } from 'react';
import cbi from '../assets/images/channelCardButtonIcon.svg';
import { BiPencil, BiTrashAlt, BiInfoCircle } from "react-icons/bi";

const colorList = ['#F1F3C2', '#F7B5CA', '#D1E9F6', '#FAEDCE', '#BB9AB1', '#FFD0D0', '#C8CFA0', '#D8EFD3', '#F3D0D7', '#E1AFD1'];
const getRandomColor = () => colorList[Math.floor(Math.random() * colorList.length)];

const GridView = ({ dataSet, boxClick, editFunc, deleteFunc, infoFunc }) => {

    const [menuCtrl, setMenuCtrl] = useState(null);
    const menuClick = (e, index) => {
        e.stopPropagation();
        setMenuCtrl(prevMenuCtrl => (index === prevMenuCtrl ? null : index));
        console.log('menu click');
    };

    return (
        <div className='channelGridContainer'>
            {dataSet.length > 0 ? (
                dataSet.map((item, index) => {
                    return (
                        <a key={index.toString()} className='channelGridBox' onClick={() => boxClick(item)}>
                            <h3>{item.title}</h3>
                            <h4>Total Workflows <span>{item.channelCount}</span></h4>
                            <p>{item.subtitle} <span>Last Updated: <i>{item.date}</i></span></p>
                            <ul>
                                {item.user.map((subItem, subIndex) => {
                                    const randomColor = getRandomColor();
                                    return (
                                        <li key={subIndex.toString()} style={{ backgroundColor: randomColor }}>
                                            {subItem}
                                        </li>
                                    );
                                })}
                            </ul>
                            <button onClick={(e) => menuClick(e, index)}><img src={cbi} alt="" /></button>
                            {menuCtrl === index &&
                                <div className='channelCardMenu'>
                                    <a onClick={(e) => editFunc(item, e)}><BiPencil /> Edit Configration</a>
                                    <a onClick={(e) => deleteFunc(item, e)}><BiTrashAlt /> Delete</a>
                                    <a onClick={(e) => infoFunc(item, e)}><BiInfoCircle />Details Info</a>
                                </div>}
                        </a>
                    );
                })
            ) : (
                'data not found'
            )}

        </div>
    );
};

const TableView = ({ dataSet, boxClick, editFunc, deleteFunc, infoFunc }) => {

    const [menuCtrl, setMenuCtrl] = useState(null);
    const menuClick = (e, index) => {
        e.stopPropagation();
        setMenuCtrl(prevMenuCtrl => (index === prevMenuCtrl ? null : index));
        console.log('menu click');
    };

    return (
        <div className='channelTableContainer'>
            <div className='channelTableRow'>
                <div>Channels</div>
                <div>Workflow</div>
                <div>Created</div>
                <div>Last Modified</div>
            </div>
            {dataSet.length > 0 ? (
                dataSet.map((item, index) => {
                    return (
                        <a key={index.toString()} className='channelTableBox' onClick={() => boxClick(item)}>
                            <h3><span>{item.channelCount}</span>{item.title}</h3>
                            <h4>{item.subtitle}</h4>
                            <h5>{item.date}</h5>
                            <h6>
                                {item.user.slice(0, 1).map((subItem, index) => {
                                    const randomColor = getRandomColor();
                                    return (
                                        <span key={index.toString()} style={{ backgroundColor: randomColor }}>{subItem}</span>
                                    )
                                })}
                                Last Updated:
                            </h6>
                            <button onClick={(e) => menuClick(e, index)}><img src={cbi} alt="" /></button>
                            {menuCtrl === index &&
                                <div className='channelCardMenu2'>
                                    <a onClick={(e) => editFunc(item, e)}><BiPencil /> Edit Configration</a>
                                    <a onClick={(e) => deleteFunc(item, e)}><BiTrashAlt /> Delete</a>
                                    <a onClick={(e) => infoFunc(item, e)}><BiInfoCircle />Details Info</a>
                                </div>}
                        </a>
                    );
                })
            ) : (
                'data not found'
            )
            }
        </div>
    );
};


export { GridView, TableView };