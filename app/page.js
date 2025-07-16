import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-4 text-white h-[40vh]">
        <div className="font-bold flex gap-2 justify-center items-center  text-5xl ">
          By Me A Coffee{" "}
          <span>
            <Image src="/tea.gif" alt="" width={88} height={40} />
          </span>
        </div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans adn
          followers. Start now!
        </p>
        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
          >
            Start here
          </button>

          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
          >
            Read more
          </button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto">
        <h2 className="text-2xl font-bold text-center my-14">Your Fans can buy you a Coffee!</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image className=" bg-slate-500 rounded-full p-2" src="/man.gif" alt="" width={88} height={10} />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available to support you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image className=" bg-slate-500 rounded-full p-2 unoptimized" src="/coin.gif" alt="" width={88} height={10} />
            <p className="font-bold">Fans want to contribute</p>
            <p className="text-center">Your fans are willing to contribute financially</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image className=" bg-slate-500 rounded-full p-2 unoptimized" src="/group.gif" alt="" width={88} height={10} />
            <p className="font-bold">Fans want to collaborate</p>
            <p className="text-center">Your fans are ready to collaborate with you</p>
          </div>
        </div>
      </div>

    </>
  );
}
