import { useCallback, useState } from 'react';

function Analyze() {
  const [imageName, setImageName] = useState("");
  const [image, setImage] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [tempData, setTempData] = useState(null);

  const handleCreate64 = useCallback(async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await convertToBase64(file);
        setImage(base64);
        setImageName(file.name);
        setFormError(""); // Clear any previous error when a new image is selected
      } catch (error) {
        setErr("Error converting file: " + error);
      }
      e.target.value = "";
    }
  }, []);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const filereader = new FileReader();
      filereader.readAsDataURL(file);
      filereader.onload = () => {
        resolve(filereader.result);
      };
      filereader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setFormError("Please select an image before analyzing.");
      return;
    }

    setLoading(true);
    setFormError(""); // Clear the error once the image is valid
    await new Promise((resolve) => setTimeout(resolve, 1000))
      .then(() => {
        setLoading(false);
        console.log("Done");
        const tempString = `Temporary Data here:  
          Crop Name: 
          Predicted Disease Name: 
          Information about the disease: 
          Action to be taken: 
          Preventative measures: `
        setTempData(tempString);
        
       

      });
  };

  return (
    <form className='flex justify-center items-center' onSubmit={handleSubmit}>
      <div className='bg-gray-200 lg:w-[85%] max-lg:w-full flex flex-col items-center justify-center p-8 m-4 rounded-2xl'>
        <div className='w-full flex lg:flex-row flex-col justify-around my-4'>
          <div className='flex flex-col justify-around items-center rounded-xl w-[40%] max-lg:w-full'>
            <div id='image-preview' className='bg-white rounded-lg border-[1px] border-gray-400 min-w-[200px] w-[100%] max-w-[300px] aspect-square m-4 flex justify-center items-center overflow-hidden'>
              {image ? (
                <img src={image} className='w-full    h-auto' alt="Image Preview" />
              ) : (
                <p>No image selected</p>
              )}
            </div>
            {imageName.length > 0 && <div id='image-name' className='bg-gray-200 p-2 text-gray-700 min-w-[200px] w-[100%] max-w-[300px] text-center'>{imageName}</div>}
            <input
              type='file'
              id='image-upload'
              accept="image/*"
              className='hidden'
              onChange={handleCreate64} // Directly handling onChange event
            />
            <label htmlFor="image-upload" className='border-[1px] border-gray-500 bg-white text-[#5fc321] px-2 py-1 cursor-pointer m-2 rounded-lg hover:bg-[#5fc321] hover:text-white transition-all min-w-[200px] w-[100%] max-w-[300px] text-center'>
              Choose Image
            </label>
            {formError && <div className='text-red-500 mt-4'>{formError}</div>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className='lg:hidden border-[1px] border-green-800 m-4 min-w-[200px] w-[100%] max-w-[300px] self-center bg-[#5fc321] text-white px-4 py-2 rounded-lg'
          >
            {loading ? 'Loading...' : 'Analyze Crop'}
          </button>
          <div id='display-prediction' className='bg-gray-100 border-[1px] border-gray-300 rounded-lg lg:w-[50%] w-full p-4 text-gray-700'>
            The results will be displayed here
            {tempData && <div>{tempData}</div>}
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className='max-lg:hidden border-[1px] border-green-800 mt-4 bg-[#5fc321] text-white px-6 py-2 rounded-lg'
        >
          {loading ? 'Loading...' : 'Analyze Crop'}
        </button>
      </div>
      
      {err && <div className='text-red-500 mt-4'>{err}</div>}
    </form>
  );
}

export default Analyze;
