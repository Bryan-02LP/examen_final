type Props = {
  titulo: string;
  cantidad: number;
};

export default function Header({ titulo, cantidad }: Props) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
      <div>
        <p style={{ color: "#a3a3a3", fontSize: 12, margin: 0 }}>info</p>
        <h1 style={{ color: "#f5f5f5", fontSize: 22, fontWeight: 700, margin: "4px 0 2px" }}>
          {titulo}
        </h1>
        <p style={{ color: "#a3a3a3", fontSize: 12, margin: 0 }}>item</p>
      </div>
      <span style={{ color: "#a3a3a3", fontSize: 20, fontWeight: 600 }}>
        {cantidad}
      </span>
    </div>
  );
}