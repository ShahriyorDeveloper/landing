import Footer from "../../components/footer";
import Main from "../../components/main";
import PlayStore from "../../components/playStore";

export default function Home() {
  return (
    <div>
      <Main />
      <div className="w-[90%] m-auto">
        <PlayStore />
      </div>
      <Footer />
    </div>
  );
}
