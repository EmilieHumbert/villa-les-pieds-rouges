import MyCarousel from "../components/myCarousel";

export default function Plans() {
  return (
    <main>
      <div>
        <MyCarousel
          numberSlidesBig={1}
          numberSlidesSmall={1}
          slideNames={["ground", "first", "second"]}
        />
      </div>
    </main>
  );
}
