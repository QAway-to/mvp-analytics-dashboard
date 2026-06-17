import Head from "next/head";
import DashboardHeader from "../src/components/DashboardHeader";
import KpiSection from "../src/components/KpiSection";
import ChartPanel from "../src/components/ChartPanel";
import ActivityFeed from "../src/components/ActivityFeed";
import metrics from "../src/mock-data/metrics";

export default function Home() {
  return (
    <>
      <Head>
        <title>Analytics Dashboard</title>
        <meta name="description" content="Analytics dashboard demo — KPIs, charts, and activity feed" />
      </Head>
      <main className="layout">
        <DashboardHeader clientName="Acme Corp" reportPeriod="Last 30 days" />
        <KpiSection kpis={metrics.kpis} />
        <div className="grid">
          <ChartPanel title="Conversion Trend" data={metrics.conversion} />
          <ChartPanel title="User Activity" data={metrics.activity} />
          <ActivityFeed items={metrics.events} />
        </div>
      </main>
    </>
  );
}