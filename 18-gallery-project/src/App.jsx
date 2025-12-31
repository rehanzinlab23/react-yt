import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=20`
      );
      setUserData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="h-screen bg-black text-white">
      {/* Images */}
      <div className="flex flex-wrap gap-4 p-4 justify-center h-[80%]">
        {loading ? (
          <h3 className="text-gray-300 font-bold text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Loading...
          </h3>
        ) : (
          userData.map((elem) => (
            <a key={elem.id} href={elem.url} target="_blank" rel="noreferrer">
              <div className="h-40 w-44 rounded-xl overflow-hidden">
                <img
                  src={elem.download_url}
                  alt={elem.author}
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="font-bold text-sm mt-2 text-center">
                {elem.author}
              </h2>
            </a>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 p-4">
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={() => index > 1 && setIndex(index - 1)}
          className="bg-amber-500 text-black font-bold text-sm px-4 py-2 rounded-2xl active:scale-95 cursor-pointer"
        >
          Prev
        </button>
        <h4 className="text-medium font-bold">Page {index}/50</h4>
        <button
          style={{ opacity: index == 50 ? 0.5 : 1 }}
          onClick={() => setIndex(index + 1)}
          className="bg-amber-500 text-black font-bold text-sm px-4 py-2 rounded-2xl active:scale-95 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
