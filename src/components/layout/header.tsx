import { useState, useEffect } from "react";
import Icons from "../icons/icons";
import Logos from "../logos/logos";
import { useNavigate, useLocation } from "@tanstack/react-router";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const itemNavigation = [
    { name: "Trang chủ", icon: Icons.Home, link: "/homepage" },
    {
      name: "Quản lý văn bản",
      icon: Icons.FileAlt,
      link: "/document-management",
    },
    { name: "Phân tích", icon: Icons.LineChart, link: "/analysis" },
    { name: "Hồ sơ", icon: Icons.FolderOpen, link: "/profile" },
    { name: "Thoát", icon: Icons.DoorOpen, link: "/login" },
  ];

  const [isActiveItem, setIsActiveItem] = useState<string>("");

  useEffect(() => {
    const currentItem = itemNavigation.find(
      (item) => item.link === location.pathname
    );
    if (currentItem) {
      setIsActiveItem(currentItem.link);
    }
  }, [location.pathname]);

  const handleNavigation = (link: string) => {
    setIsActiveItem(link);
    navigate({ to: link });
  };

  return (
    <header className="bg-dark-blue flex items-center px-30 justify-between">
      <Logos.Logo className="h-8 my-5" />
      <nav className="flex space-x-4 h-full">
        {itemNavigation.map((item) => {
          const Icon = item.icon;
          const isActive = isActiveItem === item.link;
          return (
            <div
              key={item.name}
              className={`flex items-center justify-center gap-4 transition-colors px-4 cursor-pointer cursor-pointer ${
                isActive
                  ? "text-white border-b-6 border-[#027BFF] font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => handleNavigation(item.link)}
            >
              <Icon />
              <span className="text-base">{item.name}</span>
            </div>
          );
        })}
      </nav>
    </header>
  );
}
