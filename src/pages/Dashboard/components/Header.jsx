import { FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      {/* Title & Filters */}
      <div>
        <h1 className="text-2xl font-semibold">Order To Borrow</h1>
        <p className="text-gray-400 text-sm">28 orders found</p>

        {/* Tabs (All orders, Dispatch, etc.) */}
        <div className="flex gap-4 mt-4">
          {["All orders", "Dispatch", "Pending", "Completed"].map((tab, i) => (
            <button
              key={i}
              className={`text-sm font-medium pb-1 border-b-2 ${
                tab === "All orders"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-blue-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Right Section: Date range, Notification, Profile */}
      <div className="flex items-center gap-4">
        {/* Date Picker (not functional here, just UI) */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>📅</span>
          <span>31 Jul 2020</span>
          <span>to</span>
          <span>03 Aug 2020</span>
        </div>

        {/* Notification Bell */}
        <button className="relative">
          <FaBell className="text-gray-500 text-lg" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500"></span>
        </button>

        {/* User Profile */}
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
