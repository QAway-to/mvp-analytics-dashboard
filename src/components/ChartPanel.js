import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function ChartPanel({ title, data }) {
  return (
    <article className="panel">
      <header>
        <h2>{title}</h2>
        <span className="badge">DEMO</span>
      </header>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorTrend" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#6366F1" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1E1E2E" />
          <XAxis dataKey="label" stroke="#475569" tick={{ fontSize: 11 }} />
          <YAxis stroke="#475569" tick={{ fontSize: 11 }} />
          <Tooltip
            contentStyle={{ background: "#13131A", border: "1px solid #1E1E2E", borderRadius: 6, color: "#E2E8F0", fontSize: 12 }}
            cursor={{ stroke: "#6366F1", strokeWidth: 1 }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#6366F1"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorTrend)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </article>
  );
}