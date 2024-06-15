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
            <div className='flex flex-col items-center justify-center gap-8'>
                <h1 className="mt-8 text-center text-5xl font-bold text-orange-600 text-shadow-md">Entre em contato comigo!</h1>

                <div className="flex flex-row flex-wrap gap-28 p-8">
                    <FaEnvelopeSquare onClick={handleEmailClick} className='size-28 cursor-pointer rounded-md
                border-4 border-black bg-white
                shadow-[-5px_5px_0_1px_#ea580c,-8px_8px_0px_1px_black,-3px_8px_0px_1px_black,-8px_2px_0px_1px_black]
                transition-all duration-200 hover:text-email'/>

                    <FaWhatsappSquare onClick={handleWhatsappClick} className='size-28 cursor-pointer rounded-md
                border-4 border-black bg-white
                shadow-[-5px_5px_0_1px_#ea580c,-8px_8px_0px_1px_black,-3px_8px_0px_1px_black,-8px_2px_0px_1px_black]
                transition-all duration-200 hover:text-whatsapp'/>

                    <a href="https://www.linkedin.com/in/elziorocha/"><FaLinkedin className='size-28 cursor-pointer rounded-md
                border-4 border-black bg-white
                shadow-[-5px_5px_0_1px_#ea580c,-8px_8px_0px_1px_black,-3px_8px_0px_1px_black,-8px_2px_0px_1px_black]
                transition-all duration-200 hover:text-linkedin'/></a>

                    <a href='https://github.com/elziorocha'><FaGithubSquare className='size-28 cursor-pointer rounded-md
                border-4 border-black bg-white
                shadow-[-5px_5px_0_1px_#ea580c,-8px_8px_0px_1px_black,-3px_8px_0px_1px_black,-8px_2px_0px_1px_black]
                transition-all duration-200 hover:text-github'/></a>
                </div>

                <div className='flex w-10/12 items-center justify-center rounded-md border-4 border-black bg-orange-600 p-6 shadow-[-6px_5px_1px_rgb(0,0,0)] 
                md:w-6/12'>
                    <form ref={form} onSubmit={sendEmail} className='flex w-80 flex-col text-2xl
                    font-bold text-gray-200 text-shadow'>
                        <div className='flex flex-col bg-orange-600 pb-3'>
                            <label className='bg-orange-600 pb-2 pl-2 pt-4'>Nome</label>
                            <input type="text" name="user_name" placeholder='Seu Nome'
                                className='rounded-md border-2 border-black bg-gray-200 p-1.5 text-base font-semibold
                            text-black outline-none' />
                        </div>

                        <div className='flex flex-col bg-orange-600 pb-3'>
                            <label className='bg-orange-600 pb-2 pl-2'>Email</label>
                            <input type="email" name="user_email" placeholder='Seu Email'
                                className='rounded-md border-2 border-black bg-gray-200 p-1.5 text-base font-semibold
                            text-black outline-none' />
                        </div>

                        <div className='bg-orange-600 pb-3 pt-5'>
                            <label className='bg-orange-600 pl-2 pt-6'>Mensagem</label>
                            <textarea name="message" rows={1} placeholder='Digite sua mensagem'
                            className='mt-2 w-80 resize-none overflow-hidden rounded-md border-2 border-black bg-gray-200
                            p-1.5 text-base font-semibold text-black outline-none'
                                onInput={autoResize} />
                        </div>

                        <div className='bg-orange-600 pt-5 text-center'>
                            <input type="submit" value="Enviar"
                                className='cursor-pointer rounded border-2 border-black px-6 py-3 text-2xl font-bold
                            text-gray-200 shadow-[-4px_3px_1px_black] text-shadow' />
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Contato