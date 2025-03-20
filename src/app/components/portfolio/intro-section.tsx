import WeatherWidget from "./weather-widget";

export function IntroSection() {
    return (
        <div className="mb-4">
            <WeatherWidget />
            <h1 className="text-[28px] leading-[36px] font-medium text-gunmetal mb-1">
                Crafting your ideas into innovative digital solutions <span className="text-2xl">🚀.</span>
                <span className="text-steelGray"> Bridging Technology & Product | Open to Collaboration</span>
            </h1>
            <p className="mt-4">
                I’m Manthan, a Senior Software Engineer currently based in Gurugram, Haryana. I specialize in crafting 
                high-performance, user-centric frontend experiences that seamlessly blend innovation and functionality. 
                With a strong foundation in optimizing responsive applications, I bring expertise in frontend development, 
                solid backend knowledge, and Web3 exploration. Passionate about AI and large language models, I’ve built 
                solutions that push creative and technical boundaries.
            </p>
            <p className="mt-4">
                Beyond engineering, I have experience leading cross-functional projects, collaborating with stakeholders, 
                and aligning technology with business goals. Having worked in a fast-growing startup, I’ve played a key role 
                in streamlining development workflows, improving product scalability, and contributing to strategic decision-making. 
                I thrive in environments where technology, user experience, and business impact intersect—driving solutions that 
                are not just functional but also market-ready.
            </p>
        </div>
    );
}
