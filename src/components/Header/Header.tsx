import React from 'react';
import './Header.css';

type ITitle = {
  title: string;
};

export default function Header({ title }: ITitle) {
  return (
    <>
      <h1 title="Header" className="header">
        {title}
      </h1>
      {/* <h3 data-testid="delta" className="header">Cats</h3> */}
    </>
  );
}
