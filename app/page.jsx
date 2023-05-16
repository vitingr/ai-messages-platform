import Feed from "@components/Feed"

const Home = () => {
    return (
        <div>
            <section className="w-full flex-center flex-col">
                <h1 className="head_text text-center">
                    Descubra e Compartilhe
                    <br className="max-md:hidden" />
                    <span className="orange_gradient text-center"> Comandos gerados por AI</span>
                </h1>
                <p className="desc text-center">Promptopia é um projeto Open-Source para o mundo moderno para descobrir, criar e compartilhar comandos criativos</p>
            </section>

            <Feed />
        </div>
    )
}

export default Home