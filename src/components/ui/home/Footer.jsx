import Footer1 from "../../../img/img4.png";
import Footer2 from "../../../img/img5.png";
import Button from "../Button";
function Footer() {
  return (
    <div className="h-screen w-screen flexitems-center flex-col bg-background">
      <div
        style={{ backgroundImage: `url(${Footer1})` }}
        className="h-2/3 w-full bg-no-repeat bg-cover flex p-32 items-center justify-between"
      >
        <span className="anton italic  uppercase text-8xl text-main">
          Get in touch <br />
          today
        </span>
        <div className="justify-self-end mr-32">
          <Button>Join Now</Button>
        </div>
      </div>
      <div className=" bg-main flex w-full h-1/3 items-center justify-between overflow-hidden">
        <div className="hanken p-32">
          <span className="anton text-4xl uppercase italic">Quick Links</span>
          <ul className="text-2xl mt-4 font-semibold">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
          </ul>
        </div>
        <div className="h-1/3 bg-[#0000000e] ">&nbsp;</div>
        <div className="flex flex-col p-32">
          <span className="anton text-4xl italic uppercase">Flex-it-out</span>
          <span className="hanken text-2xl font-semibold">
            Your AI-powered fitness tracker. Push harder, level up, and stay on
            top!
          </span>
        </div>
        <img src={Footer2} className="h-[80%] mr-10 mt-28" />
      </div>
    </div>
  );
}

export default Footer;
