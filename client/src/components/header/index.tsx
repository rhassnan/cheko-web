import "./style.css";
import ModeSwitch from "../switch";
import SearchFilter from "../searchFilter";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  // onSearch: (keyword: string) => void;
  searchKeyword: string;
  setSearchKeyword: (val: string) => void;
  category: string | null;
  setCategory: (val: string | null) => void;
}

export default function Header({ activeTab, setActiveTab, searchKeyword, setSearchKeyword, category, setCategory }: HeaderProps) {
  

  const tabs = [
    { id: "home", label: "Home" },
    { id: "map", label: "Map" },
  ];

  return (
    <div className="header-container">
      <div className="tabs">
        <div className="tab-container">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
             <p>{tab.label}</p>
            </button>
          ))}
        </div>
        <div>
            <SearchFilter 
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            category={category}
          setCategory={setCategory}
            />
        </div>
      </div>
      <div className="mode-switch">
            <ModeSwitch/>
      </div>
    </div>
  );
}
