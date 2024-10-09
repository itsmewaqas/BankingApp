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
        <div className='flowGridContainer'>
            {dataSet.length > 0 ? (
                dataSet.map((item, index) => {
                    const randomColor = getRandomColor();
                    return (
                        <a key={index.toString()} className='flowGridBox' onClick={() => boxClick(item)}>
                            <h3>{item.title}</h3>
                            <img src={item.fimg} alt="" />
                            <p>
                                <i style={{ backgroundColor: randomColor }}>{item.name[0]}</i>
                                <span>{item.name} <dd>{item.lastModified}</dd></span>
                            </p>
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
        <div className='flowTableContainer'>
            <div className='channelTableRow'>
                <div>Workflow</div>
                <div>Last Modified</div>
                <div>Created</div>
                <div>Edited By</div>
            </div>
            {dataSet.length > 0 ? (
                dataSet.map((item, index) => {
                    const randomColor = getRandomColor();
                    return (
                        <a key={index.toString()} className='flowTableBox' onClick={() => boxClick(item)}>
                            <h3><img src={item.fimg} alt="" /> {item.title}</h3>
                            <h4>{item.lastModified}</h4>
                            <h4>1 Month ago</h4>
                            <h4><span style={{ backgroundColor: randomColor }}>{item.name[0]}</span>{item.name}</h4>
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