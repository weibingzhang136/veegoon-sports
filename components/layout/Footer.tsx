import Logo from "@/components/branding/Logo";
import Container from "@/components/ui/Container";


const products = [
  "Smart Venue OS",
  "AI Sports Analytics",
  "Digital Athlete",
  "Sports Cloud Platform",
];


const company = [
  "About",
  "Solutions",
  "Cases",
  "Contact",
];


export default function Footer() {
  return (
    <footer className="bg-[#0B1020] text-white">

      <Container>

        <div className="grid gap-12 py-16 md:grid-cols-4">


          {/* Brand */}

          <div className="md:col-span-2">

            <Logo />

            <p className="mt-6 max-w-md text-gray-400 leading-7">

              AI-powered sports technology platform
              building the future of intelligent sports.

            </p>

          </div>



          {/* Products */}

          <div>

            <h3 className="font-semibold">
              Products
            </h3>


            <ul className="mt-5 space-y-3 text-gray-400">

              {products.map(item => (

                <li key={item}>
                  {item}
                </li>

              ))}

            </ul>

          </div>



          {/* Company */}

          <div>

            <h3 className="font-semibold">
              Company
            </h3>


            <ul className="mt-5 space-y-3 text-gray-400">

              {company.map(item => (

                <li key={item}>
                  {item}
                </li>

              ))}

            </ul>


          </div>


        </div>



        <div
          className="
          border-t
          border-white/10
          py-6
          text-sm
          text-gray-500
          "
        >

          © 2026 Veegoon Sports.
          All Rights Reserved.

        </div>


      </Container>


    </footer>
  );
}