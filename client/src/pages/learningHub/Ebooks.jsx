import React, { useEffect, useState } from "react";
import Ebook from "../../components/learningHub/Ebook";
import axios from "axios";

const Ebooks = () => {
  const [ebooks, setEbooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:3000/api/ebook/get");
      console.log(data.ebooks);
      setEbooks(data.ebooks);
    };
    fetchData();
  }, []);
  return (
    <div className="md:px-20 px-5">
      <br />
      <br />
      <br />
      <div>
        <h2 className="text-gray-900 text-3xl md:text-5xl mb-14 text-center md:text-left">
          Latest Posts
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="flex-1">
            <div className="w-full h-[250px] md:h-[350px] relative overflow-hidden rounded-lg">
              <img
                src={ebooks[0]?.image}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 my-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-center md:text-left">
                {ebooks[0]?.title}
              </h2>
              <p className="text-gray-800 mb-10 text-center md:text-left">
                {ebooks[0]?.description}
              </p>
              <div className="text-center md:text-left">
                <a
                  href="#"
                  className="px-6 py-3 text-white bg-gray-900 hover:bg-gray-700 transition rounded"
                >
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      {/* Blog Component Section */}
      <div>
        <Ebook ebooks={ebooks} />
      </div>
    </div>
  );
};

export default Ebooks;
