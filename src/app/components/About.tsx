import Image from 'next/image';

export default function About() {
    return (
        <div id='aboutpage'>
            <div className='md:flex md:flex-row flex gap-y-9 flex-col-reverse py-10'>
                <div className='basis-1/2'>
                    <Image
                        src={'/tablesetting2.jpg'}
                        alt="logo"
                        width={450}
                        height={900}
                        className='mx-auto'
                    />
                </div>
                <div className='basis-1/2 md:mr-10 md:mt-10'>
                    <h1 className='text-center text-4xl font-serif pt-3 tracking-wider'>About Catering</h1>
                    <h4 className='text-center pt-6 text-xl tracking-widest'>Tradition since 1889</h4>
                    <p className='md:text-left text-justify px-5 pt-6 leading-8'>
                        The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor
                        sit amet, consectetur adipiscing elit consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.We only use seasonal ingredients. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum consectetur adipiscing elit, sed do eiusmod
                        temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
    );
}
