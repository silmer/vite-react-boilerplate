import { ConfigProvider, Menu, MenuProps, Switch, theme } from "antd";
import React, {useCallback, useEffect, useState} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import {GalleryPage} from "./pages/GalleryPage";
//import "./style.css";

function App() {

    const [darkMode, setDarkMode] = useState(true);

    const menuItems: MenuProps["items"] = [
        {
            label: <Link to= "/" >Main page</Link>,
            key: "route_0",

        },
        {
            label: <Link to="/gallery" >Gallery</Link>,
            key: "route_1"
        },
        {
            disabled: true,
            label: <><label style={{color: darkMode ? "#F5F5F5" : "#000"}}>Dark mode</label> <Switch checked={darkMode} onClick={()=>setDarkMode(!darkMode)}/></>,
            key: "route_2",
            
        }
    ]

    return (
        <>
        <div style={{backgroundColor: darkMode? "#141414" : "#FFFFFF"}}>
        <ConfigProvider theme={{algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm}}> 
             
            <div style={{width: "100vw", zIndex: 100, position: "fixed"}}>
                <Menu items={menuItems} mode="horizontal" style={{display: "block"}}/>
            </div>
            <div style={{height: "100vh", width: "100vw", overflowY: "auto", margin: "auto", paddingTop: 50}}>
                <Routes>
                    <Route path={"/"} element={<MainPage/>} key="route_0"/>
                    <Route path={"/gallery"} element={<GalleryPage/>} key="route_1"/>
                </Routes>
            </div>
            </ConfigProvider> 
        </div>
        
        </>
    )
}

export default App;