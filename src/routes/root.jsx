
import { useState, useEffect, useRef } from 'react';
import HomePage from '../containers/HomePage';
import Actuality from '../containers/Actuality';
import Header from '../components/header/Header';
import './root.css';

import useWindowSize from "../hooks/useWindowResize";
import Footer from '../components/footer/Footer';
import SideMenu from '../components/SIdeMenu';

import { MenuDashboard } from '../services/MenuDashboardServices';

function Root () {

    const winW = useWindowSize();

    const [childW, setChildW] = useState(null);

    const panelmenuitems = MenuDashboard.getAppList(setChildW);
    const menubaruser = MenuDashboard.getNavSettings(setChildW);

    function ChildWindow () {
        switch (childW) {
            case 'actuality':
                return <Actuality setChildW={setChildW} />;
            default:
                return <HomePage setChildW={setChildW} />;
        }
    }

    return (
        <div className="overflow-x-hidden wrapper">
            <div className="h-full w-full overflow-y-hidden">
                <SideMenu panelmenuitems={panelmenuitems} menubaruser={menubaruser}>
                    <Header setChildW={setChildW} />
                    <ChildWindow setChildW={childW} />
                    <Footer/>
                </SideMenu>
            </div>
        </div>
    )
}

export default Root;