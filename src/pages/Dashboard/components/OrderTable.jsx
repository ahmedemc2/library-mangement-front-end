const orders = [
  {
    id: "#2633",
    name: "John McCormick",
    address: "1096 Wiseman Street, CALAMA, KS, 53212",
    date: "01 Aug 2020",
    price: "$35.00",
    status: "Dispatch",
  },
  // Add more orders...
];

const statusColor = {
  Pending: "text-red-500",
  Completed: "text-gray-400",
  Dispatch: "text-green-500",
};

const OrderTable = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">All Orders</h2>
        {/* Date filter and profile icons would go here */}
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Date</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b hover:bg-blue-50">
              <td>{order.id}</td>
              <td>{order.name}</td>
              <td>{order.address}</td>
              <td>{order.date}</td>
              <td>{order.price}</td>
              <td className={statusColor[order.status]}>{order.status}</td>
              <td>
                <button className="text-gray-500 hover:text-blue-500">⚙</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
