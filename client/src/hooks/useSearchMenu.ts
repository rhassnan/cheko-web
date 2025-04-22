import { useState } from 'react';
import { OrderItem } from '../types/OrderItem';

export const useSearchMenu = () => {
    const [items, setItems] = useState<OrderItem[]>([]);
    const [loading, setLoading] = useState(false);
  
    const searchMenu = async (keyword: string) => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:8800/menu/search?keyword=${keyword}`);
        const data = await res.json();
        setItems(data);
        return data; // <-- important!
      } catch (err) {
        console.error("Search failed:", err);
        return [];
      } finally {
        setLoading(false);
      }
    };
  
    return { items, loading, searchMenu };
  };
  