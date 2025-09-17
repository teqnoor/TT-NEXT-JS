"use client";

import { useEffect, useState } from "react";

export default function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("https://tigertigerfoods.com/api/get-orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();

        if (data.success) {
          setOrders(data.data);
        }
      } catch (err) {
        console.error("Error fetching orders", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p className="text-gray-500">Loading orders...</p>;
  }

  if (!orders.length) {
    return <p className="text-gray-500">No orders found.</p>;
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => {
        const items = Array.isArray(order.cart_items)
          ? order.cart_items
          : JSON.parse(order.cart_items || "[]");

        return (
          <div
            key={order.id}
            className="border rounded-lg shadow-md p-4 bg-white"
          >
            <h3 className="font-semibold text-lg mb-3">
              Order #{order.order_number}
            </h3>

            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0"
                >
                  <img
                    src={item.images}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-600">SKU: {item.sku}</p>
                    <p className="text-sm text-gray-600">
                      Unit: {item.unit} | Qty: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-600">
                      Pack: {item.product_quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
