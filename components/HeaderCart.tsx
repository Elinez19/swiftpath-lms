import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  cart_product,
  decrease_quantity,
  remove_cart_product,
} from "@/redux/slices/cartSlice";
import { Button } from "@/components/ui/button";
import { productsType } from "@/types/types";

interface HeaderCartProps {
  setCartOpen: (isOpen: boolean) => void;
  cartOpen: boolean;
}

const HeaderCart: React.FC<HeaderCartProps> = ({ setCartOpen, cartOpen }) => {
  const dispatch = useDispatch();

  // Typing the product explicitly as productsType
  const handleRemoveCart = (product: productsType) => {
    dispatch(remove_cart_product(product));
  };

  const cartProducts = useSelector((state: RootState) => state.cart.cartProducts);
  const totalPrice = cartProducts.reduce(
    (total: number, product: productsType) => 
      total + (product.price ?? 0) * (product.quantity ?? 0), 
    0
  );
  

  return (
    <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${cartOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
      <div className="p-4 border-b flex justify-between items-center">
        <h4 className="text-lg font-semibold">Shopping Cart</h4>
        <Button variant="ghost" size="icon" onClick={() => setCartOpen(false)}>
          <i className="fal fa-times"></i>
        </Button>
      </div>

      <div className="p-4">
        {cartProducts.length === 0 ? (
          <h3 className="text-center text-gray-500">Your cart is empty</h3>
        ) : (
          <>
            <ul className="space-y-4">
              {cartProducts.map((item: productsType, index: number) => ( // Typing item as productsType
                <li key={index} className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900">
                      <Link href="#">{item.title}</Link>
                    </h5>
                    <div className="mt-2 flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500"
                        onClick={() => dispatch(decrease_quantity(item))} // item is typed here
                      >
                        <i className="far fa-minus"></i>
                      </Button>
                      <p className="text-sm">{item?.quantity}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500"
                        onClick={() => dispatch(cart_product(item))} // item is typed here
                      >
                        <i className="far fa-plus"></i>
                      </Button>
                    </div>
                    <p className="mt-2 text-gray-700">
                      {item.price === 0 ? "FREE" : `$${item.price}.00`}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-red-500"
                    onClick={() => handleRemoveCart(item)} // item is typed here
                  >
                    <i className="fal fa-times"></i>
                  </Button>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <div className="flex justify-between mb-4 text-gray-900">
                <span className="font-semibold">Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="space-y-2">
                <Link href="/cart" passHref>
                  <Button className="w-full">View Cart</Button>
                </Link>
                <Link href="/checkout" passHref>
                  <Button variant="outline" className="w-full">
                    Checkout
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderCart;
