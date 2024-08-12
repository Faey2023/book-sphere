import AddBookForm from "@/components/AddBookForm";

const AddBookPage = () => {
  return (
    <div className="px-10">
      <div className="max-w-2xl mx-auto text-center space-y-2 mb-5">
        <h1 className="text-3xl font-semibold text-rose-800">Add a New Book</h1>
        <p>
          Welcome to the book addition page! Here you can add new books to our
          collection and share your favorite reads with others. Please fill out
          the form below with the details of the book you want to add.
        </p>
      </div>
      <AddBookForm />
    </div>
  );
};

export default AddBookPage;
