import { StarIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

const features = [
  {
    icon: "https://c.animaapp.com/R1S5Jkfz/img/cards-icon.svg",
    title: "Customizable card",
    description:
      "Custom your own card for your exact incomes and expenses needs.",
  },
  {
    icon: "https://c.animaapp.com/R1S5Jkfz/img/coin-icon.svg",
    title: "No payment fee",
    description:
      "Transfer your payment all over the world with no payment fee.",
  },
  {
    icon: "https://c.animaapp.com/R1S5Jkfz/img/vector-3.svg",
    title: "All in one place",
    description:
      "The right place to keep your credit and debit cards, boarding passes & more.",
  },
];

export const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center relative bg-[#2b2b2b] min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="relative w-full flex items-center justify-between p-4 sm:px-6 md:px-[50px] md:h-[100px] max-w-[1440px] mx-auto">
        <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#ffffff] text-lg sm:text-xl md:text-2xl">
          Wallet
        </div>
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <Button variant="ghost" className="text-white text-sm sm:text-base px-2 sm:px-4">
            Sign up
          </Button>
          <Button className="bg-[#bfaff2] text-[#333333] hover:bg-[#bfaff2]/90 text-sm sm:text-base px-3 sm:px-4">
            Log in
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full max-w-[1440px] mx-auto px-4 py-8 sm:px-6 md:px-[100px] md:py-[77px]">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12">
          <div className="flex flex-col gap-6 md:gap-8 max-w-[600px]">
            <h1 className="font-headline-60px text-white text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight lg:leading-[90px]">
              SaaS Landing <br className="hidden sm:block" /> Page Template
            </h1>
            <p className="text-white opacity-40 max-w-[461px] text-sm sm:text-base">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
            <Button className="w-[175px] bg-[#f8d57e] text-[#333333] hover:bg-[#f8d57e]/90">
              Get started
            </Button>
          </div>
          <div className="w-full lg:w-[500px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[446px] rounded-[20px] bg-[#333333] bg-[url(https://cdn.animaapp.com/projects/6244654aadb8856e2018d330/files/1000x892.gif)] bg-cover bg-center" />
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative w-full border-y border-white/20">
        <div className="overflow-hidden w-full">
          <div className="flex justify-center items-center h-[100px] sm:h-[120px] md:h-[170px]">
            <img
              className="max-w-none w-auto h-[36px] sm:h-[45px] md:h-[50px] animate-slide"
              alt="Partner logos"
              src="https://c.animaapp.com/R1S5Jkfz/img/logos.png"
            />
          </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section className="relative w-full max-w-[1440px] mx-auto p-4 sm:p-6 md:p-[100px]">
        <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-[20px] bg-[#fdf5df] bg-[url(https://c.animaapp.com/R1S5Jkfz/img/image.png)] bg-cover bg-center" />
      </section>

      {/* Features Section */}
      <section className="relative w-full max-w-[1440px] mx-auto py-8 px-4 sm:px-6 md:py-[50px] md:px-[123px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[50px]">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-transparent border-none text-center"
            >
              <CardContent className="pt-0">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] mx-auto mb-6 md:mb-8"
                />
                <h3 className="text-white font-body-bold-18px mb-3 md:mb-4 text-base md:text-lg">
                  {feature.title}
                </h3>
                <p className="text-white opacity-40 text-sm md:text-base">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative w-full max-w-[1440px] mx-auto py-6 px-4 sm:px-6 md:py-[30px] md:px-[100px]">
        <Card className="w-full h-auto bg-[#bfaff2] p-4 sm:p-6 md:p-[40px]">
          <CardContent className="p-0">
            <div className="flex flex-col items-start gap-6 md:gap-8">
              <p className="text-[#2b2b2b] font-secondary-body-semi-bold-24px text-lg sm:text-xl md:text-2xl max-w-[756px]">
                "Wallet is a great product! All of my most important information
                is there - credit cards, transit cards, boarding passes,
                tickets, and more. And I don't need to worry because it's all in
                one place! thanks!"
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <img
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-[#bcbcbc]"
                  alt="Johnny Owens"
                  src="https://c.animaapp.com/R1S5Jkfz/img/mask-group.png"
                />
                <div className="flex flex-col">
                  <span className="text-[#2b2b2b] opacity-40 text-sm md:text-base">
                    Johnny Owens
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 md:w-5 md:h-5 text-[#2b2b2b]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section className="relative w-full max-w-[1440px] mx-auto px-4 py-8 sm:px-6 md:px-[100px] md:py-[100px]">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12">
          <div className="flex flex-col gap-6 md:gap-8 max-w-[600px]">
            <h2 className="font-headline-60px text-white text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight lg:leading-[90px]">
              Questions? <br className="hidden sm:block" />
              Let's talk
            </h2>
            <p className="text-white opacity-40 max-w-[400px] text-sm sm:text-base">
              Contact us through our 24/7 live chat.
              <br />
              We're always happy to help!
            </p>
            <Button className="w-[175px] bg-[#f8d57e] text-[#333333] hover:bg-[#f8d57e]/90">
              Get started
            </Button>
          </div>
          <img
            className="w-full lg:w-[500px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-[20px]"
            alt="Contact illustration"
            src="https://cdn.animaapp.com/projects/630dc37cacb332ac4dee2e04/files/1000x800.gif"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full border-t border-white/20">
        <div className="max-w-[1440px] mx-auto px-4 py-8 sm:px-6 md:px-[50px] md:py-[50px]">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
            <div className="flex flex-col gap-6 md:gap-11">
              <div className="[font-family:'Poppins',Helvetica] font-semibold text-white text-lg sm:text-xl md:text-2xl">
                Wallet
              </div>
              <div className="flex flex-wrap gap-4 md:gap-[30px] text-white text-sm md:text-base">
                <span>© Wallet 2022</span>
                <Button variant="link" className="text-white p-0 h-auto">
                  Privacy policy
                </Button>
                <Button variant="link" className="text-white p-0 h-auto">
                  Cookies policy
                </Button>
                <Button variant="link" className="text-white p-0 h-auto">
                  Terms of use
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-white text-base md:text-lg">Updates right to your Inbox</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  className="w-full sm:w-[301px] bg-[#333333] border-none text-white placeholder:text-white/40"
                  placeholder="Email Address"
                />
                <Button className="w-full sm:w-[175px] bg-[#bfaff2] text-[#333333] hover:bg-[#bfaff2]/90">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
