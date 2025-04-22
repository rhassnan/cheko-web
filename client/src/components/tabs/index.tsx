import React from 'react'
import './styles.css'
import Tab from '../tab'
import BreakfastIcon from '../../assets/icons/breakfast.svg?react'
import DrinksIcon from '../../assets/icons/drinks.svg?react'
import SoupsIcon from '../../assets/icons/soups.svg?react'
import SushiIcon from '../../assets/icons/sushi.svg?react'
import OrdersIcon from '../../assets/icons/orders.svg?react'



export default function Tabs({setCategory} :any) {
    const cat = [
        {
            cat: "Breakfast", 
            icon: BreakfastIcon, 
            color: '#F4CBDF',
            count: 23
        },
        {
            cat: "Drinks", 
            icon: DrinksIcon, 
            color: '#CDDFEC',
            count: 23
        },
        {
            cat: "Soups", 
            icon: SoupsIcon, 
            color: '#E7DEE3',
            count: 23
        },
        {
            cat: "Sushi", 
            icon: SushiIcon, 
            color: '#D1D1EF',
            count: 23
        },
    ]
  return (
    <div className='tabs-container'>
    <div className='categoreis-tabs-container'>
        {cat.map((item, index) => {
            const Icon = item.icon;
            return (
                <Tab key={index} title={item.cat} color={item.color} count={item.count} icon={Icon} setCategory={setCategory}/>
            )
        })}
    </div>
    <span className='vertical-devider'></span>
    <div className='orders-container'>
    <Tab  title={"Orders"} color={'#D0EAE3'} count={3} icon={OrdersIcon} setCategory={setCategory}/>
    </div>
    </div>
  )
}
