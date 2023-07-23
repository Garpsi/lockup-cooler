import React, { useState } from 'react';

const Form1 = ({ onNext }) => {
  return (
    <div>
      <h2 className='text-white'>Select Chain</h2>
      {/* Your Form fields here */}
      {/* <button onClick={onNext}>Next</button> */}
      <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-700">Full name</span>
                <input type="text" class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  " placeholder=""/>
              </label>
              <label class="block">
                <span class="text-gray-700">Email address</span>
                <input type="email" class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  " placeholder="john@example.com"/>
              </label>
              <label class="block">
                <span class="text-gray-700">When is your event?</span>
                <input type="date" class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "/>
              </label>
              <label class="block">
                <span class="text-gray-700">Additional details</span>
                <textarea class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  " rows="3"></textarea>
              </label>
              <div class="block">
                <div class="mt-2">
                  <div>
                    <label class="inline-flex items-center">
                      <input type="checkbox" class="
                          rounded
                          bg-gray-200
                          border-transparent
                          focus:border-transparent focus:bg-gray-200
                          text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
                        "/>
                      <span class="ml-2">Email me news and special offers</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
      <button type="button" onClick={onNext} class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Purple to Pink</button>
    </div>
  );
};

const Form2 = ({ onNext, onBack }) => {
  return (
    <div>
      <h2 className='text-white'>Select Lock Type</h2>
      {/* Your Form fields here */}
      <label class="block">
                <span class="text-gray-700">What type of event is it?</span>
                <select class="
                    block
                    w-full
                    mt-1
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  ">
                  <option>Corporate event</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
      </label>
      <button type="button" onClick={onBack} class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Pink to Orange</button>
      <button type="button" onClick={onNext} class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Purple to Pink</button>
    </div>
  );
};

const Form3 = ({ onNext, onBack }) => {
  return (
    <div>
      <h2 className='text-white'>Configure</h2>
      {/* Your Form fields here */}
      <button type="button" onClick={onBack} class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Pink to Orange</button>
      <button type="button" onClick={onNext} class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Purple to Pink</button>
    </div>
  );
};

const MainForm = () => {
  const [formStep, setFormStep] = useState(0);

  const handleNext = () => setFormStep(formStep + 1);
  const handleBack = () => setFormStep(formStep - 1);
  const handleSubmit = () => {
    // Your API call here
    console.log('Form submitted');
  };


  switch (formStep) {
    case 0:
      return <Form1 onNext={handleNext} />;
    case 1:
      return <Form2 onNext={handleNext} onBack={handleBack} />;
    case 2:
      return <Form3 onBack={handleBack} onSubmit={handleSubmit} />;
    default:
      return null;
  }
};

export default MainForm;