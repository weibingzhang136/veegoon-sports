import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";


const features = [
  {
    title: "AI Engine",
    description:
      "智能算法驱动体育数据分析与自动化决策。",
  },
  {
    title: "Computer Vision",
    description:
      "通过视觉AI技术理解运动行为与空间环境。",
  },
  {
    title: "Smart Venue",
    description:
      "打造连接设备、用户和运营的数据化体育空间。",
  },
  {
    title: "Digital Experience",
    description:
      "创造更加智能、高效和沉浸式的运动体验。",
  },
];


export default function AISportsVision() {
  return (
    <Section className="bg-white">

      <Container>

        <div className="text-center">

          <Badge>
            AI SPORTS VISION
          </Badge>


          <h2 className="mt-8 text-4xl font-bold text-gray-900 md:text-6xl">

            Intelligence
            <br />
            Powered Sports

          </h2>


          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">

            Veegoon combines artificial intelligence,
            data intelligence and digital technology
            to build the future sports ecosystem.

          </p>


        </div>



        <div className="mt-20 grid gap-8 md:grid-cols-2">


          {features.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-gray-100 bg-gray-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >

              <h3 className="text-2xl font-bold text-gray-900">
                {item.title}
              </h3>


              <p className="mt-4 leading-7 text-gray-600">
                {item.description}
              </p>


            </div>

          ))}


        </div>


      </Container>

    </Section>
  );
}