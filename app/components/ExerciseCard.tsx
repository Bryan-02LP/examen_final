type Props = {
  nombre: string;
  series: number;
  reps: number;
  emoji: string;
  activo: boolean;
  onClick: () => void;
};

export default function ExerciseCard({ nombre, series, reps, emoji, activo, onClick }: Props) {
  return (
    <div>
      <p style={{ color: "#a3a3a3", fontSize: 11, marginBottom: 6 }}>item</p>
      <div
        onClick={onClick}
        style={{
          background: "#1e1e1e",
          border: `1px solid ${activo ? "#c026d3" : "#2a2a2a"}`,
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "12px 14px",
          cursor: "pointer",
        }}
      >
        {/* Ícono */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 8,
            background: "#2a2a2a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            flexShrink: 0,
          }}
        >
          {emoji}
        </div>

        {/* Texto */}
        <div style={{ flex: 1 }}>
          <p style={{ color: "#f5f5f5", fontWeight: 600, margin: 0, fontSize: 15 }}>
            {nombre}
          </p>
          <p style={{ color: "#a3a3a3", fontSize: 13, margin: "4px 0 0" }}>
            {series} series x {reps} repeticiones
          </p>
        </div>

        {/* Flecha */}
        <div
          style={{
            width: 30,
            height: 30,
            border: `1px solid ${activo ? "#c026d3" : "#2a2a2a"}`,
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke={activo ? "#c026d3" : "#a3a3a3"} strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}