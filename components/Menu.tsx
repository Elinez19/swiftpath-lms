import mobile_menu_data from "@/data/menu-data";
import Link from "next/link";

interface SubMenuItem {
  title: string;
  link: string;
}

interface MegaMenuItem {
  title: string;
  link: string;
  hasDropdown?: boolean;
  submenus?: SubMenuItem[];
}

interface MenuItem {
  id: number;
  hasDropdown?: boolean;
  active?: boolean;
  title: string;
  pluseIncon?: boolean;
  link: string;
  submenus?: SubMenuItem[];
  megaMenu?: boolean;
  pages?: boolean;
  mega_menus?: MegaMenuItem[];
}

const Menu = () => {
  return (
    <nav className="relative hidden md:flex space-x-4">
      {mobile_menu_data.map((item: MenuItem) => (
        <div key={item.id} className="relative group">
          <Link
            href={item.link}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              item.active ? "bg-emerald-500 text-white" : "text-gray-700 hover:bg-emerald-500 hover:text-white"
            }`}
          >
            {item.title}
          </Link>

          {/* Dropdown Menu */}
          {item.hasDropdown && item.submenus && (
            <div className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-xl rounded-lg mt-2 z-10 w-48 transition duration-200 ease-in-out">
              {item.submenus.map((submenu, index) => (
                <Link
                  key={index}
                  href={submenu.link}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-500 hover:text-white transition-colors duration-200"
                >
                  {submenu.title}
                </Link>
              ))}
            </div>
          )}

          {/* Mega Menu */}
          {item.megaMenu && item.mega_menus && (
            <div className="absolute left-0 hidden group-hover:flex bg-white shadow-2xl rounded-lg mt-2 z-10 w-[48rem] transition duration-200 ease-in-out">
              <div className="grid grid-cols-3 gap-8 p-6">
                {item.mega_menus.map((megaItem, index) => (
                  <div key={index} className="flex flex-col space-y-2">
                    <Link href={megaItem.link} className="font-semibold text-gray-900 hover:underline mb-2">
                      {megaItem.title}
                    </Link>
                    {megaItem.hasDropdown && megaItem.submenus && (
                      <div className="flex flex-col space-y-1 pl-4">
                        {megaItem.submenus.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.link}
                            className="text-white hover:text-white hover:bg-blue-950 px-2 py-1 rounded-md transition-colors duration-200"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Menu;
