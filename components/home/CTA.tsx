import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";


export default function CTA() {
  return (
    <Section className="relative overflow-hidden bg-[#0B1020]">

      {/* Glow */}

      <div
        className="
        absolute
        left-1/2
        top-0
        h-[500px]
        w-[500px]
        -translate-x-1/2
        rounded-full
        bg-blue-500/20
        blur-3xl
        "
      />


      <Container>

        <div className="relative z-10 text-center">


          <h2
            className="
            text-4xl
            font-bold
            leading-tight
            text-white
            md:text-6xl
            "
          >

            Ready to Build
            <br />
            The Future of Sports?

          </h2>


          <p
            className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-8
            text-gray-300
            "
          >

            与 Veegoon 一起，
            利用 AI 和数字技术，
            构建下一代体育基础设施。

          </p>



          <div
            className="
            mt-10
            flex
            flex-col
            justify-center
            gap-4
            sm:flex-row
            "
          >

            <Button>
              预约演示
            </Button>


            <Button variant="outline">
              联系我们
            </Button>


          </div>


        </div>


      </Container>


    </Section>
  );
}