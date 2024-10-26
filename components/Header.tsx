// Header.tsx

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import HeaderCategory from "./HeaderCategory";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Menu from "./Menu"; // Import the new Menu component
import { useContext, useState } from "react";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/types/types";
import HeaderCart from "./HeaderCart";
import useScrollDirection from "@/hooks/sticky-header";
import MenuTwo from "./MenuTwo";

export default function Header() {
  const categories = [
    { title: "Development", description: "Learn to code with programming courses." },
    { title: "Business", description: "Master business fundamentals." },
    { title: "Design", description: "Enhance your creative design skills." },
    { title: "Marketing", description: "Grow your business with digital marketing." },
  ];
  const { toggleSideMenu, sideMenuOpen } = useContext(AppContext) as AppContextType;
  const [cartOpen, setCartOpen] = useState(false);

  const dispatch = useDispatch();
  const cartQuantity = useSelector((state: RootState) =>
    state.cart.cartProducts?.reduce((total, product) => total + (product.quantity || 0), 0) ?? 0
  );
  const scrollDirection = useScrollDirection(null);

  return (
    <>
      <header className={`border-b ${scrollDirection === "down" ? "sticky" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold">
                MySkillsRoot
              </Link>
              <HeaderCategory categories={categories} />
            </div>

            {/* Desktop Menu */}
            <Menu />

            <div className="hidden md:flex flex-1 max-w-lg mx-6">
              <div className="relative w-full">
                <Input type="text" placeholder="Search for courses" className="w-full pl-10" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                Sign in
              </Button>
              <Button size="lg" className="hidden md:flex bg-emerald-500 hover:bg-emerald-800">
                Get started
              </Button>

              {/* Toggle Side Menu (Mobile) */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleSideMenu}>
                <span className="icon-hamburger" /> {/* Replace with any menu icon */}
              </Button>

              {/* Cart Button with quantity badge */}
              <Button variant="ghost" size="icon" onClick={() => setCartOpen(!cartOpen)}>
                <div className="relative">
                  <ShoppingCart className="h-12 w-12" />
                  <span className="absolute top-0 right-0 bg-pink-600 text-white rounded-full text-xs px-1 py-0.5 transform translate-x-1/2 -translate-y-1/2">
                    {cartQuantity || 0}
                  </span>
                </div>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MenuTwo />
          </div>
        </div>
      </header>

      {/* Cart Overlay */}
      <HeaderCart cartOpen={cartOpen} setCartOpen={setCartOpen} />

      {/* Overlay for Cart and Side Menu */}
      <div onClick={() => setCartOpen(false)} className={cartOpen ? "body-overlay opened" : "body-overlay"}></div>
      <div onClick={toggleSideMenu} className={sideMenuOpen ? "body-overlay opened" : "body-overlay"}></div>
    </>
  );
}
