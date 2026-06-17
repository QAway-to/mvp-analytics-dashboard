export default function DashboardHeader({ clientName, reportPeriod }) {
  return (
    <section className="header">
      <div>
        <h1>Analytics — {clientName}</h1>
        <p>Period: {reportPeriod}</p>
      </div>
      <div className="cta">
        <button className="primary">Request Full Access</button>
        <button className="ghost">Download Report</button>
      </div>
    </section>
  );
}