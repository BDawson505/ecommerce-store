"use client";

import { useEffect, useState } from "react";

import useCart from "@/hooks/use-cart";

import CartItem from "@/app/(routes)/cart/components/cart-item";
import Container from "@/components/ui/container";
import Summary from "@/app/(routes)/cart/components/summary";
import { X } from "lucide-react";
import IconButton from "@/components/ui/icon-button";

const CartPage = () => {
  const cart = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 py-16 sm:px-6 lg:px-8'>
          <div
            className='
                flex
                items-center
                justify-between
                border-t
                border-gray-200
                pt-4
            '
          >
            <h1 className='text-3xl font-bold text-black'>Shopping Cart</h1>
            <IconButton
              onClick={cart.removeAll}
              className='bg-black text-white'
              icon={<X />}
            />
          </div>

          <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
            <div className='lg:col-span-7'>
              {cart.items.length === 0 && (
                <p className='text-neutral-500'>No items added to cart.</p>
              )}

              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>

            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
