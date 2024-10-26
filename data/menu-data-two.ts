
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

const menu_data: MenuItem[] = [
  {
    id: 1,
    hasDropdown: true,
    active: true,
    title: "Home",
    pluseIncon: true,
    link: "/",
    submenus: [
      { title: "Home 1", link: "/" },
      { title: "Home 2", link: "/homeTwo" },
      { title: "Home 3", link: "/homeThree" },
    ],
  },
  {
    id: 2,
    hasDropdown: true,
    title: "Course",
    link: "/course",
    pluseIncon: true,
    submenus: [
      { title: "Course 1", link: "/course" },
      { title: "Course 2", link: "/course-2" },
      { title: "Course 3", link: "/course-3" },
      { title: "Course 4", link: "/course-4" },
      { title: "Course details", link: "/course-details" },
      { title: "Webinars", link: "/webinars" },
      { title: "Webinar Details", link: "/webinar-details" },
    ],
  },
  {
    id: 3,
    hasDropdown: true,
    title: "Shop",
    link: "/shop",
    pluseIncon: true,
    submenus: [
      { title: "Shop", link: "/shop" },
      { title: "Shop Details", link: "/shop-details" },
      { title: "Wishlist", link: "/wishlist" },
      { title: "Cart", link: "/cart" },
      { title: "Checkout", link: "/checkout" },
    ],
  },
  {
    id: 4,
    title: "Pages",
    megaMenu: true,
    link: "",
    pluseIncon: true,
    pages: true,
    mega_menus: [
      {
        title: "About",
        link: "/about",
      },
      {
        title: "Instructor",
        link: "/instructor",
        hasDropdown: true,
        submenus: [
          { title: "Instructor", link: "/instructor" },
          { title: "Instructor Profile", link: "/instructor-profile" },
          { title: "Student Profile", link: "/student-profile" },
          { title: "Become Instructor", link: "/become-instructor" },
        ],
      },
      {
        title: "Zoom Class",
        link: "/zoom-class",
        hasDropdown: true,
        submenus: [
          { title: "Zoom Class", link: "/zoom-class" },
          { title: "Zoom Class Details", link: "/zoom-class-details" },
        ],
      },
      {
        title: "Blog",
        link: "/blog",
        hasDropdown: true,
        submenus: [
          { title: "Blog", link: "/blog" },
          { title: "Blog Details", link: "/blog-details" },
        ],
      },
      {
        title: "Event",
        link: "/event",
        hasDropdown: true,
        submenus: [
          { title: "Event", link: "/event" },
          { title: "Event Details", link: "/event-details" },
        ],
      },
      {
        title: "Membership Plan",
        link: "/membership",
      },
      {
        title: "FAQ Page",
        link: "/faq-page",
        hasDropdown: true,
        submenus: [
          { title: "FAQ Page", link: "/faq-page" },
          { title: "FAQ Details", link: "/faq-details" },
        ],
      },
      {
        title: "Sign In",
        link: "/login",
      },
      {
        title: "Sign Up",
        link: "/registration",
      },
      { title: "Terms & Conditions", link: "/terms-conditions" },
      { title: "Privacy & Policy", link: "/policy-privacy" },
      {
        title: "404 Page",
        link: "/404-page",
      },
      {
        title: "Contact",
        link: "/contact",
      },
    ],
  },
];

export default menu_data;
