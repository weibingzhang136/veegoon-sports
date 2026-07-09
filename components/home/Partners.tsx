import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";


const partners = [
  {
    title: "Technology Partners",
    items: [
      "Artificial Intelligence",
      "Cloud Computing",
      "IoT Technology",
    ],
  },

  {
    title: "Sports Organizations",
    items: [
      "Sports Events",
      "Training Centers",
      "Athletic Programs",
    ],
  },

  {
    title: "Venue Operators",
    items: [
      "Smart Stadiums",
      "Fitness Spaces",
      "Sports Facilities",
    ],
  },
];


export default function Partners() {
  return (
    <Section className="bg-white">

      <Container>

        <div className="text-center">

          <Badge>
            PARTNERS
          </Badge>


          <h2 className="mt-8 text-4xl font-bold text-gray-900 md:text-6xl">

            Trusted
            <br />
            Ecosystem

          </h2>


          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">

            Connecting technology,
            sports organizations and intelligent venues.

          </p>

        </div>



        <div className="mt-16 grid gap-8 md:grid-cols-3">


          {partners.map((partner)=>(

            <div
              key={partner.title}
              className="
              rounded-3xl
              border
              border-gray-100
              p-8
              "
            >

              <h3 className="text-xl font-bold text-gray-900">
                {partner.title}
              </h3>


              <div className="mt-6 space-y-3">

                {partner.items.map(item=>(

                  <div
                    key={item}
                    className="
                    rounded-xl
                    bg-gray-50
                    px-4
                    py-3
                    text-sm
                    text-gray-600
                    "
                  >
                    {item}
                  </div>

                ))}

              </div>


            </div>

          ))}


        </div>


      </Container>

    </Section>
  );
}