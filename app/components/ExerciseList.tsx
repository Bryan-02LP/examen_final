"use client";
import { useState } from "react";
import ExerciseCard from "./ExerciseCard";

const ejercicios = [
  { id: 1, nombre: "Puxada frontal",      series: 3, reps: 12, emoji: "🏋️" },
  { id: 2, nombre: "Remada curvada",      series: 3, reps: 12, emoji: "💪" },
  { id: 3, nombre: "Remada unilateral",   series: 3, reps: 12, emoji: "🤸" },
  { id: 4, nombre: "Levantamento terra",  series: 3, reps: 12, emoji: "🔥" },
];

export default function ExerciseList() {
  const [seleccionado, setSeleccionado] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {ejercicios.map((ej) => (
        <ExerciseCard
          key={ej.id}
          nombre={ej.nombre}
          series={ej.series}
          reps={ej.reps}
          emoji={ej.emoji}
          activo={seleccionado === ej.id}
          onClick={() => setSeleccionado(seleccionado === ej.id ? null : ej.id)}
        />
      ))}
    </div>
  );
}