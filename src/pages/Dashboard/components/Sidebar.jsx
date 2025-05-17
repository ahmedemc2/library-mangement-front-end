import {
  FaTh,
  FaBoxOpen,
  FaChartBar,
  FaTags,
  FaWarehouse,
  FaClipboardList,
} from "react-icons/fa";

const Sidebar = () => {
  const links = [
    { name: "Dashboard", icon: <FaTh /> },
    { name: "Order", icon: <FaClipboardList /> },
    { name: "Statistic", icon: <FaChartBar /> },
    { name: "Product", icon: <FaBoxOpen /> },
    { name: "Stock", icon: <FaWarehouse /> },
    { name: "Offer", icon: <FaTags /> },
  ];

  return (
    <aside className="bg-blue-600 text-white w-64 h-screen p-4 flex flex-col">
      <h1 className="text-xl font-bold mb-8">eProduct</h1>
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <button
            key={link.name}
            className="flex items-center gap-2 text-left hover:text-blue-200"
          >
            {link.icon}
            <span>{link.name}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto text-sm text-blue-300">
        <div className="flex gap-3 pt-6">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Google</a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
