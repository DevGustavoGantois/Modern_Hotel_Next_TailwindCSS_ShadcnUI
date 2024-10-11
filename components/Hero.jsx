import { SearchBox } from "./SearchBox"

export function Hero() {
    return (
        <section id="#Home" className="pt-24 pb-12 xl:py-0 xl:h-[1087px] bg-hero2 xl:bg-hero bg-cover bg-center bg-no-repeat flex justify-center items-center">
            <div className="container mx-auto flex items-center justify-center xl:justify-start">
                <SearchBox />
            </div>
        </section>
    )
}