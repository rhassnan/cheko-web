import React, { useState } from "react";
import Tabs from "../../components/tabs";

import "./styles.css";
import Cards from "../../components/cards";
import Popup from "../../components/popup";

type OrderItem = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    calorie: number;
    category: string;
    lat: number;
    lng: number;
    quantity: number;
  };
  

export default function Home() {

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



  const items=  [
    {
      "id": 36,
      "name": "nougat",
      "description": "Quaerat quibusdam minima magni consectetur provident libero. Dolor accusamus assumenda officiis delectus. Eligendi eveniet quibusdam at. Placeat voluptatibus nesciunt perferendis ullam magni repellat minus dolor. Repudiandae repellendus incidunt molestias iure.",
      "price": 393,
      "image": "https://loremflickr.com/640/480/food",
      "calorie": 47,
      "category": "Sushi",
      "lat": -47.1976,
      "lng": -178.4445
    },
    {
      "id": 18,
      "name": "codepage",
      "description": "Vel iusto necessitatibus ipsum. Dicta iste expedita distinctio exercitationem amet. Occaecati sapiente deleniti exercitationem. Impedit labore amet ratione. Doloribus magni veritatis ipsam optio.",
      "price": 593,
      "image": "https://loremflickr.com/640/480/food",
      "calorie": 6,
      "category": "Drinks",
      "lat": -69.6643,
      "lng": 21.2437
    },
    {
      "id": 11,
      "name": "flax",
      "description": "Nam excepturi quia. Veritatis non nam quisquam perferendis. Rem ex hic laborum officiis fuga. Maiores reiciendis quia consectetur est sed. Esse aliquid ipsam odit dolores odio.",
      "price": 152,
      "image": "https://loremflickr.com/640/480/food",
      "calorie": 25,
      "category": "Breakfast",
      "lat": 0.5756,
      "lng": 67.289
    },
    {
      "id": 111,
      "name": "flax",
      "description": "Nam excepturi quia. Veritatis non nam quisquam perferendis. Rem ex hic laborum officiis fuga. Maiores reiciendis quia consectetur est sed. Esse aliquid ipsam odit dolores odio.",
      "price": 152,
      "image": "https://loremflickr.com/640/480/food",
      "calorie": 25,
      "category": "Breakfast",
      "lat": 0.5756,
      "lng": 67.289
    }
  ]

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
        <Cards setOrders={setOrders} orderList={orderList}
        items={filteredItems}
        onCardClick={openModal}
        updateOrders={updateOrders}
        getItemCount={getItemCount}/>
        <Popup
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            item={selectedItem}
            counter={getItemCount(selectedItem?.id || 0)}
            onIncrease={() =>
              selectedItem && updateOrders(selectedItem, getItemCount(selectedItem.id) + 1)
            }
            onDecrease={() =>
              selectedItem && updateOrders(selectedItem, getItemCount(selectedItem.id) - 1)
            }
            />

    </div>
  );
}