import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
export default function Hero() {
  return (
    <Section className="relative overflow-hidden bg-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <Container className="relative flex min-h-screen flex-col items-center justify-center text-center">
        <Badge>AI SPORTS TECHNOLOGY PLATFORM</Badge>

        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-7xl">
          Building the Digital
          <br />
          Infrastructure for Sports
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
          微馆体育（Veegoon Sports）致力于打造全球领先的 AI 体育科技平台，
          通过人工智能、数字化和智能场馆技术，
          为体育产业提供更智慧、更高效、更具连接力的数字基础设施。
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button>
           预约演示
          </Button>

          <button className="rounded-full border border-gray-300 px-8 py-4 font-medium transition hover:bg-gray-100">
           了解解决方案
          </button>
        </div>

        <div className="mt-24 grid w-full max-w-5xl grid-cols-1 gap-8 border-t border-gray-200 pt-12 md:grid-cols-3">
          <div>
            <h3 className="text-4xl font-bold text-blue-600">100+</h3>
            <p className="mt-2 text-gray-600">智慧体育场馆</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">50+</h3>
            <p className="mt-2 text-gray-600">赛事数字化项目</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">AI</h3>
            <p className="mt-2 text-gray-600">驱动未来体育生态</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}