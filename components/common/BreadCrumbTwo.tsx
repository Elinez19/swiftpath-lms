import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const BreadcrumbTwo: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="flex items-center text-gray-700 dark:text-gray-300">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="text-gray-500 mx-2 dark:text-gray-400">›</span>
            )}
            {item.isCurrentPage ? (
              <span
                className="text-gray-700 font-semibold dark:text-gray-300"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link href={item.href} passHref>
                <a className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                  {item.label}
                </a>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbTwo;
