
function Home() {

    return (
        <>
            <div id="container" className="flex justify-center min-h-screen">
                <div id="subcontainer" className="container mx-4 md:grid md:grid-cols-2 text-slate-800 py-8">
                    <div id="texto" className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-bold">Bem-vinde a Farmed+</h2>
                        <p className="text-xl text-center font-bold"> Cuidando de você a cada receita. </p>
                        <div id="container-buttons" className="flex flex-col md:flex-row justify-around gap-4 w-full md:w-1/2 text-center">
                            <button className="border rounded-lg text-white bg-yellow-400 px-4 py-3 flex-1 hover:bg-red-500 hover:text-black transition-colors">Ver Produtos</button>
                        </div>
                    </div>
                    <div id="imagem" className="flex justify-center mt-8 md:mt-0">
                        <img className="w-full md:w-2/3" src="src/assets/home.svg" alt="Imagem da Página Home" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;