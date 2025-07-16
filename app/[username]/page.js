import React from "react";

const username = ({ params }) => {
  return (
    <>
      <div className="cover w-full relative">
        <img className="object-cover w-full h-[350px]" src="./ok.gif" alt="" />
        <div className="absolute -bottom-12 right-[46%]">
          <img
            className="border-2 border-white rounded-full"
            width={100}
            height={100}
            src="./profile.jpeg"
          />
        </div>
      </div>

      <div className="info flex justify-center items-center ml-4 my-13 mb-21 flex-col gap-2">
        <div className="font-bold text-lg">@{params.username}</div>
        <div className="text-slate-400">Develop websites for FUN!</div>
        <div className="text-green-400">
          Bharat Sarkar Ghar Ghar MERN Developer Yojna!!
        </div>

        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
            {/* Show list of all supporters as a leaderboard */}
            <h2 className="text-2xl font-bold my-5">Supporters</h2>
            <ul className="mx-5 text-lg">
              <li className="my-4 flex gap-2 items-center">
                <img width={33} src="./avatar.gif" alt="user avatar"/>
                <span>
                  Shubham donated <span className="font-bold">$30</span> with a message `I support you bro 🫂`
                </span>
              </li>
            </ul>
          </div>

          <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
            <div className="flex gap-2 flex-col">
              <div>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-slate-800"
                  placeholder="Enter Name"
                />
              </div>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Message"
              />
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Amount"
              />

              <button
                type="button"
                className="text-white cursor-pointer bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Pay
              </button>
            </div>
            {/* Or Choose from these amounts*/}
            <div className="flex gap-2 mt-5">
              <button className="bg-slate-800 p-3 rounded-lg cursor-pointer">
                Pay $10
              </button>
              <button className="bg-slate-800 p-3 rounded-lg cursor-pointer">
                Pay $20
              </button>
              <button className="bg-slate-800 p-3 rounded-lg cursor-pointer">
                Pay $30
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default username;
