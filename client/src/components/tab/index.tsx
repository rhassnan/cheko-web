import React from 'react'
import './styles.css'
import BreakfastIcon from '../../assets/icons/breakfast.svg?react'

interface TabsInterface {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    color: string;
    title: string;
    count: number;
    setCategory: any
  }

export default function Tab({icon: Icon, color, title, count, setCategory} : TabsInterface) {

  return (
    <button className='tab-card-btn' onClick={() => setCategory(title)}>
        <div className='icon-container' style={{ backgroundColor: color }}>
            <Icon/>
        </div>
        <p>{title}</p>
        <p>{count}</p>

    </button>
  )
}
