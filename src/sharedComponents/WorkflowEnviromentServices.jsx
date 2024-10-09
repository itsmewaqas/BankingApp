import { useState, useEffect, useRef } from 'react';
import seviceIcon from '../assets/images/serviceMenuIcon.svg';
import magnefine from '../assets/images/magnefine.svg';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { BiAlbum, BiBookmark, BiBulb, BiCheckShield, BiChart, BiCoinStack, BiGlobe, BiTerminal, BiCylinder, BiLogoRedux } from "react-icons/bi";

function WorkflowEnviromentServices() {

    const [serClicked, setSerClicked] = useState(false);
    const [serviceMenu, setServiceMenu] = useState(false);
    const [activeItem, setActiveItem] = useState(0);

    const serviceMenuHide = useRef(null)
    const closeServiceMenus = (e) => {
        if (serviceMenuHide.current && serviceMenu && !serviceMenuHide.current.contains(e.target)) {
            setServiceMenu(false)
            setSerClicked(false)
        }
    }
    document.addEventListener('mousedown', closeServiceMenus);

    const showServicMenu = () => {
        setSerClicked(!serClicked);
        setServiceMenu(!serviceMenu);
    }

    const categoryList = [
        {
            id: 1,
            title: 'Category 1',
        },
        {
            id: 2,
            title: 'Category 2',
        },
        {
            id: 3,
            title: 'Category 3',
        },
        {
            id: 4,
            title: 'Category 4',
        }
    ]

    const getCategoryList = ['All', ...new Set(categoryList.map(x => x.title))];

    const selectedMenu = (index) => {
        if (activeItem === index) {
            setActiveItem(null);
        } else {
            setActiveItem(index);
        }
    }

    const serviceList = [
        {
            id: 1,
            title: 'Controllers',
            icon: <BiAlbum color='#B28FB9' size={36} />,
        },
        {
            id: 2,
            title: 'Draggers',
            icon: <BiBookmark color='#B28FB9' size={36} />,
        },
        {
            id: 3,
            title: 'Actionable',
            icon: <BiBulb color='#B28FB9' size={36} />,
        },
        {
            id: 4,
            title: 'APIs',
            icon: <BiCheckShield color='#B28FB9' size={36} />,
        },
        {
            id: 5,
            title: 'Web Services',
            icon: <BiChart color='#B28FB9' size={36} />,
        },
        {
            id: 6,
            title: 'App Services',
            icon: <BiCoinStack color='#B28FB9' size={36} />,
        },
        {
            id: 7,
            title: 'Amazon Services',
            icon: <BiGlobe color='#B28FB9' size={36} />,
        },
        {
            id: 8,
            title: 'Facebook Services',
            icon: <BiTerminal color='#B28FB9' size={36} />,
        },
        {
            id: 9,
            title: 'cloud Services',
            icon: <BiCylinder color='#B28FB9' size={36} />,
        },
        {
            id: 10,
            title: 'Paacket Services',
            icon: <BiLogoRedux color='#B28FB9' size={36} />,
        },
    ]

    useEffect(() => {
    }, [])

    return (
        <div>
            <a className='serviceBtn' onClick={() => showServicMenu()}>
                <img src={seviceIcon} alt="" style={{ border: serClicked ? '1px solid #E251C4' : '1px solid #fff' }} />
                <span>Services</span>
                <i id='animate2'></i>
            </a>
            {serviceMenu && <div className='servicesMenu' ref={serviceMenuHide}>
                <ul className='catList1 clearfix'>
                    {getCategoryList.map((item, index) => {
                        return (
                            <li key={index.toString()}>
                                <a className={activeItem === index ? 'active' : ''} onClick={() => selectedMenu(index)}><i></i> {item}</a>
                            </li>)
                    })}
                </ul>
                <div>
                    <img src={magnefine} alt="" />
                    <input type="text" className='' placeholder='Search Services' />
                </div>
                <Scrollbars style={{ height: 400 }}>
                    <ul className='catList2'>
                        {serviceList.map((item, index) => {
                            return (
                                <li key={index.toString()}>
                                    <a>
                                        <i>{item.icon}</i>
                                        <span>{item.title}</span></a>
                                </li>
                            )
                        })}
                    </ul>
                </Scrollbars>
            </div>}

        </div >
    )
}

export default WorkflowEnviromentServices