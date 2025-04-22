import React, { useState } from "react";
import "./styles.css";

interface CardInterface {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  calorie: number;
  category: string;
  lat: number;
  lng: number;
  // count: number
  setOrders: React.Dispatch<React.SetStateAction<OrderItem[]>>;
  orderList: OrderItem[];
  onClick?: () => void;
}

type OrderItem = Omit<CardInterface, "setOrders" | "orderList"> & {
  quantity: number;
};

export default function Card(item: CardInterface) {
  const [counter, setCounter] = useState(() => {
    const existing = item.orderList.find((o) => o.id === item.id);
    return existing?.quantity || 0;
  });

  const updateOrders = (newCount: number) => {
    const existing = item.orderList.find((o) => o.id === item.id);

    if (newCount > 0) {
      const newItem: OrderItem = {
        ...item,
        quantity: newCount,
      };

      item.setOrders((prev) => {
        if (existing) {
          return prev.map((order) => (order.id === item.id ? newItem : order));
        } else {
          return [...prev, newItem];
        }
      });
    } else {
      if (existing) {
        item.setOrders((prev) => prev.filter((order) => order.id !== item.id));
      }
    }
  };

  const handleCounter = (operation: string) => {
    if (operation === "-" && counter > 0) {
      const newCount = counter - 1;
      setCounter(newCount);
      updateOrders(newCount);
    } else if (operation === "+") {
      const newCount = counter + 1;
      setCounter(newCount);
      updateOrders(newCount);
    }
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
            <button className="counter" onClick={() => handleCounter("-")}>
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
