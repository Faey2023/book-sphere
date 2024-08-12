const AddBookForm = () => {
  return (
    <>
      <form className="max-w-xl mx-auto my-5">
        <div className="mb-5 flex gap-5">
          <div>
            <label className="block mb-2 text-sm font-medium">Title</label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg outline-none block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Image</label>
            <input
              type="url"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg outline-none block w-full p-2.5"
              required
            />
          </div>
        </div>
        <div className="mb-5 flex gap-5">
          <div>
            <label className="block mb-2 text-sm font-medium">Author</label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg outline-none block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Genre</label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg outline-none block w-full p-2.5"
              required
            />
          </div>
        </div>
        <div className="mb-5 flex gap-5">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Description
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg outline-none block w-full p-2.5"
              required
              min={50}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Price</label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg outline-none block w-full p-2.5"
              required
            />
          </div>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium">
            Publication Date
          </label>
          <input
            type="date"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg outline-none block w-full p-2.5"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddBookForm;
