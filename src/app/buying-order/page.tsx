export default function ThankYo() {
    return (
        <main className="h-screen relative overflow-hidden flex items-center justify-center">
            {/* Full-screen Background SVG */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <svg width="100%" height="100%" viewBox="0 0 890 446" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_579_605)">
                        <ellipse cx="659.5" cy="-428.5" rx="638.5" ry="611.5" fill="url(#paint0_linear_579_605)" />
                    </g>
                    <defs>
                        <filter id="filter0_f_579_605" x="-579" y="-1640" width="2477" height="2423" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="300" result="effect1_foregroundBlur_579_605"/>
                        </filter>
                        <linearGradient id="paint0_linear_579_605" x1="420" y1="-344.5" x2="1003.01" y2="-350.925" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9800"/>
                            <stop offset="0.0001" stop-color="#F6970A"/>
                            <stop offset="0.625" stop-color="#8F5FCD"/>
                            <stop offset="1" stop-color="#E916FB"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
  
            {/* Div to appear on top */}
            <div className="absolute z-20 mt-56 ml-56">
              <p className="font-semibold text-5xl text-center">
                ZAKÚPTE SI PRODUKT VÁŠHO FITNESS CENTRA                    
              </p>  
              <p className="font-regular text-center mt-10">
                Budte najlepšou verziou samého seba
              </p>
            </div>

          

                <div className="relative z-10 grid grid-cols-2 gap-10 p-8">
                <div className="bg-white p-12 rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="text-xl font-bold mb-4">Vstup</h2>
                    <div className="flex items-center mb-2">
                        <svg className="fill-current text-blue-500 w-6 h-6 mr-2" viewBox="0 0 24 24">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.1621 2.05762H5.30211C3.78664 2.05762 2.55811 3.28615 2.55811 4.80162V11.6616C2.55811 13.1771 3.78664 14.4056 5.30211 14.4056H12.1621C13.6776 14.4056 14.9061 13.1771 14.9061 11.6616V4.80162C14.9061 3.28615 13.6776 2.05762 12.1621 2.05762Z" stroke="black" stroke-width="1.176" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.67383 8.23137L8.21733 9.60337L10.7898 6.85938" stroke="black" stroke-width="1.176" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        </svg>
                        <p>Jednorázový vstup</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <svg className="fill-current text-blue-500 w-6 h-6 mr-2" viewBox="0 0 24 24">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.1621 2.05762H5.30211C3.78664 2.05762 2.55811 3.28615 2.55811 4.80162V11.6616C2.55811 13.1771 3.78664 14.4056 5.30211 14.4056H12.1621C13.6776 14.4056 14.9061 13.1771 14.9061 11.6616V4.80162C14.9061 3.28615 13.6776 2.05762 12.1621 2.05762Z" stroke="black" stroke-width="1.176" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.67383 8.23137L8.21733 9.60337L10.7898 6.85938" stroke="black" stroke-width="1.176" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        </svg>
                        <p>Platnosť po dobu 24h </p>

                        <p className="font-bold text-xl">
                          6$/hod
                        </p>
                    </div>
                    <button className="mt-4 text-white bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded flex items-center">
                        <svg className="fill-current w-4 h-4 mr-2" viewBox="0 0 20 20">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.69 2H8.31C4.67 2 2.5 4.17 2.5 7.81V16.18C2.5 19.83 4.67 22 8.31 22H16.68C20.32 22 22.49 19.83 22.49 16.19V7.81C22.5 4.17 20.33 2 16.69 2ZM17.75 12.33C17.75 12.74 17.41 13.08 17 13.08C16.59 13.08 16.25 12.74 16.25 12.33V9.31L8.53 17.03C8.38 17.18 8.19 17.25 8 17.25C7.81 17.25 7.62 17.18 7.47 17.03C7.18 16.74 7.18 16.26 7.47 15.97L15.19 8.25H12.17C11.76 8.25 11.42 7.91 11.42 7.5C11.42 7.09 11.76 6.75 12.17 6.75H17C17.41 6.75 17.75 7.09 17.75 7.5V12.33Z" fill="white"/>
                        </svg>

                        </svg>
                        Poďme na to
                    </button>
                </div>

                {/* Second Card */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="text-xl font-bold mb-4">Permanentka</h2>
                    <div className="flex items-center mb-2">
                        <svg className="fill-current text-green-500 w-6 h-6 mr-2" viewBox="0 0 24 24">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.1621 2.52148H5.30211C3.78664 2.52148 2.55811 3.75001 2.55811 5.26548V12.1255C2.55811 13.641 3.78664 14.8695 5.30211 14.8695H12.1621C13.6776 14.8695 14.9061 13.641 14.9061 12.1255V5.26548C14.9061 3.75001 13.6776 2.52148 12.1621 2.52148Z" stroke="black" stroke-width="1.176" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.67383 8.69524L8.21733 10.0672L10.7898 7.32324" stroke="black" stroke-width="1.176" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        </svg>
                        <p> Jednorázový vstup</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <svg className="fill-current text-green-500 w-6 h-6 mr-2" viewBox="0 0 24 24">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.1621 2.52148H5.30211C3.78664 2.52148 2.55811 3.75001 2.55811 5.26548V12.1255C2.55811 13.641 3.78664 14.8695 5.30211 14.8695H12.1621C13.6776 14.8695 14.9061 13.641 14.9061 12.1255V5.26548C14.9061 3.75001 13.6776 2.52148 12.1621 2.52148Z" stroke="black" stroke-width="1.176" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.67383 8.69524L8.21733 10.0672L10.7898 7.32324" stroke="black" stroke-width="1.176" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        </svg>
                        <p>Platnosť do 24h</p>
                    </div>
                    <button className="mt-4 text-white bg-green-500 hover:bg-green-600 font-bold py-2 px-4 rounded flex items-center">
                        <svg className="fill-current w-4 h-4 mr-2" viewBox="0 0 20 20">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.69 2H8.31C4.67 2 2.5 4.17 2.5 7.81V16.18C2.5 19.83 4.67 22 8.31 22H16.68C20.32 22 22.49 19.83 22.49 16.19V7.81C22.5 4.17 20.33 2 16.69 2ZM17.75 12.33C17.75 12.74 17.41 13.08 17 13.08C16.59 13.08 16.25 12.74 16.25 12.33V9.31L8.53 17.03C8.38 17.18 8.19 17.25 8 17.25C7.81 17.25 7.62 17.18 7.47 17.03C7.18 16.74 7.18 16.26 7.47 15.97L15.19 8.25H12.17C11.76 8.25 11.42 7.91 11.42 7.5C11.42 7.09 11.76 6.75 12.17 6.75H17C17.41 6.75 17.75 7.09 17.75 7.5V12.33Z" fill="white"/>
                        </svg>

                        </svg>

                        <p className="font-bold text-5xl">
                          40$/hod
                        </p>
                        Poďme na to 
                    </button>
                </div>
                
                
            </div>


                
            
          

  
        </main>
    );
}