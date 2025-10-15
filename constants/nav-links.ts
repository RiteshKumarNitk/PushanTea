import { LayoutDashboard, ShoppingCart, Package, Users, ShoppingBasket, UserCircle } from "lucide-react";

export const navLinks = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        variant: "default",
        href: "/admin",
    },
    {
        title: "Products",
        icon: Package,
        variant: "ghost",
        href: "/admin/products",
    },
    {
        title: "Orders",
        icon: ShoppingCart,
        variant: "ghost",
        href: "/admin/orders",
    },
    {
        title: "Users",
        icon: Users,
        variant: "ghost",
        href: "/admin/users",
    },
    {
        title: "Cart",
        icon: ShoppingBasket,
        variant: "ghost",
        href: "/admin/cart",
    },
    {
        title: "Profile",
        icon: UserCircle,
        variant: "ghost",
        href: "/admin/profile",
    },
];