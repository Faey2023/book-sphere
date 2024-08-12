import books from "@/data/books.json";
import Image from "next/image";

const BookPage = ({ params }) => {
  const { id } = params;
  console.log(id);
  const book = books.find((book) => book.id == id);

  //   destructured book
  const {
    title,
    author,
    description,
    genre,
    publication_date,
    cover_image,
    rating,
    price,
  } = book || {};

  return (
    <div className="px-10 my-10 flex gap-10">
      <Image
        src={cover_image}
        alt={`cover image for ${title}`}
        width={400}
        height={400}
        className="h-full max-w-[300px]"
        placeholder="blur"
        blurDataURL={cover_image}
      />
      <div className="space-y-3 text-xl w-2/3">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p>
          <span className="font-semibold">By</span>
          <span className="italic"> {author}</span>
        </p>
        <p>
          <span className="font-bold"> Price:</span> ${price}
        </p>
        <p>
          <span className="font-bold"> Publication Date:</span>{" "}
          {publication_date}
        </p>
        <p>
          <span className="font-bold"> Rating:</span>
          {rating}
        </p>
        <p>
          <span className="font-bold"> Genre:</span> {genre}
        </p>
        <p>
          <span className="font-bold">Description:</span> {description}
        </p>
      </div>
    </div>
  );
};

export default BookPage;
