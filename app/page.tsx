import heroes from "./data/heroes.json";

export default function Home() {
  return (
    <main className="flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 p-4 md:p-6">
      {heroes.map((item) => (
        <div
          key={item.key}
          className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
        >
          <div className="bg-gray-800 p-4 dark:bg-gray-950">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-xl text-white">{item.name}</h3>
              <button className="bg-red-950 text-white rounded-full p-1 m-2 hover:bg-red-600 transition-colors duration-200">
                {`\n                ❤\u{fe0f}\n              `}
              </button>
            </div>
            <img
              alt={item.name}
              className="object-cover w-full h-64"
              height={400}
              src={item.portrait}
              style={{
                aspectRatio: "500/400",
                objectFit: "cover",
              }}
              width={500}
            />
            <h4 className="font-semibold text-lg md:text-xl text-gray-300 my-1">
              Counters:
            </h4>
            <div className="grid grid-cols-4 gap-4">
              {item.counters.map((counters) => (
                <div key={counters + "_counters"} className="flex items-center gap-2">
                  <img
                    alt={heroes.find((element) => element.key === counters)?.name}
                    className="object-cover w-10 h-10 rounded-full"
                    height={50}
                    src={heroes.find((element) => element.key === counters)?.portrait}
                    style={{
                      aspectRatio: "50/50",
                      objectFit: "cover",
                    }}
                    width={50}
                  />
                  <span className="text-gray-300">{heroes.find((element) => element.key === counters)?.name}</span>
                </div>
              ))}
            </div>
            <h4 className="font-semibold text-lg md:text-xl text-gray-300 my-1">
              Countered By:
            </h4>
            <div className="grid grid-cols-4 gap-4">
              {item.countered_by.map((counters) => (
                <div key={counters + "_counters"} className="flex items-center gap-2">
                  <img
                    alt={heroes.find((element) => element.key === counters)?.name}
                    className="object-cover w-10 h-10 rounded-full"
                    height={50}
                    src={heroes.find((element) => element.key === counters)?.portrait}
                    style={{
                      aspectRatio: "50/50",
                      objectFit: "cover",
                    }}
                    width={50}
                  />
                  <span className="text-gray-300">{heroes.find((element) => element.key === counters)?.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
