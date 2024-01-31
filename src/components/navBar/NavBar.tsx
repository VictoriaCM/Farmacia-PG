
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <>
            <div className='fixed top-0 w-full bg-red-600 text-white flex justify-center py-4 border-b-4 border-yellow-500'>
                <div className="container flex justify-between text-lg items-center">
                    <Link to="/home" className='flex items-center text-4xl font-bold uppercase gap-2'>Farmed+</Link>
                    <div className='flex gap-10'>
                        <div className='hover:underline'>Produtos</div>
                        <Link to="/categorias" className='hover:underline'>Categorias</Link>
                        <Link to="/cadastroCategoria" className='hover:underline'>Cadastrar categoria</Link>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Navbar