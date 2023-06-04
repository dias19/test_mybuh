import "./globals.css";
import Calculator from "@/components/calculator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between px-12">
      <div className="flex flex-col">
        <p className="text-xl mt-5 mb-3 md:text-4xl md:mt-15 md:mb:8">
          Онлайн калькулятор для
          <span className="text-red ml-1">
            ТОО на упрощенном режиме (2023 г.)
          </span>
        </p>
        <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr]">
          <Calculator />
        </div>
      </div>
    </main>
  );
}
