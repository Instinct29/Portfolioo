import WeatherWidget from "./weather-widget";

export function IntroSection() {
    return (
        <div className="mb-4">
            <WeatherWidget />
            <h1 className="text-[28px] leading-[36px] font-medium text-gunmetal mb-1">
                Crafting your ideas into innovative digital solutions <span className="text-2xl">🚀.</span>
                <span className="text-steelGray"> I’m open to collaboration.</span>
            </h1>
            <p className="mt-4">
                I’m Jasveer, a Senior Software Engineer currently based in Gurugram, Haryana. I specialize in crafting frontend experiences with a focus on delivering high-performance, user-centric digital solutions that seamlessly blend innovation and functionality.
            </p>
            <p className="mt-4">
                With a strong foundation in optimizing responsive applications, I bring expertise in frontend development, solid backend knowledge, and a bit of Web3 exploration. Passionate about AI and large language models, I’ve built solutions that push creative and technical boundaries. I thrive in collaborating with teams to create pixel-perfect designs, streamline performance, and elevate modern technology.
            </p>
        </div>
    )
}