import {CustomerReviews,Footer,Hero,PopularProducts,Services,SpecialOffers,Subscribe,Superquality} from "./sections";

import "./App.css";
import Nav from "./components/Nav";


function App() {
  return (
    <main className="relative ">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding"><PopularProducts/></section>
      <section className="padding-x py-10"><Superquality/></section>
      <section className="padding"><Services/></section>
      <section className="padding"><SpecialOffers/></section>
      <section className="padding bg-pale-blue"><CustomerReviews/></section>
      <section className="padding-x sm:py-32 py-16 w-full"><Subscribe/></section>
      <section className="bg-black padding-x padding-t pb-8"><Footer/></section>
    </main>
  );
}

export default App;
