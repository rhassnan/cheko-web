import React from 'react'
import './styles.css'

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  item: any;
  counter: number;
  onAdd: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function Popup({ isOpen, onClose, item, counter, onIncrease, onDecrease }: PopupProps) {
  if (!isOpen || !item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <img src={item.image} className="modal-image" alt={item.name} />
        <div className="modal-content">
          <h2 className="modal-title">{item.name}</h2>
          <p className="modal-desc">{item.description}</p>
          <p className="modal-cal">{item.calorie} Cal</p>
          <p className="modal-price">{item.price} SR</p>
          <div className="modal-counter">
            <button onClick={onDecrease}>-</button>
            <span>{counter}</span>
            <button onClick={onIncrease}>+</button>
          </div>
          <button className="add-btn" onClick={onAdd}>Add to Order</button>
        </div>
      </div>
    </div>
  );
}
