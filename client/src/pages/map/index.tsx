import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './style.css'
import { OrderItem } from '../../../src/types/OrderItem'; 


mapboxgl.accessToken =
  'pk.eyJ1Ijoicmhhc3NuYW4iLCJhIjoiY205c2g5dTkyMDBqMzJ2c2JnMGNnZGN5MSJ9.q2kx6OowO5COGuhiL99JuA';

  interface MapProps {
    items: OrderItem[];
    onSelectItem: (item: OrderItem) => void;
  }

const Map = ({ items, onSelectItem }: MapProps) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [46.6753, 24.7136],
      zoom: 10,
    });

    map.addControl(new mapboxgl.NavigationControl());


    items.forEach((item) => {
      const el = document.createElement('div');
      el.innerHTML = `
        <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_33_1686)">
            <path class="marker-shape" fill-rule="evenodd" clip-rule="evenodd"
              d="M12 9C10.343 9 9 10.343 9 12C9 13.657 10.343 15 12 15C13.657 15 15 13.657 15 12C15 10.343 13.657 9 12 9ZM12 17C9.239 17 7 14.762 7 12C7 9.238 9.239 7 12 7C14.761 7 17 9.238 17 12C17 14.762 14.761 17 12 17ZM12 0C5.373 0 0 5.373 0 12C0 17.018 10.005 32.011 12 32C13.964 32.011 24 16.95 24 12C24 5.373 18.627 0 12 0Z"
              fill="black"/>
          </g>
          <defs>
            <clipPath id="clip0_33_1686">
              <rect width="24" height="32" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      `;
      el.style.cursor = 'pointer';

      const svgPath = el.querySelector('.marker-shape') as SVGPathElement;

      const popup = new mapboxgl.Popup({ offset: 25, closeButton: false  }).setHTML(
        `
        <img src=${item.image} alt="${item.name}" />
        <div class="mapbox-pop-info">
        <p>${item.name}</p>
        <div class="mapbox-pop-more">
        <p>menu list</p>
        <button class="mapbox-pop-btn" data-id=${item.id}>
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_33_1235)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.64236 6.99076L2.18217 0.984597C1.68357 0.467674 0.875368 0.467674 0.377368 0.984597C-0.121232 1.49537 -0.121232 2.31998 0.377368 2.83075L5.93097 8L0.377368 13.1692C-0.121232 13.68 -0.121232 14.5046 0.377368 15.0154C0.875368 15.5323 1.68357 15.5323 2.18217 15.0154L8.64236 9.00924C8.91236 8.73231 9.03118 8.36307 9.00898 8C9.03118 7.63692 8.91236 7.26768 8.64236 6.99076Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_33_1235">
            <rect width="9" height="16" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        </button>
        </div>
        </div>
        `
      );

      const marker = new mapboxgl.Marker(el)
        .setLngLat([item.lng, item.lat])
        .setPopup(popup)
        .addTo(map);

      let isPopupOpen = false;

      el.addEventListener('click', (e) => {
        e.stopPropagation();

        if (isPopupOpen) {
          popup.remove();
          svgPath.setAttribute('fill', 'black');
          isPopupOpen = false;
        } else {
          // Reattach popup with updated position before opening again
          popup.setLngLat([item.lng, item.lat]).addTo(map);
          svgPath.setAttribute('fill', '#F4CBDF');
          isPopupOpen = true;
        }
      });

      popup.on('close', () => {
        svgPath.setAttribute('fill', 'black');
        isPopupOpen = false;
      });
      popup.on('open', () => {
        const btn = document.querySelector(`.mapbox-pop-btn[data-id='${item.id}']`);
        btn?.addEventListener('click', () => 
       { console.log('Popup button clicked', item);
        onSelectItem(item)}
        );
      });

    });

    

    return () => map.remove();
  }, [items, onSelectItem]);

  return <div ref={mapContainer} style={{ height: '100vh', width: '100%' }} />;
};

export default Map;
