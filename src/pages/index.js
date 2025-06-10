import CustomerOverview from "@/components/Customer";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const index = () => {
  // Customer data array directly in the component
  const customersData = [
    {
      id: 1,
      name: "John Doe",
      contact: "+1-202-555-0123",
      lastInteraction: "2025-05-20",
      status: "active",
      salesPerMonth: [
        { month: "January", sales: 2500 },
        { month: "February", sales: 2400 },
        { month: "March", sales: 2300 },
        { month: "April", sales: 2600 },
        { month: "May", sales: 2700 },
        { month: "June", sales: 2800 },
        { month: "July", sales: 2900 },
        { month: "August", sales: 3000 },
        { month: "September", sales: 3100 },
        { month: "October", sales: 3200 },
        { month: "November", sales: 3300 },
        { month: "December", sales: 3400 },
      ],
      region: "north",
    },
    {
      id: 2,
      name: "Jane Smith",
      contact: "+1-202-555-0189",
      lastInteraction: "2025-04-15",
      status: "inactive",
      salesPerMonth: [
        { month: "January", sales: 400 },
        { month: "February", sales: 450 },
        { month: "March", sales: 500 },
        { month: "April", sales: 600 },
        { month: "May", sales: 550 },
        { month: "June", sales: 580 },
        { month: "July", sales: 620 },
        { month: "August", sales: 640 },
        { month: "September", sales: 700 },
        { month: "October", sales: 720 },
        { month: "November", sales: 750 },
        { month: "December", sales: 800 },
      ],
      region: "south",
    },
    {
      id: 3,
      name: "Carlos Ramirez",
      contact: "+1-202-555-0175",
      lastInteraction: "2025-05-01",
      status: "active",
      salesPerMonth: [
        { month: "January", sales: 900 },
        { month: "February", sales: 950 },
        { month: "March", sales: 1000 },
        { month: "April", sales: 1100 },
        { month: "May", sales: 1050 },
        { month: "June", sales: 1150 },
        { month: "July", sales: 1200 },
        { month: "August", sales: 1300 },
        { month: "September", sales: 1350 },
        { month: "October", sales: 1400 },
        { month: "November", sales: 1500 },
        { month: "December", sales: 1600 },
      ],
      region: "east",
    },
    {
      id: 4,
      name: "Ava Brown",
      contact: "+1-202-555-0138",
      lastInteraction: "2025-05-24",
      status: "active",
      salesPerMonth: [
        { month: "January", sales: 1400 },
        { month: "February", sales: 1450 },
        { month: "March", sales: 1500 },
        { month: "April", sales: 1550 },
        { month: "May", sales: 1600 },
        { month: "June", sales: 1650 },
        { month: "July", sales: 1700 },
        { month: "August", sales: 1750 },
        { month: "September", sales: 1800 },
        { month: "October", sales: 1850 },
        { month: "November", sales: 1900 },
        { month: "December", sales: 1950 },
      ],
      region: "west",
    },
    {
      id: 5,
      name: "Liam Wilson",
      contact: "+1-202-555-0190",
      lastInteraction: "2025-03-20",
      status: "inactive",
      salesPerMonth: [
        { month: "January", sales: 300 },
        { month: "February", sales: 350 },
        { month: "March", sales: 400 },
        { month: "April", sales: 420 },
        { month: "May", sales: 450 },
        { month: "June", sales: 480 },
        { month: "July", sales: 500 },
        { month: "August", sales: 520 },
        { month: "September", sales: 550 },
        { month: "October", sales: 580 },
        { month: "November", sales: 600 },
        { month: "December", sales: 650 },
      ],
      region: "north",
    },
    {
      id: 6,
      name: "Olivia Johnson",
      contact: "+1-202-555-0104",
      lastInteraction: "2025-05-10",
      status: "active",
      salesPerMonth: [
        { month: "January", sales: 1100 },
        { month: "February", sales: 1120 },
        { month: "March", sales: 1150 },
        { month: "April", sales: 1200 },
        { month: "May", sales: 1220 },
        { month: "June", sales: 1250 },
        { month: "July", sales: 1270 },
        { month: "August", sales: 1300 },
        { month: "September", sales: 1320 },
        { month: "October", sales: 1350 },
        { month: "November", sales: 1380 },
        { month: "December", sales: 1400 },
      ],
      region: "south",
    },
    {
      id: 7,
      name: "Noah Martin",
      contact: "+1-202-555-0181",
      lastInteraction: "2025-05-18",
      status: "active",
      salesPerMonth: [
        { month: "January", sales: 800 },
        { month: "February", sales: 820 },
        { month: "March", sales: 850 },
        { month: "April", sales: 870 },
        { month: "May", sales: 900 },
        { month: "June", sales: 920 },
        { month: "July", sales: 950 },
        { month: "August", sales: 970 },
        { month: "September", sales: 1000 },
        { month: "October", sales: 1030 },
        { month: "November", sales: 1050 },
        { month: "December", sales: 1100 },
      ],
      region: "east",
    },
  ];

  // Calculate quarterly sales from customer data
  const calculateQuarterlySales = () => {
    const quarters = {
      Q1: ["January", "February", "March"],
      Q2: ["April", "May", "June"],
      Q3: ["July", "August", "September"],
      Q4: ["October", "November", "December"],
    };

    return Object.keys(quarters).map((quarter) => {
      const quarterMonths = quarters[quarter];
      let totalSales = 0;

      customersData.forEach((customer) => {
        customer.salesPerMonth.forEach((monthData) => {
          if (quarterMonths.includes(monthData.month)) {
            totalSales += monthData.sales;
          }
        });
      });

      return {
        quarter,
        sales: totalSales,
      };
    });
  };

  // Calculate regional distribution from customer data
  const calculateRegionalData = () => {
    const regionCounts = customersData.reduce((acc, customer) => {
      const region =
        customer.region.charAt(0).toUpperCase() + customer.region.slice(1);
      acc[region] = (acc[region] || 0) + 1;
      return acc;
    }, {});

    const totalCustomers = customersData.length;

    return Object.keys(regionCounts).map((region) => ({
      region,
      customers: regionCounts[region],
      percentage: Math.round((regionCounts[region] / totalCustomers) * 100),
    }));
  };

  // Calculate total sales and growth
  const calculateTotalSales = () => {
    let q3Sales = 0;
    let q4Sales = 0;

    customersData.forEach((customer) => {
      customer.salesPerMonth.forEach((monthData) => {
        // Q3: July, August, September
        if (["July", "August", "September"].includes(monthData.month)) {
          q3Sales += monthData.sales;
        }
        // Q4: October, November, December
        if (["October", "November", "December"].includes(monthData.month)) {
          q4Sales += monthData.sales;
        }
      });
    });

    const growth =
      q3Sales > 0 ? Math.round(((q4Sales - q3Sales) / q3Sales) * 100) : 0;

    return { q4Sales, growth };
  };

  const quarterlyData = calculateQuarterlySales();
  const regionalData = calculateRegionalData();
  const salesData = calculateTotalSales();
  const totalCustomers = customersData.length;
  const activeCustomers = customersData.filter(
    (c) => c.status === "active"
  ).length;
  const customerGrowth = Math.round((activeCustomers / totalCustomers) * 100);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl md:text-[32px] font-bold text-[#0D141C]">
            Dashboard
          </h1>
          <p className="text-[#4D7399] pt-4 text-sm">
            Overview of your sales performance and customer interactions.
          </p>
        </div>
        <div>
          <h2 className="text-xl md:text-[22px] font-semibold text-[#0D141C] pt-6 pb-8">
            Sales Performance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Quarterly Sales Chart */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-[#0D141C] mb-4">
                  Quarterly Sales
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl md:text-4xl font-bold text-[#0D141C]">
                    ${salesData.q4Sales.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-600">Last Quarter</span>
                  <span
                    className={`font-medium ${
                      salesData.growth >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {salesData.growth >= 0 ? "+" : ""}
                    {salesData.growth}%
                  </span>
                </div>
              </div>
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={quarterlyData}
                    margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                  >
                    <XAxis
                      dataKey="quarter"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#6B7280" }}
                    />
                    <YAxis hide />
                    <Bar
                      dataKey="sales"
                      fill="#E5E7EB"
                      radius={[4, 4, 0, 0]}
                      maxBarSize={40}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Regional Distribution */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-[#0D141C] mb-4">
                  Customer Distribution by Region
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl md:text-4xl font-bold text-[#0D141C]">
                    {totalCustomers} Customer{totalCustomers !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-600">Active</span>
                  <span className="text-green-600 font-medium">
                    {customerGrowth}%
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                {regionalData.map((item) => (
                  <div key={item.region} className="flex items-center">
                    <div className="w-12 text-sm text-gray-600 font-medium">
                      {item.region}
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className="bg-gray-300 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-16 text-right text-xs text-gray-500">
                      {item.customers} ({item.percentage}%)
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <CustomerOverview />
      </div>
    </div>
  );
};

export default index;
