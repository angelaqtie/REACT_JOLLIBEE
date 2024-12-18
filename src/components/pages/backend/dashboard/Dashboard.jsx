import { ChevronDown, Dot } from "lucide-react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import SideNavigation from "../partials/SideNavigation";
import DashboardCard from "./DashboardCard";
import DashboardAccordion from "./DashboardAccordion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { menus } from "../menu-data";
import useQueryData from "@/components/custom-hook/useQueryData";
import TableLoader from "../partials/TableLoader";
import FetchingSpinner from "@/components/partials/spinner/FetchingSpinner";
import IconNoData from "../partials/IconNoData";

const Dashboard = () => {
  const {
    isLoading: isLoadingCategory,
    isFetching: isFetchingCategory,
    error: errorCategory,
    data: dataCategory,
  } = useQueryData(
    `/v2/category`, //endpoint
    "get", //method
    "category" //key
  );

  const {
    isLoading: isLoadingFood,
    isFetching: isFetchingFood,
    error: errorFood,
    data: dataFood,
  } = useQueryData(
    `/v2/food`, //endpoint
    "get", //method
    "food" //key
  );

  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="dashboard" />
          <main>
            <Header title="DashBoard" subtitle="Wlcome to Jollibee" />
            <div className="p-5 overflow-y-auto custom-scroll">
              <div className="grid grid-cols-[1fr_400px] gap-5">
                <div className="stats">
                  <div className="chart pb-28">
                    <h3>Menu Charts</h3>
                    <ResponsiveContainer width={1200} height={292}>
                      <BarChart
                        width={1200}
                        height={400}
                        data={menus.slice(0, 10)}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="menu_title" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                          dataKey="menu_price"
                          fill="#900603"
                          activeBar={<Rectangle fill="red" stroke="white" />}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="relative">
                    {isFetchingCategory && !isLoadingCategory && (
                      <FetchingSpinner />
                    )}
                    {isLoadingCategory && <TableLoader cols={4} count={20} />}
                    {dataCategory?.count === 0 && <IconNoData />}
                    <div className="grid grid-cols-4 gap-5 mb-3">
                      {dataCategory?.count > 0 &&
                        dataCategory?.data.map((item, key) => {
                          return (
                            <DashboardCard
                              key={key}
                              item={item}
                              dataFood={dataFood}
                            />
                          );
                        })}
                    </div>
                  </div>
                </div>

                <div className="sidebar overflow-auto custom-scroll h-[calc(100vh-200px)]">
                  <DashboardAccordion
                    title="Chicken Joy"
                    filterby="Chickenjoy"
                  />
                  <DashboardAccordion
                    title="Value Meals"
                    filterby="Value Meals"
                  />
                  <DashboardAccordion title="Burger" filterby="Burger" />
                  <DashboardAccordion title="Spaghetti" filterby="Spaghetti" />
                  <DashboardAccordion
                    title="Burger Steak"
                    filterby="Burger Steak"
                  />
                  <DashboardAccordion title="Palabok" filterby="Palabok" />
                  <DashboardAccordion
                    title="Fries & Sides"
                    filterby="Fries & Sides"
                  />
                  <DashboardAccordion title="Desserts" filterby="Desserts" />
                </div>
              </div>
            </div>

            <Footer />
          </main>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
