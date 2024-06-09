import { useContext, useState } from "react";
import { MyContext } from "../Context/UseContext";

const Showhide = () => {
  const { contextState } = useContext(MyContext);
  const { images,auth } = contextState;
  const [para, setPara] = useState(false);

  let description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus autem architecto adipisci maiores eius accusamus, nesciunt dicta aut in recusandae?"

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-14">
      <div className="bg-gray-200 p-8 rounded-lg shadow-md w-1/2">
        {para ? (
          <button
            onClick={() => setPara(!para)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Hide
          </button>
        ) : (
          <button
            onClick={() => setPara(!para)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Show
          </button>
        )}
        <p className="mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing ...{" "}
        </p>
        {para && <h1 className="mt-4">{description}</h1>}
      </div>
      <img src={images[0]} alt="Example" className=" h-1/3 w-1/3"/>
      <h1>{auth[0].name}</h1>
      <h1>{auth[0].email}</h1>
    </div>
  );
};

export default Showhide;
