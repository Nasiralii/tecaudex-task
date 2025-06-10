export default function CustomerOverview() {
  const customer = {
    name: "Olivia Hayes",
    contact: "olivia.hayes@email.com",
    lastInteraction: "2024-07-20",
    status: "Active",
  };

  return (
    <div className="w-full py-4 sm:py-6 lg:py-8">
      <h1 className="text-xl md:text-[22px] font-bold text-[#0D141C] mb-6">
        Customer Overview
      </h1>

      {/* Desktop Table View */}
      <div className="block bg-white rounded-lg border border-[#E5E8EB] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-[#E5E8EB]">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#0D141C] uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#0D141C] uppercase">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#0D141C] uppercase">
                  Last Interaction
                </th>
                <th className="px-6 py-3 text-sm font-medium text-[#0D141C] uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white overflow-auto">
              <tr className="text-sm">
                <td className="px-6 py-4 whitespace-nowrap font-medium">
                  {customer.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#4D7399]">
                  <a
                    href={`mailto:${customer.contact}`}
                    className="hover:underline"
                  >
                    {customer.contact}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#4D7399]">
                  {customer.lastInteraction}
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-center">
                  <span className="rounded-full font-medium cursor-pointer bg-gray px-14 py-2.5">
                    {customer.status}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
