export default function Home() {
  return (
    <div key="1" className="dark min-h-screen flex flex-col">
      <header className="bg-gray-800 p-4 dark:bg-gray-950 flex flex-col md:flex-row justify-between items-start md:items-center">
        <h1 className="font-bold text-2xl text-white mb-4 md:mb-0">
          Overwatch 2 Counters List
        </h1>
        <div className="flex justify-center items-center gap-2 mb-4 md:mb-0">
          <img
            alt="Mauga"
            className="object-cover w-10 h-10 rounded-full cursor-pointer hover:scale-110 transition-transform duration-200"
            height={50}
            src="https://i.imgur.com/yQaHQkH.jpeg"
            style={{
              aspectRatio: "50/50",
              objectFit: "cover",
            }}
            width={50}
          />
          <img
            alt="Junkerqueen"
            className="object-cover w-10 h-10 rounded-full cursor-pointer hover:scale-110 transition-transform duration-200"
            height={50}
            src="https://i.imgur.com/8C3LGCN.jpeg"
            style={{
              aspectRatio: "50/50",
              objectFit: "cover",
            }}
            width={50}
          />
          <img
            alt="Ramattra"
            className="object-cover w-10 h-10 rounded-full cursor-pointer hover:scale-110 transition-transform duration-200"
            height={50}
            src="https://i.imgur.com/rZD4g1t.jpeg"
            style={{
              aspectRatio: "50/50",
              objectFit: "cover",
            }}
            width={50}
          />
        </div>
        <div className="flex gap-4">
          <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors duration-200">
            Login
          </button>
          <button className="bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors duration-200">
            Tier List
          </button>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6">
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <div className="bg-gray-800 p-4 dark:bg-gray-950">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-xl text-white">Mauga</h3>
              <button className="bg-red-950 text-white rounded-full p-1 m-2 hover:bg-red-600 transition-colors duration-200">
                {`\n                ❤\u{fe0f}\n              `}
              </button>
            </div>
            <img
              alt="Mauga"
              className="object-cover w-full h-64"
              height={400}
              src="https://i.imgur.com/yQaHQkH.jpeg"
              style={{
                aspectRatio: "500/400",
                objectFit: "cover",
              }}
              width={500}
            />
            <h4 className="font-semibold text-lg md:text-xl text-gray-300">
              Counters:
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <img
                  alt="Counter Hero 1"
                  className="object-cover w-10 h-10 rounded-full"
                  height={50}
                  src="https://i.imgur.com/MJKIKkg.png"
                  style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                  }}
                  width={50}
                />
                <span className="text-gray-300">Hero 1</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  alt="Counter Hero 2"
                  className="object-cover w-10 h-10 rounded-full"
                  height={50}
                  src="https://i.imgur.com/MJKIKkg.png"
                  style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                  }}
                  width={50}
                />
                <span className="text-gray-300">Hero 2</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <div className="bg-gray-800 p-4 dark:bg-gray-950">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-xl text-white">Junkerqueen</h3>
              <button className="bg-red-950 text-white rounded-full  p-1 m-2 hover:bg-red-600 transition-colors duration-200">
                {`\n                ❤\u{fe0f}\n              `}
              </button>
            </div>
            <img
              alt="Junkerqueen"
              className="object-cover w-full h-64"
              height={400}
              src="https://i.imgur.com/8C3LGCN.jpeg"
              style={{
                aspectRatio: "500/400",
                objectFit: "cover",
              }}
              width={500}
            />
            <h4 className="font-semibold text-lg md:text-xl text-gray-300">
              Counters:
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <img
                  alt="Counter Hero 1"
                  className="object-cover w-10 h-10 rounded-full"
                  height={50}
                  src="https://i.imgur.com/MJKIKkg.png"
                  style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                  }}
                  width={50}
                />
                <span className="text-gray-300">Hero 1</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  alt="Counter Hero 2"
                  className="object-cover w-10 h-10 rounded-full"
                  height={50}
                  src="https://i.imgur.com/MJKIKkg.png"
                  style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                  }}
                  width={50}
                />
                <span className="text-gray-300">Hero 2</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <div className="bg-gray-800 p-4 dark:bg-gray-950">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-xl text-white">Ramattra</h3>
              <button className="bg-red-950 text-white rounded-full  p-1 m-2 hover:bg-red-600 transition-colors duration-200">
                {`\n                ❤\u{fe0f}\n              `}
              </button>
            </div>
            <img
              alt="Ramattra"
              className="object-cover w-full h-64"
              height={400}
              src="https://i.imgur.com/rZD4g1t.jpeg"
              style={{
                aspectRatio: "500/400",
                objectFit: "cover",
              }}
              width={500}
            />
            <h4 className="font-semibold text-lg md:text-xl text-gray-300">
              Counters:
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <img
                  alt="Counter Hero 1"
                  className="object-cover w-10 h-10 rounded-full"
                  height={50}
                  src="https://i.imgur.com/MJKIKkg.png"
                  style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                  }}
                  width={50}
                />
                <span className="text-gray-300">Hero 1</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  alt="Counter Hero 2"
                  className="object-cover w-10 h-10 rounded-full"
                  height={50}
                  src="https://i.imgur.com/MJKIKkg.png"
                  style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                  }}
                  width={50}
                />
                <span className="text-gray-300">Hero 2</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
