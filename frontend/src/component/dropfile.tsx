import React, { useState } from "react";

const FileUpload: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState<number[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files);
      setFiles((prevFiles) => [...prevFiles, ...fileList]);
      setProgress((prevProgress) => [
        ...prevProgress,
        ...Array(fileList.length).fill(0),
      ]);
    }
  };

  const uploadFile = (file: File, index: number) => {
    const interval = setInterval(() => {
      if (progress[index] < 100) {
        setProgress((prevProgress) => {
          const updatedProgress = [...prevProgress];
          updatedProgress[index] += 5; // Increment progress by 5% each time
          return updatedProgress.map((value, idx) =>
            idx === index ? Math.min(value, 100) : value,
          ); // Ensure progress doesn't exceed 100%
        });
      } else {
        clearInterval(interval);
      }
    }, 200); // Update progress every 200 milliseconds
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, idx) => idx !== index));
    setProgress((prevProgress) =>
      prevProgress.filter((_, idx) => idx !== index),
    );
  };

  const handleUpload = () => {
    files.forEach((file, index) => {
      uploadFile(file, index);
    });
  };

  return (
    <div className="grid sm:grid-cols-2 gap-12 max-w-3xl p-4">
      <div className="bg-gray-50 text-center px-4 rounded w-full h-80 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-400 border-dashed font-sans-serif">
        <div className="py-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 mb-2 fill-gray-600 inline-block"
            viewBox="0 0 32 32"
          >
            <path
              d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
              data-original="#000000"
            />
            <path
              d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
              data-original="#000000"
            />
          </svg>
          <h4 className="text-base font-semibold text-gray-600">
            Drag and drop files here
          </h4>
        </div>

        <hr className="w-full border-gray-400 my-2" />

        <div className="py-6">
          <input
            type="file"
            id="uploadFile1"
            className="hidden"
            onChange={handleFileChange}
            multiple
          />
          <label
            htmlFor="uploadFile1"
            className="block px-6 py-2.5 rounded text-gray-600 text-sm tracking-wider cursor-pointer font-semibold border-none outline-none bg-gray-200 hover:bg-gray-100"
          >
            Browse Files
          </label>
          <button
            className="block mt-4 px-6 py-2.5 rounded text-white bg-blue-600 hover:bg-blue-700"
            onClick={handleUpload}
          >
            Upload Files
          </button>
          <p className="text-xs text-gray-400 mt-2">
            PNG, JPG SVG, WEBP, and GIF are Allowed.
          </p>
        </div>
      </div>

      <div>
        <h4 className="text-base text-gray-600 font-semibold">Uploading</h4>
        <div className="space-y-8 mt-4">
          {files.map((file, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex justify-between mb-2">
                <p className="text-sm text-gray-500 font-semibold flex-1">
                  {file.name}{" "}
                  <span className="ml-2">
                    {(file.size / 1024).toFixed(2)} kb
                  </span>
                </p>
                <button
                  onClick={() => handleRemoveFile(index)}
                  className="text-red-600 font-semibold"
                >
                  Remove
                </button>
              </div>
              <div className="bg-gray-300 rounded-full w-full h-2.5">
                <div
                  style={{ width: `${progress[index]}%` }}
                  className="h-full rounded-full bg-blue-600 flex items-center relative"
                >
                  <span className="absolute text-xs right-0.5 bg-white w-2 h-2 rounded-full"></span>
                </div>
              </div>
              <p className="text-sm text-gray-500 font-semibold flex-1 mt-2">
                Uploading: {progress[index]}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
