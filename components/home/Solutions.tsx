import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";


const solutions = [
  {
    title: "Smart Stadium",
    subtitle: "智慧体育场馆",
    description:
      "通过AI、IoT和数据技术，实现体育空间智能化升级。",
  },

  {
    title: "AI Training System",
    subtitle: "AI运动训练系统",
    description:
      "利用人工智能分析运动表现，提升训练效率。",
  },

  {
    title: "Sports Data Platform",
    subtitle: "体育数据平台",
    description:
      "构建体育数据采集、分析和运营基础设施。",
  },
];


export default function Solutions() {
  return (
    <Section className="bg-gray-50">

      <Container>

        <div className="max-w-3xl">

          <Badge>
            SOLUTIONS
          </Badge>


          <h2 className="mt-8 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">

            Smart Sports
            <br />
            Infrastructure

          </h2>


          <p className="mt-6 text-lg leading-8 text-gray-600">

            Veegoon provides intelligent solutions
            for sports venues, organizations and
            digital sports ecosystems.

          </p>

        </div>



        <div className="mt-16 grid gap-8 lg:grid-cols-3">


          {solutions.map((item)=>(
            
            <div
              key={item.title}
              className="
              rounded-3xl
              bg-white
              p-8
              shadow-sm
              transition
              hover:-translate-y-2
              hover:shadow-xl
              "
            >

              <h3 className="text-2xl font-bold text-gray-900">
                {item.title}
              </h3>


              <div className="mt-2 text-blue-600 font-medium">
                {item.subtitle}
              </div>


              <p className="mt-6 leading-7 text-gray-600">
                {item.description}
              </p>


            </div>

          ))}


        </div>


      </Container>

    </Section>
  );
}