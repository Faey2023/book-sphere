import books from "@/data/books.json";
import Cards from "../Cards/Cards";

const Featured = () => {
  return (
    <div className="my-10 px-10">
      <div className="max-w-2xl mx-auto text-center space-y-2 mb-5">
        <h1 className="text-3xl font-semibold">Must-Read Gems</h1>
        <p>
          Explore our selection of must-read books. From bestsellers to hidden
          gems, these are the stories everyone’s talking about. Find your next
          great read among our top picks!
        </p>
      </div>
      {/* <div className="grid grid-cols-3 gap-5">
        {books.map((book) => (
          <div>{book.title}</div>
        ))}
      </div> */}
      <Cards />
    </div>
  );
};

export default Featured;
