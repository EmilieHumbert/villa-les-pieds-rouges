import MyCarousel from "../components/myCarousel";

function Home() {
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

Home.getInitialProps = async () => ({
  namespacesRequired: ["navigation"],
});

export default Home;
