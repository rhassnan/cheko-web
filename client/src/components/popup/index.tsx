import React from 'react'
import './styles.css'

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  item: any;
  counter: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function Popup(
  { isOpen, onClose, item, counter, onIncrease, onDecrease }: PopupProps) {
    if (!isOpen || !item) return null;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={onClose}>✕</button>
          <div className="modal-content">
            <div className='modal-upper'>
            <p className="modal-title">{item.name}</p>
            <p className="modal-cal">{item.calorie} Cal</p>
            </div>
            <p className="modal-desc">{item.description}</p>
            <img src={item.image} className="modal-image" alt={item.name} />

           <div className='modal-lower'>
            <p className="modal-price">{item.price} SR</p>
            <div className="modal-counter">
              <button onClick={onDecrease} disabled={counter <= 0}>-</button>
              <span>{counter}</span>
              <button onClick={onIncrease}>+</button>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    );
}
