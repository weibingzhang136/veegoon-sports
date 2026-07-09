import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import HeroVisual from "@/components/home/HeroVisual";


export default function Hero() {
  return (
    <Section className="relative overflow-hidden bg-white">

      {/* AI Background */}

<div
className="
absolute
inset-0
bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%)]
"
/>


<div
className="
absolute
right-0
top-1/3
h-[500px]
w-[500px]
rounded-full
bg-blue-400/10
blur-3xl
"
/>


      <Container>

        <div className="grid min-h-[calc(100vh-80px)] items-center gap-16 lg:grid-cols-2">


          {/* Left Content */}

          <div className="relative z-10">

            <Badge>
              AI SPORTS TECHNOLOGY PLATFORM
            </Badge>


            <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-7xl">

              Building the Digital
              <br />

              Future
              <br />

              for Sports

            </h1>


            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">

              微馆体育（Veegoon Sports）通过人工智能、
              计算机视觉和数据智能技术，
              打造下一代智能体育基础设施。

            </p>


            <div className="mt-10 flex flex-col gap-4 sm:flex-row">


              <Button>
                预约演示
              </Button>


              <Button variant="outline">
                了解解决方案
              </Button>


            </div>


            {/* Stats */}

            <div className="mt-14 grid grid-cols-3 gap-8">


              <div>
                <div className="text-3xl font-bold text-gray-900">
                  100+
                </div>

                <div className="mt-1 text-sm text-gray-500">
                  智慧场馆
                </div>
              </div>



              <div>
                <div className="text-3xl font-bold text-gray-900">
                  AI
                </div>

                <div className="mt-1 text-sm text-gray-500">
                  智能系统
                </div>
              </div>



              <div>
                <div className="text-3xl font-bold text-gray-900">
                  24/7
                </div>

                <div className="mt-1 text-sm text-gray-500">
                  数据连接
                </div>
              </div>


            </div>


          </div>



          {/* Right Visual */}

          <div className="relative">

            <HeroVisual />

          </div>


        </div>

      </Container>


    </Section>
  );
}