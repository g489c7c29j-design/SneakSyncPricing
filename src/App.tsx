import React, { useState } from "react";
import Products from "./pages/Products";

type Page = "Dashboard" | "Products" | "Rules" | "Approvals" | "Settings";

const styles: Record<string, React.CSSProperties> = {
  layout: { display: "grid", gridTemplateColumns: "240px 1fr", height: "100vh", background: "#0f172a", color: "#e2e8f0" },
  sidebar: { padding: 16, borderRight: "1px solid #1f2937" },
  brand: { fontSize: 18, fontWeight: 700, marginBottom: 16 },
  navItem: { padding: "10px 8px", borderRadius: 8, cursor: "pointer" as const },
  active: { background: "#1f2937" },
  header: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid #1f2937" },
  h1: { fontSize: 20, fontWeight: 700 },
  content: { padding: 20, overflowY: "auto" as const, height: "calc(100vh - 65px)" },
  grid: { display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" },
  card: { background: "#111827", border: "1px solid #1f2937", borderRadius: 12, padding: 16 },
  label: { fontSize: 12, color: "#93c5fd", letterSpacing: 0.4, marginBottom: 6, textTransform: "uppercase" as const },
  big: { fontSize: 28, fontWeight: 800 },
  row: { display: "flex", gap: 12, marginTop: 12, alignItems: "center" },
  input: { flex: 1, background: "#0b1220", color: "#e2e8f0", border: "1px solid #243244", borderRadius: 8, padding: "10px 12px" },
  button: { background: "#2563eb", border: "1px solid #1d4ed8", color: "#fff", borderRadius: 8, padding: "10px 14px", cursor: "pointer" as const, fontWeight: 700 }
};

function DashboardCards() {
  return (
    <>
      <div style={styles.grid}>
        <div style={styles.card}>
          <div style={styles.label}>Live priced</div>
          <div style={styles.big}>1,248</div>
        </div>
        <div style={styles.card}>
          <div style={styles.label}>Awaiting approval</div>
          <div style={styles.big}>37</div>
        </div>
        <div style={styles.card}>
          <div style={styles.label}>Auto-updated today</div>
          <div style={styles.big}>212</div>
        </div>
        <div style={styles.card}>
          <div style={styles.label}>Flags</div>
          <div style={styles.big}>5</div>
        </div>
      </div>

      <div style={{ ...styles.card, marginTop: 16 }}>
        <div style={styles.label}>Quick price check</div>
        <div style={styles.row}>
          <input style={styles.input} placeholder="Enter Style Code (e.g., CZ0790-110)" />
          <input style={styles.input} placeholder="Condition (NEW or 7–10/10)" />
          <button style={styles.button}>Compute</button>
        </div>
        <div style={{ marginTop: 10, fontSize: 14, color: "#9ca3af" }}>
          Result will show suggested price, comp count, and action (auto / approval).
        </div>
      </div>
    </>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("Dashboard");

  const NavItem = ({ name }: { name: Page }) => (
    <div
      onClick={() => setPage(name)}
      style={{ ...styles.navItem, ...(page === name ? styles.active : {}) }}
    >
      {name}
    </div>
  );

  return (
    <div style={styles.layout}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.brand}>👟 SneakSync</div>
        <NavItem name="Dashboard" />
        <NavItem name="Products" />
        <NavItem name="Rules" />
        <NavItem name="Approvals" />
        <NavItem name="Settings" />
      </aside>

      {/* Main */}
      <main>
        <div style={styles.header}>
          <div style={styles.h1}>{page}</div>
          <div style={{ display: "flex", gap: 8 }}>
            <button style={styles.button}>Sync Now</button>
            <button style={{ ...styles.button, background: "#0ea5e9", borderColor: "#0284c7" }}>Add Product</button>
          </div>
        </div>

        <div style={styles.content}>
          {page === "Dashboard" && <DashboardCards />}
          {page === "Products" && <Products />}
          {page !== "Dashboard" && page !== "Products" && (
            <div style={{ ...styles.card }}>Coming soon: {page}</div>
          )}
        </div>
      </main>
    </div>
  );
}

