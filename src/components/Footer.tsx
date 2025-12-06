// Payment Logo Components
const MastercardLogo = () => (
  <div className="flex items-center justify-center w-14 h-9 bg-white rounded-sm overflow-hidden">
    <div className="relative w-12 h-12">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#EB001B]"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#F79E1B]" style={{ marginRight: '-2px' }}></div>
    </div>
  </div>
);

const VisaLogo = () => (
  <div className="flex items-center justify-center w-16 h-9 bg-white rounded-sm px-2">
    <span className="text-[#1434CB] font-bold text-sm tracking-wider">VISA</span>
  </div>
);

const AmexLogo = () => (
  <div className="flex items-center justify-center w-24 h-9 bg-[#006FCF] rounded-sm px-2">
    <span className="text-white font-semibold text-[9px] leading-tight tracking-tight">AMERICAN EXPRESS</span>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-background text-foreground pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Section 1: Our Products */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 text-foreground">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  Our menus
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  Our burgers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  Our times sides
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  Our naandwiches
                </a>
              </li>
            </ul>
          </div>

          {/* Section 2: legal information */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 text-foreground">legal information</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  Legal Notice
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact us */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 text-foreground">Contact us</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  Contacts
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  Our addresses
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  Become a Times Square franchisee
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4: We accept */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-4 text-foreground">We accept</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <MastercardLogo />
                <VisaLogo />
              </div>
              <AmexLogo />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
