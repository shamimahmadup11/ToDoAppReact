import  { useState, useContext } from 'react';
import { MyContext } from '../Context/UseContext';

const ImageSlider = () => {
    const { contextState } = useContext(MyContext);
    const { images } = contextState;
    const [slide, setSlide] = useState(0);

    function backbtn() {
        setSlide((back) => back === 0 ? images.length - 1 : back - 1);
    }

    function nextbtn() {
        setSlide((back) => back === images.length - 1 ? 0 : back + 1);
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">Image Slider</h1>
            <img src={images[slide]} alt="" className="mb-4 w-1/2 h-1/2 rounded-md" />
            <div className="flex space-x-4">
                <button onClick={backbtn} className='bg-slate-700 text-white px-4 py-2 rounded-md'>Previous</button>
                <button onClick={nextbtn} className='bg-slate-700 text-white px-4 py-2 rounded-md'>Next</button>
            </div>
        </div>
    );
};

export default ImageSlider;
