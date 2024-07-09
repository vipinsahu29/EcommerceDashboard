import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUserTimes, FaUsers } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { MdViewList } from "react-icons/md";
import { TbBasketDiscount } from "react-icons/tb";
import { BsCartCheck } from "react-icons/bs";
import { IoChatbubbles } from "react-icons/io5";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export const allNav = [
  {
    id: 1,
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: 2,
    title: "Orders",
    icon: <AiOutlineShoppingCart />,
    role: "admin",
    path: "/admin/dashboard/orders",
  },
  {
    id: 3,
    title: "Category",
    icon: <BiCategory />,
    role: "admin",
    path: "/admin/dashboard/category",
  },
  {
    id: 4,
    title: "admins",
    icon: <FaUsers />,
    role: "admin",
    path: "/admin/dashboard/admins",
  },
  {
    id: 5,
    title: "Payment Request",
    icon: <MdPayment />,
    role: "admin",
    path: "/admin/dashboard/payment-request",
  },
  {
    id: 6,
    title: "Deactive admins",
    icon: <FaUserTimes />,
    role: "admin",
    path: "/admin/dashboard/deactive-admins",
  },
  {
    id: 7,
    title: "admin Request",
    icon: <FaCodePullRequest />,
    role: "admin",
    path: "/admin/dashboard/admins-request",
  },
  {
    id: 8,
    title: "Live Chat",
    icon: <IoIosChatbubbles />,
    role: "admin",
    path: "/admin/dashboard/chat-admins",
  },
  {
    id: 9,
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: 10,
    title: "Add Product",
    icon: <IoMdAdd />,
    role: "admin",
    path: "/admin/dashboard/add-product",
  },
  {
    id: 11,
    title: "All Product",
    icon: <MdViewList />,
    role: "admin",
    path: "/admin/dashboard/products",
  },
  {
    id: 12,
    title: "Discount Product",
    icon: <TbBasketDiscount />,
    role: "admin",
    path: "/admin/dashboard/discount-product",
  },
  {
    id: 13,
    title: "Orders",
    icon: <BsCartCheck />,
    role: "admin",
    path: "/admin/dashboard/orders",
  },
  {
    id: 14,
    title: "Payments",
    icon: <MdPayment />,
    role: "admin",
    path: "/admin/dashboard/payments",
  },
  {
    id: 15,
    title: "Chat-Customer",
    icon: <IoChatbubbles />,
    role: "admin",
    path: "/admin/dashboard/chat-customer",
  },
  {
    id: 16,
    title: "Chat-Support",
    icon: <BsFillChatQuoteFill />,
    role: "admin",
    path: "/admin/dashboard/chat-support",
  },
  {
    id: 17,
    title: "Profile",
    icon: <CgProfile />,
    role: "admin",
    path: "/admin/dashboard/profile",
  },
];
