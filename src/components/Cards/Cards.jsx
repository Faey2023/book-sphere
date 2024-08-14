import books from "@/data/books.json";
import "./card.css";
import Image from "next/image";
import Link from "next/link";

const Cards = () => {
  return (
    <div>
      <div className="grid grid-rows-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-10 space-y-5">
        {/* cards */}
        {books.map((book) => (
          <Link href={`/book/${book.id}`} key={book.id}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Image
                    src={book.cover_image}
                    alt={`image of ${book.title}`}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flip-card-back">
                  <h1 className="text-2xl capitalize mt-5 font-medium px-5">
                    {book.title}
                  </h1>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
