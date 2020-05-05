import React from "react";

export function Header({ name, onMinimize, onReset, onMaximize }: IHeader) {
  return (
    <header>
      <h4>{name}</h4>
      <span className="d-flex">
        <button className="cb-btn" onClick={onMinimize}>
          -
        </button>
        <button className="cb-btn" onClick={onReset}>
          ?
        </button>
        <button className="cb-btn" onClick={onMaximize}>
          +
        </button>
      </span>
    </header>
  );
}

interface IHeader {
  name: string;
  onMinimize?(): void;
  onReset?(): void;
  onMaximize?(): void;
}
