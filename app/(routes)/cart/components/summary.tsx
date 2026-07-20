"use client";

import axios from "axios";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";

import Currency from "@/components/ui/currency";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const Summary = () => {
  const searchParams = useSearchParams();

  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    const success = searchParams.get("success");

    if (success === "1") {
      removeAll();

      // URL se success parameter hata do
      window.history.replaceState({}, "", "/cart");
    }
  }, []);

  const totalPrice = useMemo(() => {
    return items.reduce((total, item) => {
      return total + Number(item.price);
    }, 0);
  }, [items]);

  const onCheckout = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_STORE_ID}/checkout`,
        {
          productIds: items.map((item) => item.id),
        }
      );

      window.location.href = response.data.url;
    } catch (error) {
      console.log("[CHECKOUT_ERROR]", error);
    }
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">
        Order Summary
      </h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">
            Order Total
          </div>

          <Currency value={totalPrice} />
        </div>
      </div>

      <Button
        disabled ={items.length ===0}
        onClick={onCheckout}
        className="w-full mt-6 bg-black text-white"
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;