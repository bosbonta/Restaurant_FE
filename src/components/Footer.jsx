function Footer() {
  return (
    <div>
      <div className="flex flex-col mx-3 bg-white rounded-lg">
        <div className="w-full draggable">
          <div className="container flex flex-col mx-auto">
            <div className="flex flex-col items-center w-full my-20">
              <span className="mb-8">
                <h1 className="lg:text-2xl text-xl uppercase tracking-wider cursor-pointer font-bold">
                  <i className="fas fa-utensils text-teal-500 mr-2"></i>
                  Warung Pojok{" "}
                  <i className="fas fa-utensils text-teal-500 mr-2"></i>
                </h1>
              </span>
              <div className="flex flex-col items-center gap-6 mb-8">
                <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
                  <p>
                    <i class="fa-brands fa-instagram"></i> warngPjok
                  </p>
                  <p>
                  <i class="fa-solid fa-location-dot"></i> JL. Mekasari Blok E No. 3
                  </p>
                  <p>
                  <i class="fa-solid fa-phone"></i> 0822 3413 1234
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-base font-normal leading-7 text-center text-grey-700">
                &copy;2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
