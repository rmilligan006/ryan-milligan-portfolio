import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4 bg-[#1594c7]"
    >
      <form
        method="POST"
        action="https://getform.io/f/45a03aee-398d-4319-bd12-edcbef236059"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-500 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the Form to get in touch
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name..."
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="email..."
          name="email"
        />
        <textarea
          name="message"
          rows="10"
          className="bg-[#ccd6f6] p-2"
          placeholder="message..."
        ></textarea>
        <button className="text-white border-2 hover:bg-yellow-500 hover:border-yellow-500 ease-in-out duration-300 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
