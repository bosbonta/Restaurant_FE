import React from "react";
const menu = [
  {
    name: "Tahu Sambal Bacem",
    price: "25K",
    image:"/src/assets/img/menu-item-1.png",
    description: "Tahu yang diolah dengan bumbu bacem yang khas. Pedas Nagis",
  },
  {
    name: "Lumpia Udang",
    price: "29K",
    image:"/src/assets/img/menu-item-2.png",
    description: "Udang segar yang dibalut dengan kulit lumpia yang renyah",
  },
  {
    name: "Spageti Bolognese",
    price: "35K",
    image:"/src/assets/img/menu-item-3.png",
    description: "Spageti dengan saus bolognese yang gurih dan lezat",
  }, 
 

  // Tambahkan lebih banyak orang jika diperlukan
];
export default function BestSeller() {
  {
    return (
      <div>
        <div className="text-center">
          <h2 className="text-3xl text-teal-500 font-extrabold text-gray-900 sm:text-5xl">
            Tersedia Banyak Menu
          </h2>

          <p className="text-lg mx-auto mt-4 max-w-xl text-gray-500">
            Sesuaikan pilihan menu favoritmu dengan kebutuhan
            <br /> Kami menyediakan berbagai menu andalan yang bisa kamu pilih
          </p>
        </div>
        <div className="bg-white py-4 sm:py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto w-full lg:mx-0">
              <h2
                style={{ color: "Gray" }}
                className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl"
              >
                <i className="fas fa-star text-yellow-500 mr-2"></i>
                Best Seller
              </h2>
            </div>

            <ul
              price="list"
              className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-0 gap-y-0 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              {menu.map((food) => (
                <li key={food.name}>
                  <ul price="list" className="mt-3 flex gap-x-3">
                    <div className="m-2 space-y-2">
                      <div
                        className="group flex flex-col gap-1 rounded-lg p-5 text-gray"
                        tabIndex="1"
                      >
                        <div
                          style={{ width: "320px" }}
                          className="group relative m-0 flex h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg"
                        >
                          <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                            <img
                              src={food.image}
                              className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                              alt={food.name}
                            />
                          </div>
                          <div
                            style={{ backgroundColor: "Gray", width: "70%" }}
                            className="p-3 rounded-xl opacity-60 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100"
                          >
                            <h1 className="text-lg font-bold text-white">
                              {food.name}
                            </h1>
                            <h2 className="text-m font-light text-gray-200">
                              {food.price}
                            </h2>
                          </div>
                        </div>

                        <div className="invisible h-auto max-h-0 p-5 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                          <p style={{ fontSize: ".9em" }}>{food.description}</p>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
