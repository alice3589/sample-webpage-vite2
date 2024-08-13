// src/App.jsx
import React from 'react';
import './App.css';

// 先生データのサンプル
const products = [
  { id: 1, name: "先生A", description: "これは先生Aの説明です。", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 2, name: "先生B", description: "これは先生Bの説明です。", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 3, name: "先生C", description: "これは先生Cの説明です。", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 4, name: "先生D", description: "これは先生Dの説明です。", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 5, name: "先生E", description: "これは先生Eの説明です。", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 6, name: "先生F", description: "これは先生Fの説明です。", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 7, name: "先生G", description: "これは先生Gの説明です。", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 8, name: "先生H", description: "これは先生Hの説明です。", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 9, name: "先生I", description: "これは先生Iの説明です。", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 10, name: "先生J", description: "これは先生Jの説明です。", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 11, name: "先生K", description: "これは先生Kの説明です。", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 12, name: "先生L", description: "これは先生Lの説明です。", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 13, name: "先生M", description: "これは先生Mの説明です。", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 14, name: "先生N", description: "これは先生Nの説明です。", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 15, name: "先生O", description: "これは先生Oの説明です。", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 16, name: "先生P", description: "これは先生Pの説明です。", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 17, name: "先生Q", description: "これは先生Qの説明です。", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 18, name: "先生R", description: "これは先生Rの説明です。", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 19, name: "先生S", description: "これは先生Sの説明です。", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 20, name: "先生T", description: "これは先生Tの説明です。", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
];

// 先生カードコンポーネント
const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <a href={product.link} target="_blank" rel="noopener noreferrer">
        <img src={product.image} alt={product.name} className="card-image" />
      </a>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
};

// 先生リストコンポーネント
const ProductList = () => {
  return (
    <div className="list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

// メインコンポーネント
const App = () => {
  return (
    <div>
      <h1>先生紹介ページ</h1>
      <ProductList />
    </div>
  );
};

export default App;


