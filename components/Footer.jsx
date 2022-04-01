export default function Footer() {
  return (
    <>
      <div className="w-full py-14 bg-[#0a4d3c]">
        <div className="container mx-auto">
          <div className="my-0">
            <div className="grid grid-cols-4 gap-x-5">
              <div className="col-span-2">
                <div className="my-0">
                  <h3 className="text-3xl text-[#70C54D] font-semibold whitespace-nowrap uppercase">SMP Santa Ursula Bandung</h3>
                  <div className="pt-2 text-white">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 m-2 leading-7 text-xl text-center border border-solid border-[#173412] rounded-full bg-[#173412] text-[#B0F0A1]">
                        <i className="ri-map-pin-fill"></i>
                      </div>
                      <p className="text-base">Jl. Taman Anggrek No.1</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 m-2 leading-7 text-xl text-center border border-solid border-[#173412] rounded-full bg-[#173412] text-[#B0F0A1]">
                        <i className="ri-time-fill"></i>
                      </div>
                      <p className="text-base">Senin - Jumat : 07.00 - 14.00</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 m-2 leading-7 text-xl text-center border border-solid border-[#173412] rounded-full bg-[#173412] text-[#B0F0A1]">
                        <i className="ri-phone-fill"></i>
                      </div>
                      <p className="text-base">(022) 7274584</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 m-2 leading-7 text-xl text-center border border-solid border-[#173412] rounded-full bg-[#173412] text-[#B0F0A1]">
                        <i className="ri-mail-fill"></i>
                      </div>
                      <p className="text-base">smp@santaursula-bdg.sch.id</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="my-0">
                  <h3 className="text-3xl text-[#70C54D] font-semibold whitespace-nowrap uppercase">Sosial Media</h3>
                  <div className="pt-5 space-y-5 text-white">
                    <div className="flex items-center space-x-2">
                      <a href="#" className="text-base hover:underline">
                        Facebook
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <a href="#" className="text-base hover:underline">
                        Instagram
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <a href="#" className="text-base hover:underline">
                        Youtube
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="my-0">
                  <h3 className="text-3xl text-[#70C54D] font-semibold whitespace-nowrap uppercase">Web Terkait</h3>
                  <div className="pt-5 space-y-5 text-white">
                    <div className="flex items-center space-x-2">
                      <a href="#" className="text-base hover:underline">
                        Website Kampus
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <a href="#" className="text-base hover:underline">
                        TB-TK Santa Ursula
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <a href="#" className="text-base hover:underline">
                        SD Santa Ursula
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-6 bg-[#094435]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="pt-6">
              <p className="text-sm text-white">
                &copy; 2022{' '}
                <a href="#" className="text-[#70C54D]">
                  Yayasan Prasama Bhakti
                </a>
              </p>
            </div>
            <div className="copyright-link"></div>
          </div>
        </div>
      </div>
    </>
  )
}
