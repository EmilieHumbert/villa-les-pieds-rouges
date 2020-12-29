import MyCarousel from "../components/myCarousel";

export default function Home() {
  return (
    <main>
      <div>
        <MyCarousel
          numberSlidesBig={3}
          numberSlidesSmall={2}
          slideNames={[
            "bedroom",
            "beachView",
            "houses",
            "livingroom",
            "ocean",
            "stairs",
          ]}
        />
      </div>
    </main>
  );
}
