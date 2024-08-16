import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './App.css';

// 先生データのサンプル
const products = [
  { id: 1, name: "先生A", category: "教務部", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 2, name: "先生B", category: "教務部", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 3, name: "先生C", category: "教務部", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 4, name: "先生D", category: "教務部", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 5, name: "先生E", category: "教務部", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 6, name: "先生F", category: "学生部", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 7, name: "先生G", category: "学生部", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 8, name: "先生H", category: "学生部", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 9, name: "先生I", category: "学生部", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 10, name: "先生J", category: "学生部", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 11, name: "先生K", category: "寮務部", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 12, name: "先生L", category: "寮務部", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 13, name: "先生M", category: "寮務部", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 14, name: "先生N", category: "寮務部", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 15, name: "先生O", category: "寮務部", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 16, name: "先生P", category: "共通教育", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 17, name: "先生Q", category: "共通教育", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 18, name: "先生R", category: "共通教育", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 19, name: "先生S", category: "共通教育", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
  { id: 20, name: "先生T", category: "共通教育", image: "https://via.placeholder.com/150", link: "https://via.placeholder.com/300" },
];

// 先生カードコンポーネント
const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <a href={product.link} target="_blank" rel="noopener noreferrer">
        <img src={product.image} alt={product.name} className="card-image" />
      </a>
      <h2>{product.name}</h2>
    </div>
  );
};

// 背㎜制リストコンポーネント
const ProductList = ({ products }) => {
  return (
    <div className="list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

// カテゴリー別の先生リスト
const categories = ["教務部", "学生部", "寮務部", "共通教育"];
const categorizedProducts = categories.map(category => ({
  category,
  products: products.filter(product => product.category === category)
}));

// メインコンポーネント
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router basename="/sample-webpage-vite2">
      <div>
        <h1>先生予定表一覧</h1>
        <nav className="navbar">
          <FaBars className="hamburger" onClick={toggleMenu} />
          <ul className={menuOpen ? "menu active" : "menu"}>
            <li>
              <Link to="/" onClick={toggleMenu}>一覧</Link>
            </li>
            {categories.map((category, index) => (
              <li key={index}>
                <Link to={`/${category}`} onClick={toggleMenu}>{category}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={
            <div>
              <h2>一覧</h2>
              <ProductList products={products} />
            </div>
          } />
          {categorizedProducts.map((group, index) => (
            <Route key={index} path={`/${group.category}`} element={
              <div>
                <h2>{group.category}</h2>
                <ProductList products={group.products} />
              </div>
            } />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
