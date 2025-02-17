import Footer1 from "../../../img/img4.png";
import Footer2 from "../../../img/img5.png";
import Button from "../Button";
function Footer() {
  return (
    <div className="h-screen w-screen flex items-center flex-col bg-background">
      <div
        style={{ backgroundImage: `url(${Footer1})` }}
        className="h-2/3 w-full bg-no-repeat bg-cover flex p-8 xl:p-32 xl:items-center justify-between flex-col xl:flex-row"
      >
        <span className="anton italic  uppercase text-6xl xl:text-8xl text-main w-1/6 xl:w-full leading-16 xl:leading-28 text-center xl:text-start tracking-wide xl:tracking-normal md:text-7xl md:leading-20 md:w-full md:pt-40 xl:pt-0">
          Get in touch <br />
          today
        </span>
        <div className="w-full text-center md:pb-20 xl:pb-0">
          <Button>Join Now</Button>
        </div>
      </div>
      <div className=" bg-main flex w-full h-1/3 items-center justify-between overflow-hidden">
        <div className="hanken p-8 xl:p-32">
          <span className="anton text-2xl xl:text-4xl uppercase italic md:text-4xl">
            Quick Links
          </span>
          <ul className="text-lg md:text-2xl mt-4 font-semibold">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
          </ul>
        </div>
        <div className="h-1/3 bg-[#0000000e] hidden xl:block">&nbsp;</div>
        <div className="flex flex-col p-32 hidden xl:block">
          <span className="anton text-4xl italic uppercase">Flex-it-out</span>
          <span className="hanken text-2xl font-semibold">
            <br />
            Your AI-powered fitness tracker. Push harder, level up, and stay on
            top!
          </span>
        </div>
        <img src={Footer2} className="h-[70%] xl:h-[80%] xl:mr-10 mt-28" />
      </div>
    </div>
  );
}

export default Footer;
