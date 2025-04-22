import React from 'react'
import Card from '../card'
import './styles.css'

export default function Cards({ setOrders, orderList , items, onCardClick}: any ) {



  return (
    <div className='cards'>
       {items.map((item:any) => {
            return (
                <Card key={item.id} {...item}
                setOrders={setOrders}
                orderList={orderList} 
                onClick={() => onCardClick(item)}/>
            )
        })}
    </div>
  )
}
