import Header from "./components/Header";
import ExerciseList from "./components/ExerciseList";

export default function Home() {
  return (
    <main style={{ maxWidth: 460, margin: "0 auto", padding: "32px 16px" }}>
      <Header titulo="Ejercicios" cantidad={4} />
      <ExerciseList />
    </main>
  );
}