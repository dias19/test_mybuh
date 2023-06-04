import Header from "@/components/header/header";

export const metadata = {
  title: "Онлайн калькулятор для ТОО на упрощенке",
  description: "Онлайн калькулятор для ТОО на упрощенном режиме (2023 г.)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
