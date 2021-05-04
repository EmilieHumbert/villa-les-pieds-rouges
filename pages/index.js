import Head from "next/head";
import MyCarousel from "../components/myCarousel";

function Home() {
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <MyCarousel
          slideNames={[
            "frontHouse",
            "backHouse",
            "laSud",
            "kitchen",
            "livingroom",
            "livingroomSunset",
          ]}
        />
      </div>
    </main>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ["navigation"],
});

export default Home;
