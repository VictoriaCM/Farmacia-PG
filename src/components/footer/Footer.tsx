import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

let data = new Date().getFullYear()

function Footer() {

    return (
        <div className="flex justify-center bg-red-600 text-white border-t-4 border-yellow-500">
            <div className="container flex flex-col items-center py-1">
            <p className='text-xl font-bold'>Farmed | Copyright: {data} </p>
            <p className='text-lg'>Conecte-se conosco pelas redes sociais</p>
                <div className="flex gap-2">
                    <a href="https://www.linkedin.com/in/victória-moraes/" target="_blank" rel="noreferrer">
                        <LinkedinLogo size={40} weight="bold" className="hover:text-sky-300" />
                    </a>
                    <a href="https://www.facebook.com/Vicmoraesc" target="_blank" rel="noreferrer">
                        <GithubLogo size={40} weight="bold" className="hover:text-sky-300" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
