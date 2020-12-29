import MyCarousel from "../components/myCarousel";

export default function Home() {
  return (
    <main>
      <div>
        <MyCarousel
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
