import { AppContext } from '@/contextApi/AppProvider';
import Link from 'next/link';
import { useContext } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { X, Search } from 'lucide-react';
import { AppContextType } from 'next/dist/shared/lib/utils';

const HeaderSearchField = () => {
    const { toggleHeaderSerach, headerSerachOpen } = useContext(
        AppContext
      ) as AppContextType;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white z-50 transition-transform duration-300 ${
        headerSerachOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold">Search</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleHeaderSerach}
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        <div className="flex justify-center mb-6">
          <ul className="flex gap-4 text-gray-600">
            <li><Link href="/course-grid">All Categories</Link></li>
            <li><Link href="/course-grid">Art & Design</Link></li>
            <li><Link href="/course-grid">Development</Link></li>
            <li><Link href="/course-grid">Business</Link></li>
            <li><Link href="/course-grid">Marketing</Link></li>
            <li><Link href="/course-grid">UX Design</Link></li>
          </ul>
        </div>

        <div className="relative max-w-lg mx-auto">
          <Input
            type="text"
            placeholder="Search for products..."
            className="w-full pl-10"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          >
            <Search className="w-5 h-5 text-gray-500" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearchField;
