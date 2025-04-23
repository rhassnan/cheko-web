import React from 'react'
import './styles.css'

interface TabsInterface {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    color: string;
    title: string;
    count: number;
    setCategory: any
    isActive: boolean;
  onClick: () => void;
  }

export default function Tab({icon: Icon, color, title, count, isActive, onClick} : TabsInterface) {



  return (
    <button className={`tab-card-btn ${isActive ? 'active-tab' : ''}`} onClick={onClick}>
        <div className='icon-container' style={{ backgroundColor: color }}>
            <Icon/>
        </div>
        <p>{title}</p>
        <p>{count}</p>

    </button>
  )
}
