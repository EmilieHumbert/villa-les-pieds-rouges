import MyCarousel from "../components/myCarousel";

export default function Plans() {
  return (
    <main>
      <div>
        <MyCarousel slideNames={["ground", "first", "second"]} />
      </div>
    </main>
  );
}
