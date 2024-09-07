import React from 'react'

export default function Header() {
    return (
        <header className='flex items-center justify-between gap-4 p-4'>
            <a href="/"><h1 className='font-medium'>PolyglotAI<span className='text-blue-400 bold'>ByTarun</span></h1></a>
            <div className='gap-4 flex items-center '>
                <a href="https://github.com/Tarunn010" target='_blank' className='text-slate-600 cursor-pointer' rel="noreferrer">My Github</a>
                <a href="/" className='flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-blue-400'>
                    <a href='https://tarunn.framer.website/page'>Portfolio</a> 
                    <i className="fa-solid fa-plus"></i>
                </a>
            </div>
        </header>
    )
}
