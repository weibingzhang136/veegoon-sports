import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";


const cases = [
  {
    title: "Smart Stadium Project",
    subtitle: "智慧体育场馆数字化升级",
    description:
      "通过 AI、IoT 和数据技术，实现体育空间智能化运营。",
    tags: ["AI", "IoT", "Smart Venue"],
  },

  {
    title: "AI Training Center",
    subtitle: "智能训练中心",
    description:
      "利用计算机视觉和运动数据分析提升训练表现。",
    tags: ["Computer Vision", "Analytics"],
  },

  {
    title: "Sports Data Platform",
    subtitle: "体育数据基础设施",
    description:
      "连接体育组织、场馆和用户的数据智能平台。",
    tags: ["Data", "Cloud"],
  },
];


export default function Cases() {
  return (
    <Section className="bg-gray-50">

      <Container>

        <div className="max-w-3xl">

          <Badge>
            CASE STUDIES
          </Badge>


          <h2 className="mt-8 text-4xl font-bold text-gray-900 md:text-6xl">

            Selected
            <br />
            Projects

          </h2>


          <p className="mt-6 text-lg text-gray-600">

            Real-world applications powered by
            Veegoon AI sports technology.

          </p>

        </div>



        <div className="mt-16 grid gap-8 lg:grid-cols-3">


          {cases.map((item)=>(

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

              <div className="text-sm font-medium text-blue-600">
                CASE
              </div>


              <h3 className="mt-5 text-2xl font-bold text-gray-900">
                {item.title}
              </h3>


              <div className="mt-3 font-medium text-gray-700">
                {item.subtitle}
              </div>


              <p className="mt-5 leading-7 text-gray-600">
                {item.description}
              </p>


              <div className="mt-6 flex flex-wrap gap-2">

                {item.tags.map(tag => (

                  <span
                    key={tag}
                    className="
                    rounded-full
                    bg-blue-50
                    px-3
                    py-1
                    text-sm
                    text-blue-600
                    "
                  >
                    {tag}
                  </span>

                ))}

              </div>


            </div>

          ))}


        </div>


      </Container>

    </Section>
  );
}