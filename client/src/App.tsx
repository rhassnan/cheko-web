// App.tsx
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import Map from "./pages/map";
import { useFetchMenu } from "./hooks/useFetchMenu";
import { useSearchMenu } from "./hooks/useSearchMenu";
import { OrderItem } from "./types/OrderItem";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const [itemsToShow, setItemsToShow] = useState<OrderItem[] | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  const {
    items: defaultItems,
    loading: defaultLoading,
    error,
  } = useFetchMenu();
  const {
    items: searchedItems,
    loading: searchLoading,
    searchMenu,
  } = useSearchMenu();

  const openModal = (item: any) => {
    setSelectedItem(item);
    setModalOpen(true);
    setActiveTab("home");
  };

  useEffect(() => {
    if (searchKeyword.trim() === "") {
      // Clear mode: show all
      setItemsToShow(defaultItems);
    } else {
      // Search mode: trigger search
      searchMenu(searchKeyword).then((res) => {
        setItemsToShow(res || []);
      });
    }
  }, [searchKeyword, defaultItems]);

  console.log({ itemsToShow, searchedItems });

  if (defaultLoading || searchLoading) return <div>Loading menu...</div>;
  if (error) return <div>Error loading menu: {error}</div>;

  return (
    <>
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        category={category}
        setCategory={setCategory}
      />
      {activeTab === "home" && (
        <Home
          items={itemsToShow || []}
          externalItem={selectedItem}
          externalModalOpen={modalOpen}
          onCloseModal={() => setModalOpen(false)}
          category={category}
          setCategory={setCategory}
        />
      )}
      {activeTab === "map" && (
        <Map items={
          category === "Orders"
            ? []
            : category
            ? (itemsToShow || []).filter((item) => item.category === category)
            : itemsToShow || []
        } onSelectItem={openModal} />
      )}
    </>
  );
}

export default App;
