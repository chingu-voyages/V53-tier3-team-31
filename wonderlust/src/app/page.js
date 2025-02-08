"use client";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div>
      <main>
        <section className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>

          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/2 mb-12 md:mb-0">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Explore.
                  <br />
                  Plan.
                  <br />
                  Discover.
                </h1>
                <p className="text-xl mb-8 text-white">
                  Transform your travel dreams into reality with personalized
                  itineraries and expert recommendations tailored just for you..
                </p>
                <div className="flex cursor-pointer flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    onClick={() => redirect("/auth/signin")}
                    className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition duration-300 text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              <div className="w-full md:w-1/2 md:pl-12">
                <div className="bg-slate-800 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                  <h2 className="text-2xl font-semibold mb-6">
                    Why Wonderlust?
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <svg
                        className="w-6 h-6 mr-3 text-yellow-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                      <span>
                        Seamless Itinerary Planning: Effortlessly organize your
                        trips.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-6 h-6 mr-3 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                      <span>
                        Local Insights: Discover hidden gems from locals.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-6 h-6 mr-3 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        ></path>
                      </svg>
                      <span>
                        Real-Time Updates: Stay informed with live travel
                        alerts.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="white"
              />
            </svg>
          </div>
        </section>
      </main>
      <section id="Gallery Section" className="bg-zinc-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="md:w-2/3 lg:w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-secondary"
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h2 className="my-8 text-2xl font-bold text-black md:text-4xl">
              Explore Our Gallery
            </h2>
            <p className="text-black dark:text-gray-900">
              Capture the Journey Experience the essence of travel through
              stunning visuals. From vibrant street scenes to serene landscapes,
              our gallery showcases the beauty and diversity of destinations
              around the world.
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
          <div className="flex flex-col sm:flex-row mx-auto">
            <a>
              {" "}
              <img
                src="https://images.unsplash.com/photo-1737332147522-b1aca590c957?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />{" "}
            </a>
            <a>
              {" "}
              <img
                src="https://images.unsplash.com/photo-1719124724315-5cc04a47b072?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />{" "}
            </a>
            <a>
              {" "}
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />{" "}
            </a>
            <a>
              {" "}
              <img
                src="https://images.unsplash.com/photo-1709464973748-15ca6633f436?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />{" "}
            </a>
          </div>
        </div>
      </section>
      <section id="Team Info" className="my-10">
        <div className="text-center mb-20">
          <h1 className=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
          Our Team
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Meet the brains These people work on making our product best.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-y-14 max-w-3xl mx-auto lg:max-w-full ">
                <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                    <div className="relative mb-5">
                        <img src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Photos.png" alt="Marvin image" className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"/>
                    </div>
                    <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">Zarrar Hussain ABid</h4>
                    <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">Developer</span>
                </div>
            </div>
      </div>
      </section>
    </div>
  );
}
