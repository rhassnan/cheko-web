import React, { useState } from "react";
import "./styles.css";

interface CardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  calorie: number;
  category: string;
  lat: number;
  lng: number;
  orderList: any[];
  onClick: () => void;
  updateOrders: (item: any, count: number) => void;
  getItemCount: (id: number) => number;
}



export default function Card(item: CardProps) {
 
  const counter = item.getItemCount(item.id);

  const handleCounter = (op: string) => {
    const newCount = op === '+' ? counter + 1 : counter - 1;
    item.updateOrders(item, Math.max(0, newCount));
  };

  return (
    <div className="card-container"  onClick={item.onClick}>
      <img className="image" src={item.image} />
      <div className="item-info">
        <div className="upper-info">
          <p className="item-name">{item.name}</p>
          <p className="item-cal">{item.calorie} Cal</p>
        </div>
        <div className="lower-info">
          <p className="item-price">{item.price} SR</p>
          <div className="counter-container" onClick={(e) => e.stopPropagation()}>
            <button className="counter" disabled={counter <= 0} onClick={() => handleCounter("-")}>
              -
            </button>
            <p className="counter-txt">{counter}</p>
            <button className="counter" onClick={() => handleCounter("+")}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
