import React, { useState } from "react";
import Tabs from "../../components/tabs";

import "./styles.css";
import Cards from "../../components/cards";
import Popup from "../../components/popup";
import { OrderItem } from '../../../src/types/OrderItem'; 




  interface HomeProps {
    items: OrderItem[];
    externalItem: OrderItem | null;
    externalModalOpen: boolean;
    onCloseModal: () => void;
  }
  

export default function Home({ items, externalItem, externalModalOpen, onCloseModal }: HomeProps) {

  const [category, setCategory] = useState("Breakfast");
  const [orderList, setOrders] = useState<OrderItem[]>([])

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<OrderItem | null>(null);


  const openModal = (item: any) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const updateOrders = (item: OrderItem, newCount: number) => {
    const existing = orderList.find((o) => o.id === item.id);

    if (newCount > 0) {
      const newItem = { ...item, quantity: newCount };
      setOrders((prev) =>
        existing
          ? prev.map((o) => (o.id === item.id ? newItem : o))
          : [...prev, newItem]
      );
    } else {
      if (existing) {
        setOrders((prev) => prev.filter((o) => o.id !== item.id));
      }
    }
  };

  const getItemCount = (itemId: number) => {
    return orderList.find((o) => o.id === itemId)?.quantity || 0;
  };


  const filteredItems =
    category === "Orders"
      ? orderList
      : items.filter((item) => item.category === category);

      

  return (
    <div className="home">
      <Tabs setCategory={setCategory} />
      <div className="category-section">
        <h1 className="category-txt">{category}</h1>
        <div className="horizontal-divider"></div>
      </div>
      <Cards
        items={filteredItems}
        orderList={orderList}
        onCardClick={openModal}
        updateOrders={updateOrders}
        getItemCount={getItemCount}
      />
      <Popup
        isOpen={externalModalOpen}
        onClose={onCloseModal}
        item={externalItem}
        counter={externalItem ? getItemCount(externalItem.id) : 0}
        onIncrease={() => externalItem && updateOrders(externalItem, getItemCount(externalItem.id) + 1)}
        onDecrease={() => externalItem && updateOrders(externalItem, getItemCount(externalItem.id) - 1)}
      />

    </div>
  );
}