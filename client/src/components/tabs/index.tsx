import './styles.css'
import Tab from '../tab'
import BreakfastIcon from '../../assets/icons/breakfast.svg?react'
import DrinksIcon from '../../assets/icons/drinks.svg?react'
import SoupsIcon from '../../assets/icons/soups.svg?react'
import SushiIcon from '../../assets/icons/sushi.svg?react'
import OrdersIcon from '../../assets/icons/orders.svg?react'

import { OrderItem } from '../../../src/types/OrderItem'; 

interface TabsProps {
    setCategory: (cat: string | null) => void;
    categoryCounts: Record<string, number>;
    orderCount: number;
    selectedCategory?: string | null;
    activeCategory: string | null;
    allItems: OrderItem[];
  }
  

export default function Tabs({ setCategory, categoryCounts, orderCount, selectedCategory, activeCategory, allItems }: TabsProps) {
  console.log({selectedCategory});
  console.log({allItems});
  
  
    const categories = [
        {
            cat: "Breakfast", 
            icon: BreakfastIcon, 
            color: '#F4CBDF',
        },
        {
            cat: "Drinks", 
            icon: DrinksIcon, 
            color: '#CDDFEC',
        },
        {
            cat: "Soups", 
            icon: SoupsIcon, 
            color: '#E7DEE3',
        },
        {
            cat: "Sushi", 
            icon: SushiIcon, 
            color: '#D1D1EF',
        },
    ]

    const handleTabClick = (cat: string) => {
        if (activeCategory === cat) {
          setCategory(null); // toggle off to show all
        } else {
          setCategory(cat);
        }
      };

      
  return (
    <div className="tabs-container">
  <div className="categoreis-tabs-container">
    {categories.map((cat, index) => {
      const Icon = cat.icon;
      return (
        <Tab
          key={index}
          title={cat.cat}
          color={cat.color}
          count={categoryCounts[cat.cat] || 0}
          icon={Icon}
          setCategory={setCategory}
          isActive={activeCategory === cat.cat}
          onClick={() => handleTabClick(cat.cat)}
        />
      );
    })}
  </div>
  <span className="vertical-devider"></span>
  <div className="orders-container">
    <Tab
      title="Orders"
      color="#D0EAE3"
      count={orderCount}
      icon={OrdersIcon}
      setCategory={setCategory}
      isActive={activeCategory === "Orders"}
      onClick={() => handleTabClick('Orders')}
    />
  </div>
</div>

  )
}
