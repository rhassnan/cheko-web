import  { useState } from "react";
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
    category: string | null;
  setCategory: (cat: string | null) => void;
  }
  

export default function Home({ items, externalItem, externalModalOpen, onCloseModal, category, setCategory }: HomeProps) {

  
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


  

  const filteredItems = category === "Orders"
    ? orderList
    : category
      ? items.filter((item) => item.category === category)
      : items;


      

      const currentItem = externalItem || selectedItem;
      const currentCount = currentItem ? getItemCount(currentItem.id) : 0;

      const categoryCounts = items.reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

  return (
    <div className="home">
      <Tabs  setCategory={setCategory}
  categoryCounts={categoryCounts}
  orderCount={orderList.length} 
  activeCategory={category}
  allItems={items}/>
      <div className="category-section">
        <h1 className="category-txt">{category || 'All'}</h1>
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
  isOpen={externalModalOpen || modalOpen}
  onClose={() => {
    onCloseModal();
    setModalOpen(false);
  }}
  item={currentItem}
  counter={currentCount}
  onIncrease={() =>
    currentItem && updateOrders(currentItem, currentCount + 1)
  }
  onDecrease={() =>
    currentItem && updateOrders(currentItem, currentCount - 1)
  }
/>


    </div>
  );
}