// components/BreadCrumb.tsx

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadCrumbItem {
  label: string;
  href: string;
}

interface BreadCrumbProps {
  items: BreadCrumbItem[];
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm font-medium text-gray-500">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Link href={item.href}>
            <a className="text-gray-600 hover:text-indigo-600">{item.label}</a>
          </Link>
          {index < items.length - 1 && (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          )}
        </div>
      ))}
    </nav>
  );
};

export default BreadCrumb;
