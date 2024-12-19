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
import { getCategoryPrices } from "./function";
import { data } from "autoprefixer";

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

  const tableData = getCategoryPrices(dataCategory, dataFood);
  console.log(tableData);

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
                  <div className="relative chart pb-16">
                    {(isFetchingCategory || isFetchingFood) &&
                      !isLoadingCategory &&
                      !isLoadingFood && <FetchingSpinner />}
                    {isLoadingCategory || isLoadingFood ? (
                      <TableLoader cols={1} count={15} />
                    ) : (
                      <ResponsiveContainer width={1275} height={400}>
                        <h3>Menu Prices</h3>
                        <BarChart
                          width={500}
                          height={500}
                          // data={menus.slice(0, 10)}
                          data={tableData}
                          margin={{
                            top: 10,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="category_title" interval={0} />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar
                            dataKey="menu_price"
                            fill="#900D09"
                            activeBar={<Rectangle fill="red" stroke="white" />}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    )}
                  </div>
                  <div className="relative">
                    {isFetchingCategory && !isLoadingCategory && (
                      <FetchingSpinner />
                    )}
                    {isLoadingCategory && <TableLoader cols={4} count={10} />}
                    {dataCategory?.count === 0 && <IconNoData />}
                    <div className="grid grid-cols-4 gap-5">
                      {dataCategory?.count > 0 &&
                        dataCategory.data.map((item, key) => (
                          <DashboardCard
                            key={key}
                            item={item}
                            dataFood={dataFood}
                          />
                        ))}
                    </div>
                  </div>
                </div>

                <div className="sidebar overflow-auto custom-scroll h-[calc(100vh-200px)] relative">
                  {isFetchingCategory && <TableLoader cols={1} count={15} />}
                  {dataCategory?.count === 0 && <IconNoData />}
                  {dataCategory?.count > 0 &&
                    dataCategory?.data.map((item, key) => {
                      return (
                        <DashboardAccordion
                          key={key}
                          item={item}
                          dataFood={dataFood}
                        />
                      );
                    })}

                  {/* <DashboardAccordion
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
                  <DashboardAccordion title="Desserts" filterby="Desserts" /> */}
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
