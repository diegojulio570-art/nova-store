import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Glitch Core Tee", price: 25 },
  { id: 2, name: "Broken Statue Tee", price: 25 },
  { id: 3, name: "Void Eye Tee", price: 25 },
  { id: 4, name: "Chaos Smile Tee", price: 25 },
  { id: 5, name: "Cosmic Burst Tee", price: 25 },
  { id: 6, name: "Neon Skull Tee", price: 25 },
  { id: 7, name: "Urban Spray Tee", price: 25 },
  { id: 8, name: "Future Human Tee", price: 25 },
  { id: 9, name: "Minimal Logo Tee", price: 20 },
  { id: 10, name: "Energy Storm Tee", price: 25 },
  { id: 11, name: "Core Shorts", price: 30 },
  { id: 12, name: "Glitch Shorts", price: 30 },
  { id: 13, name: "Minimal Grey Shorts", price: 28 },
  { id: 14, name: "Void Shorts", price: 30 },
  { id: 15, name: "Cosmic Flow Shorts", price: 32 },
  { id: 16, name: "Spray Shorts", price: 30 },
  { id: 17, name: "Tech Lines Shorts", price: 32 },
  { id: 18, name: "Neon Edge Shorts", price: 32 },
  { id: 19, name: "Storm Shorts", price: 30 },
  { id: 20, name: "Lux Minimal Shorts", price: 35 },
];

export default function NovaStore() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-black text-white min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold tracking-widest">NOVA</h1>
          <p className="text-xs text-gray-400">BE YOU. CREATE YOUR STYLE.</p>
        </div>
        <div className="text-right">
          <p>🛒 {cart.length} items</p>
          <p className="font-bold">{total}€</p>
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <Card key={item.id} className="bg-neutral-900 rounded-2xl shadow-lg">
            <CardContent className="p-4">
              <div className="h-40 bg-gray-800 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-gray-500">Image</span>
              </div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="mt-2 font-bold">{item.price}€</p>
              <Button onClick={() => addToCart(item)} className="mt-4 w-full">
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Checkout */}
      <div className="mt-16 bg-neutral-900 p-6 rounded-2xl">
        <h2 className="text-2xl mb-4">Checkout</h2>
        {cart.length === 0 ? (
          <p className="text-gray-400">Your cart is empty</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{item.name}</span>
                <span>{item.price}€</span>
              </div>
            ))}
            <div className="border-t border-gray-700 mt-4 pt-4 flex justify-between font-bold">
              <span>Total</span>
              <span>{total}€</span>
            </div>
            <Button className="mt-4 w-full">Pay Now</Button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-center mt-16 text-gray-500 text-sm">
        <p>© 2026 NOVA - Created by Diego Julio</p>
      </div>
    </div>
  );
}
