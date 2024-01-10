import React, {useState} from 'react'
import "./style.css";
import Menu from './menuApi';
import MenuCard from '../MenuCard';
import Navbar from './Navbar';

const Resturent = () => {
    const[menuData, setMenuData] = useState(Menu);

    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    }

  return (
    <>
        {/* <Navbar filterItem={filterItem} /> */}
        <nav className="navbar">
            <div className="btn-group">
                <button 
                    className="btn-group__item" 
                    onClick={()=> filterItem("breakfast")}>
                    Breakfast
                </button>
                <button 
                    className="btn-group__item" 
                    onClick={()=> filterItem("lunch")}>
                    lunch
                </button>
                <button 
                    className="btn-group__item"
                    onClick={()=> filterItem("evening")}>
                    Evening
                </button><button 
                    className="btn-group__item"
                    onClick={()=> filterItem("dinner")}>
                    Dinner
                </button>
                <button 
                    className="btn-group__item"
                    onClick={()=> setMenuData(Menu)}>
                    All
                </button>
            </div>
        </nav>
        <MenuCard menuDatas={menuData} />
    </>
  )
}

export default Resturent
