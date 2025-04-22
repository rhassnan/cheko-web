// hooks/useFetchMenu.ts
import { useEffect, useState } from 'react';

export interface MenuItem {
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
}

export function useFetchMenu() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:8800/menu/')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data) => {
        // Add quantity to each item
        const enrichedData = data.map((item: any) => ({
          ...item,
          quantity: item.quantity ?? 0,
        }));
        setItems(enrichedData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { items, loading, error };
}
