// App.tsx
import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import Map from './pages/map';
// import { OrderItem } from '../types/OrderItem'; 




function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (item:any) => {
    setSelectedItem(item);
    setModalOpen(true);
    setActiveTab("home");
  };

  const items = [
    {
      id: 36,
      name: "nougat",
      description:
        "Quaerat quibusdam minima magni consectetur provident libero. Dolor accusamus assumenda officiis delectus. Eligendi eveniet quibusdam at. Placeat voluptatibus nesciunt perferendis ullam magni repellat minus dolor. Repudiandae repellendus incidunt molestias iure.",
      price: 393,
      image: "https://loremflickr.com/640/480/food",
      calorie: 47,
      category: "Sushi",
      lat: -47.1976,
      lng: -178.4445,
      quantity: 0,
    },
    {
      id: 18,
      name: "codepage",
      description:
        "Vel iusto necessitatibus ipsum. Dicta iste expedita distinctio exercitationem amet. Occaecati sapiente deleniti exercitationem. Impedit labore amet ratione. Doloribus magni veritatis ipsam optio.",
      price: 593,
      image: "https://loremflickr.com/640/480/food",
      calorie: 6,
      category: "Drinks",
      lat: -69.6643,
      lng: 21.2437,
      quantity: 0,
    },
    {
      id: 11,
      name: "flax",
      description:
        "Nam excepturi quia. Veritatis non nam quisquam perferendis. Rem ex hic laborum officiis fuga. Maiores reiciendis quia consectetur est sed. Esse aliquid ipsam odit dolores odio.",
      price: 152,
      image: "https://loremflickr.com/640/480/food",
      calorie: 25,
      category: "Breakfast",
      lat: 0.5756,
      lng: 67.289,
      quantity: 0,
    },
    {
      id: 111,
      name: "flax",
      description:
        "Nam excepturi quia. Veritatis non nam quisquam perferendis. Rem ex hic laborum officiis fuga. Maiores reiciendis quia consectetur est sed. Esse aliquid ipsam odit dolores odio.",
      price: 152,
      image: "https://loremflickr.com/640/480/food",
      calorie: 25,
      category: "Breakfast",
      lat: 0.576,
      lng: 67.29,
      quantity: 0,
    },
  ];

  return (
    <>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "home" && (
        <Home
          items={items}
          externalItem={selectedItem}
          externalModalOpen={modalOpen}
          onCloseModal={() => setModalOpen(false)}
        />
      )}
      {activeTab === "map" && <Map items={items} onSelectItem={openModal} />}
    </>
  );
}

export default App;