import React, { useState } from 'react';
import './App.css';

const menuData = [
  // Menu Utama
  { id: 1, nama: "Nasi + Sop Iga", harga: 45000 },
  { id: 2, nama: "Spaghetti Carbonara", harga: 60000 },
  { id: 3, nama: "Beef Curry Udon", harga: 52000 },
  { id: 4, nama: "Japanese Teriyaki", harga: 60000 },
  { id: 5, nama: "Olive Tapenade Pasta", harga: 52000 },

  // Dessert
  { id: 6, nama: "Tiramissu", harga: 45000 },
  { id: 7, nama: "Panna cotta", harga: 40000 },
  { id: 8, nama: "Dorayaki", harga: 28000 },
  { id: 9, nama: "Creme Brulee", harga: 44000 },
  { id: 10, nama: "Belgian Waffle", harga: 55000 },

  // Minuman
  { id: 11, nama: "Mineral water", harga: 20000 },
  { id: 12, nama: "Cocktail", harga: 100000 },
  { id: 13, nama: "Milkshake", harga: 38000 },
  
];

function App() {
    const [pesanan, setPesanan] = useState([]);

    const handlePesan = (id) => {
        const item = menuData.find(item => item.id === id);
        if (item) {
            setPesanan([...pesanan, item]);
        }
    };

    const hapusPesanan = (id) => {
        setPesanan(pesanan.filter(item => item.id !== id));
    };

    const totalHarga = pesanan.reduce((total, item) => total + item.harga, 0);

    return (
        <div className="container">
            <h1>World's Restaurant International</h1>

            <ul className="menu">
                {menuData.map((item) => (
                    <li className="menu-item" key={item.id}>
                        <h3>{item.nama}</h3>
                        <p>Rp{item.harga}</p>
                        <button onClick={() => handlePesan(item.id)}>Pesan</button>
                    </li>
                ))}
            </ul>

            <h2>Pesanan Anda</h2>
            <ul className="menu">
                {pesanan.length === 0 ? (
                    <li>Belum ada pesanan</li>
                ) : (
                    pesanan.map((item) => (
                        <li className="menu-item" key={item.id}>
                            <h3>{item.nama}</h3>
                            <p>Rp{item.harga}</p>
                            <button onClick={() => hapusPesanan(item.id)}>Hapus</button>
                        </li>
                    ))
                )}
            </ul>

            <h2>Total: Rp{totalHarga}</h2>
        </div>
    );
}

export default App;
