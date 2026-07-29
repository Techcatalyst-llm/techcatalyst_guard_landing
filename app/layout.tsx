import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const YANDEX_METRIKA_ID = "111134903";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://guard.techcatalyst.ru"),
  title: "Безопасное рабочее место разработчика | TechCatalyst Guard",
  description:
    "Решение в контуре заказчика для перехвата команд и маскирования учётных данных и персональной информации на рабочих станциях разработчиков. Терминал, MCP и буфер обмена работают под управлением корпоративных политик.",
  keywords:
    "защита данных разработчиков, безопасность ИИ-агентов, контроль терминала, контроль MCP, маскирование учётных данных, персональные данные, защита рабочих станций",
  openGraph: {
    title: "TechCatalyst Guard — учётные данные остаются на рабочей станции",
    description:
      "Перехват команд терминала, маскирование учётных данных и персональной информации, строгий режим и панель управления в контуре заказчика.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        {children}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_ID}', 'ym');

            ym(${YANDEX_METRIKA_ID}, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img
              src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`}
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
