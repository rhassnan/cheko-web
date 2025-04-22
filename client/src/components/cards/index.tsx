import React from 'react'
import Card from '../card'
import './styles.css'

export default function Cards({ items, orderList, onCardClick, updateOrders, getItemCount}: any ) {



  return (
    <div className='cards'>
       {items.map((item:any) => {
            return (
                <Card key={item.id} {...item}
                orderList={orderList}
                onClick={() => onCardClick(item)}
                updateOrders={updateOrders}
                getItemCount={getItemCount}/>
            )
        })}
    </div>
  )
}
