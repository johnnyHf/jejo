import './ExploreContainer.css';
import {Button, Dropdown, Menu} from "uiw";
import React from "react";
import {UserWill} from "../hooks/useWillGallery";

interface WillDropMenuProps {
    will: UserWill;
}

const willMenu = (will: UserWill) => (
    <div>
        <Menu bordered>
            <Menu.Item disabled text={will.desc}/>
            <Menu.Divider/>
            <Menu.Item icon="frown-o" text="待办"/>
            <Menu.Item icon="frown-o" text="废弃"/>
            <Menu.Item icon="smile-o" text="完成"/>
        </Menu>
    </div>
);

const WillDropMenu: React.FC<WillDropMenuProps> = ({ will }) => {
    return (
        <Dropdown menu={willMenu(will)} trigger="click" placement="topLeft">
            <Button icon="more"/>
        </Dropdown>
    );
};

export default WillDropMenu;
