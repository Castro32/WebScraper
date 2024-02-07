import Image from "next/image"
const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24 border-2 border-green-500">
        <div className="flex max-xl:flex-col gap-14">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here:
              <Image
                src="/assets/arrow-right.png"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            <h6 className="head-text">
              Unleash the Power of 
              <span className="text-green-500"> Price<br></br>Wise</span>
            </h6>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home