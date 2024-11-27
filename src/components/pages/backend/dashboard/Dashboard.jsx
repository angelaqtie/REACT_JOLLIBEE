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

const Dashboard = () => {
  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="dashboard" />
          <main>
            <Header title="DashBoard" subtitle="Wlcome to Jollibee" />
            <div className="p-8">
              <div className="grid grid-cols-[1fr_400px] gap-5">
                <div className="stats">
                  <div className="grid grid-cols-4 gap-5">
                    <DashboardCard title="Chicken Joy" filterby="Chickenjoy" />
                    <DashboardCard title="Value Meals" filterby="Value Meals" />
                    <DashboardCard title="Burger" filterby="Burger" />
                    <DashboardCard title="Spaghetti" filterby="Spaghetti" />
                    <DashboardCard
                      title="Burger Steak"
                      filterby="Burger Steak"
                    />
                    <DashboardCard title="Desserts" filterby="Desserts" />
                    <DashboardCard title="Palabok" filterby="Palabok" />
                    <DashboardCard
                      title="Fries & Sides"
                      filterby="Fries & Sides"
                    />
                  </div>
                  <div className="chart mt-10">
                    <h3>Menu Charts</h3>
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
                        fill="#8884d8"
                        activeBar={<Rectangle fill="pink" stroke="blue" />}
                      />
                    </BarChart>
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
