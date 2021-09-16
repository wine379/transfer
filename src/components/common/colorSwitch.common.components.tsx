import React, {useState} from 'react';

interface IProps {
    darkMenu?: boolean;
    onClick?: any;
}

const ColorSwitch: React.FC<IProps> = ({darkMenu, onClick}) => {
    const [colorSwitchState, setColorSwitchState] = useState<IProps>({darkMenu: true});

     const onSideMenuHandler = () => {
        const sideMenu = colorSwitchState.darkMenu;
        setColorSwitchState({ darkMenu:  !sideMenu});
        onClick(sideMenu);
    }
    return (
        <div className="side-menu-switch" title="Click to change sidebar color">
                <label className="switch">
                    <input 
                    type="checkbox" 
                    className="light" 
                    onClick={onSideMenuHandler}
                />
                    <span className="slider round"></span>
                </label>
            </div>
    )
}

export default ColorSwitch
