import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";


export default function BrandStory() {
  return (
    <Section className="bg-gray-50">

      <Container>

        <div className="grid gap-16 lg:grid-cols-2">


          {/* Left */}

          <div>

            <Badge>
              ABOUT VEEGOON
            </Badge>


            <h2 className="mt-8 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">

              The Future of
              <br />
              Sports is Intelligent

            </h2>


          </div>



          {/* Right */}

          <div className="space-y-6 text-lg leading-8 text-gray-600">

            <p>
              微馆体育（Veegoon Sports）专注于人工智能与体育产业融合，
              致力于打造下一代体育数字基础设施。
            </p>


            <p>
              通过 AI 技术、数据智能和智能场馆系统，
              我们帮助体育组织、场馆和运动品牌实现数字化升级。
            </p>


            <p>
              从运动体验到运营效率，
              Veegoon 正在重新定义未来体育生态。
            </p>


          </div>


        </div>



        {/* Values */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">


          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="text-3xl font-bold text-blue-600">
              AI
            </div>

            <div className="mt-3 text-gray-600">
              Artificial Intelligence
            </div>

          </div>



          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="text-3xl font-bold text-blue-600">
              DATA
            </div>

            <div className="mt-3 text-gray-600">
              Data Intelligence
            </div>

          </div>



          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="text-3xl font-bold text-blue-600">
              SPORTS
            </div>

            <div className="mt-3 text-gray-600">
              Sports Innovation
            </div>

          </div>


        </div>


      </Container>

    </Section>
  );
}