import { ChangeEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithubSquare, FaLinkedin, FaWhatsappSquare, FaEnvelopeSquare } from 'react-icons/fa';


const Contato = () => {

    const handleEmailClick = () => {
        const email = 'rochasenzo.04@gmail.com';
        const mailtoLink = `mailto:${email}`;

        window.open(mailtoLink, '_blank');
    }

    const handleWhatsappClick = () => {
        const numeroWhatsapp = '5542984018839';
        const whatsappLink = `https://wa.me/${numeroWhatsapp}`;
        window.open(whatsappLink, '_blank');
    };

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
            .sendForm('service_y7xk7mf', 'template_77b3d6c', form.current!, {
                publicKey: 'GqMJOu1oIPoadHNTR',
            })
            .then(
                () => {
                    console.log('Sucesso!');
                    (e.target as HTMLFormElement).reset();
                },
                (error) => {
                    console.log('Falha ao enviar', error.text);
                },
            );
    };

    const autoResize = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = event.target;
        textarea.style.height = '44px';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    return (
        <>
            <hr className="w-9/12 self-center rounded-full border-2 border-black " />
            
            <div className='flex flex-col items-center justify-center gap-8'>
                <h1 className="mt-8 px-2 text-center text-3xl font-bold text-orange-600
                text-shadow-md dark:text-violet-800 dark:text-shadow md:text-5xl">
                    Entre em contato comigo!
                </h1>

                <div className="flex flex-row flex-wrap items-center justify-center gap-14 p-8 md:gap-28 md:p-32 lg:p-8">
                    <FaEnvelopeSquare onClick={handleEmailClick} className='size-28 cursor-pointer rounded-md
                    border-4 border-black bg-white shadow-contact transition-all duration-200
                    hover:text-email dark:shadow-dark-contact md:size-36 lg:size-28'/>

                    <FaWhatsappSquare onClick={handleWhatsappClick} className='size-28 cursor-pointer rounded-md
                    border-4 border-black bg-white shadow-contact transition-all duration-200
                    hover:text-whatsapp dark:shadow-dark-contact md:size-36 lg:size-28'/>

                    <a href="https://www.linkedin.com/in/elziorocha/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='size-28 cursor-pointer rounded-md border-4 border-black bg-white
                        shadow-contact transition-all duration-200 hover:text-linkedin dark:shadow-dark-contact
                        md:size-36 lg:size-28'/>
                    </a>

                    <a href='https://github.com/elziorocha' target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare className='size-28 cursor-pointer rounded-md border-4 border-black bg-white
                        shadow-contact transition-all duration-200 hover:text-github dark:shadow-dark-contact
                        md:size-36 lg:size-28'/>
                    </a>
                </div>

                <h1 className="mt-4 px-2 text-center text-3xl font-bold text-orange-600 text-shadow-md
                dark:text-violet-800 dark:text-shadow md:text-5xl">
                    Me envie uma mensagem!
                </h1>

                <div className='mt-2 flex w-10/12 items-center justify-center rounded-md border-4 border-black
                bg-orange-600 p-6 shadow-[-8px_7px_1px_rgb(0,0,0)] dark:bg-violet-900 md:w-6/12'>
                    <form ref={form} onSubmit={sendEmail} className='flex w-64 flex-col text-2xl font-bold
                    text-gray-200 text-shadow md:w-80'>
                        <div className='flex flex-col bg-orange-600 pb-3 dark:bg-violet-900'>
                            <label className='bg-orange-600 pb-2 pl-2 pt-4 dark:bg-violet-900'>Nome</label>
                            <input type="text" name="user_name" placeholder='Seu Nome'
                                className='rounded-md border-2 border-black bg-gray-200 p-1.5 text-base font-semibold
                            text-black outline-none' />
                        </div>

                        <div className='flex flex-col bg-orange-600 pb-3 dark:bg-violet-900'>
                            <label className='bg-orange-600 pb-2 pl-2 dark:bg-violet-900'>Email</label>
                            <input type="email" name="user_email" placeholder='Seu Email'
                                className='rounded-md border-2 border-black bg-gray-200 p-1.5 text-base font-semibold
                            text-black outline-none' />
                        </div>

                        <div className='bg-orange-600 pb-3 pt-5 dark:bg-violet-900'>
                            <label className='bg-orange-600 pl-2 pt-6 dark:bg-violet-900'>Mensagem</label>
                            <textarea name="message" rows={1} placeholder='Digite sua mensagem'
                                className='mt-2 w-64 resize-none overflow-hidden rounded-md border-2 border-black bg-gray-200 p-1.5
                            text-base font-semibold text-black outline-none md:w-80'
                                onInput={autoResize} />
                        </div>

                        <div className='bg-orange-600 pt-5 text-center dark:bg-violet-900'>
                            <input type="submit" value="Enviar"
                                className='cursor-pointer rounded border-2 border-black px-6 py-3 text-2xl font-bold
                            text-gray-200 shadow-[-4px_3px_1px_black] transition-all text-shadow hover:bg-orange-700
                            dark:hover:bg-violet-950' />
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Contato