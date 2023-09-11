import React from 'react';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';

const Cards = ({ scroll }) => {
  const navigate = useNavigate();

  return (
    <>
      <h2 ref={scroll} className="text-center font-bold text-4xl mb-2 mt-40">Graphs</h2>
      <div className="flex flex-wrap justify-between mt-20">
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 flex-row w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="px-6 py-4 bg-white">
            <h3 className="font-bold text-xl mb-2 text-blue-900 text-center">CO2 graph</h3>
            <p className="text-base text-left text-blue-900">
              Data on carbon dioxide (CO2) present in the Earth's atmosphere from past years to the present year.
            </p>
            <div className="px-6 py-4">
              <Button text="Load graph" onClick={() => navigate("co2")} />
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 flex-row w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="px-6 py-4 bg-white">
            <h3 className="font-bold text-xl mb-2 text-blue-900 text-center">Temperature graph</h3>
            <p className="text-base text-left text-blue-900">
              Data on temperature variations from past years to the present year.
            </p>
            <div className="px-6 py-4">
              <Button text="Load graph" onClick={() => navigate("temperature")} />
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 flex-row w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="px-6 py-4 bg-white">
            <h3 className="font-bold text-xl mb-2 text-blue-900 text-center">Methane graph</h3>
            <p className="text-base text-left text-blue-900">
              Data on the rise in sea levels from past years to the present year.
            </p>
            <div className="px-6 py-4">
              <Button text="Load graph" onClick={() => navigate("methane")} />
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 flex-row w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="px-6 py-4 bg-white text-blue-900">
            <h3 className="font-bold text-xl mb-2 text-blue-900 text-center">NO2 graph</h3>
            <p className="text-base text-left text-blue-900">
              Data on the increase in frequency and intensity of extreme weather events from past years to the present year.
            </p>
            <div className="px-6 py-4">
              <Button text="Load graph" onClick={() => navigate("no2")} />
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 flex-row w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="px-6 py-4 bg-white">
            <h3 className="font-bold text-xl mb-2 text-blue-900 text-center">Polar ice graph</h3>
            <p className="text-base text-left text-blue-900">
              Data on carbon dioxide (CO2) present in the Earth's atmosphere from past years to the present year.
            </p>
            <div className="px-6 py-4">
              <Button text="Load graph" onClick={() => navigate("polarice")} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
