const Restaurants = () => {
  return (
    <div class="flex items-center justify-center h-screen bg-gray-200">
      <div class="container">
        <div class="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
          <div class="text-center">
            <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Restaurants <span class="text-teal-500">Nearby</span>
            </h2>
            <h3 class="text-xl md:text-3xl mt-10">Coming Soon</h3>
            <p class="text-md md:text-xl mt-10">
              <a class="hover:underline" href="https://www.quicktoolz.com">
                The Surf Spots
              </a>{" "}
              is a website that will help you find surf spots, restaurants and
              everything else nearby that you need ! 🏄🏽‍♂️
            </p>
          </div>
          <div class="flex flex-wrap mt-10 justify-center">
            <div class="m-3">
              <a
                href="https://www.facebook.com/QuickToolz"
                title="Quicktoolz On Facebook"
                class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-teal-600 hover:border-teal-600 hover:bg-teal-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              >
                <span class="mx-auto">Facebook</span>
              </a>
            </div>
            <div class="m-3">
              <a
                href="https://twitter.com/quicktoolz"
                title="Quicktoolz On Twitter"
                class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-teal-500 hover:border-teal-500 hover:bg-teal-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              >
                <span class="mx-auto">Twitter</span>
              </a>
            </div>
            <div class="m-3">
              <a
                href="https://pinterest.com/quicktoolz/"
                title="Quicktoolz On Pinterest"
                class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              >
                <span class="mx-auto">Pintrest</span>
              </a>
            </div>
            <div class="m-3">
              <a
                href="https://www.reddit.com/user/quicktoolz/"
                title="Quicktoolz On Facebook"
                class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-orange-500 hover:border-orange-500 hover:bg-orange-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              >
                <span class="mx-auto">Reddit</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
