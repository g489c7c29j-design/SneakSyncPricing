import React from "react";

type Product = {
  id: string;
  title: string;
  sku: string;         // style code
  condition: string;   // NEW or 7–10/10
  price: number;       // current price
  suggested: number;   // suggested price
  action: "auto" | "approve";
};

const data: Product[] = [
  { id: "1", title: "Jordan 1 Retro High OG 'Chicago Lost & Found'", sku: "DZ5485-612", condition: "NEW", price: 420, suggested: 415, action: "auto" },
  { id: "2", title: "Dunk Low 'Panda'", sku: "DD1391-100", condition: "8/10", price: 140, suggested: 135, action: "auto" },
  { id: "3", title: "Yeezy Boost 350 V2 'Zebra'", sku: "CP9654", condition: "9/10", price: 260, suggested: 230, action: "approve" },
  { id: "4", title: "Air Force 1 '07 Triple White", sku: "CW2288-111", condition: "NEW", price: 110, suggested: 110, action: "auto" }
];

const cell: React.CSSProperties = { padding: "10px 12px", borderBottom: "1px solid #1f2937", fontSize: 14 };
const th: React.CSSProperties = { ...cell, color: "#93c5fd", textTransform: "uppercase", fontSize: 12, letterSpacing: 0.4 };
const badge = (kind: "auto" | "approve") => ({
  display: "inline-block",
  padding: "4px 8px",
  borderRadius: 999,
  fontSize: 12,
  background: kind === "auto" ? "#16a34a" : "#eab308",
  color: "#0b1220",
  fontWeight: 700
} as React.CSSProperties);

export default function Products() {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Products</div>
      <div style={{ background: "#111827", border: "1px solid #1f2937", borderRadius: 12, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#0b1220" }}>
            <tr>
              <th style={th}>Title</th>
              <th style={th}>Style</th>
              <th style={th}>Condition</th>
              <th style={th}>Price</th>
              <th style={th}>Suggested</th>
              <th style={th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(p => (
              <tr key={p.id}>
                <td style={cell}>{p.title}</td>
                <td style={cell}>{p.sku}</td>
                <td style={cell}>{p.condition}</td>
                <td style={cell}>${p.price}</td>
                <td style={cell}>${p.suggested}</td>
                <td style={cell}><span style={badge(p.action)}>{p.action === "auto" ? "Auto" : "Approval"}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
