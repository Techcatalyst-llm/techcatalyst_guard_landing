import { Wrap, Kicker, H2, Lead, Card } from "./ui";
import Reveal from "./Reveal";

const stages = [
  {
    tag: "Сейчас",
    title: "Контроль рабочей станции",
    text: "Терминал, MCP, буфер обмена и репозитории — под корпоративными политиками. Секреты и ПДн маскируются до передачи ИИ-агенту.",
  },
  {
    tag: "Далее",
    title: "LLM Firewall в шлюзе",
    text: "Инспекция запросов и ответов моделей в точке data-path. Prompt injection, jailbreak, утечки данных — под контролем. Для клиентов Takt включается без изменения интеграции.",
  },
  {
    tag: "Потом",
    title: "Red Teaming и комплаенс",
    text: "Автоматическое тестирование атаками, комплаенс-отчётность для ФСТЭК и ЦБ, интеграция с SIEM и SOC.",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-[82px] lg:py-[100px]">
      <Wrap>
        <Reveal>
          <Kicker>Дорожная карта</Kicker>
          <H2>Что дальше: LLM Firewall в шлюзе TechCatalyst</H2>
          <Lead>
            TechCatalyst Guard развивается от контроля рабочей станции к
            полноценному защитному контуру ИИ-трафика. Следующий этап — инспекция
            запросов и ответов моделей непосредственно в шлюзе TechCatalyst.
          </Lead>
        </Reveal>
        <div className="mt-11 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {stages.map((s) => (
            <Reveal key={s.title}>
              <Card className="h-full">
                <div className="mb-3 font-mono text-[11.5px] font-semibold uppercase tracking-[0.16em] text-blue">
                  {s.tag}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#0d1326]">{s.title}</h3>
                <p className="text-[15px] text-muted">{s.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
