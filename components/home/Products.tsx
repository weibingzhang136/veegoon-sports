import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";


const products = [
  {
    name: "Smart Venue OS",
    title: "智慧场馆操作系统",
    description:
      "连接设备、空间和用户，打造智能化体育场馆基础设施。",
  },

  {
    name: "AI Sports Analytics",
    title: "AI运动分析平台",
    description:
      "通过人工智能视觉和数据模型，实现运动表现智能分析。",
  },

  {
    name: "Digital Athlete",
    title: "数字运动员系统",
    description:
      "建立个人运动数据模型，提供智能训练与成长建议。",
  },

  {
    name: "Sports Cloud Platform",
    title: "体育云平台",
    description:
      "提供体育行业的数据连接、管理和智能服务能力。",
  },
];


export default function Products() {
  return (
    <Section className="bg-white">

      <Container>

        <div className="text-center">

          <Badge>
            PRODUCTS
          </Badge>


          <h2 className="mt-8 text-4xl font-bold text-gray-900 md:text-6xl">

            Veegoon AI
            <br />
            Sports Platform

          </h2>


          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">

            Building intelligent products
            for the future sports ecosystem.

          </p>

        </div>



        <div className="mt-20 grid gap-8 md:grid-cols-2">


          {products.map((product)=>(

            <div
              key={product.name}
              className="
              rounded-3xl
              border
              border-gray-100
              p-8
              transition
              hover:shadow-xl
              "
            >

              <div className="text-sm font-medium text-blue-600">
                {product.name}
              </div>


              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                {product.title}
              </h3>


              <p className="mt-4 leading-7 text-gray-600">
                {product.description}
              </p>


            </div>

          ))}


        </div>


      </Container>

    </Section>
  );
}