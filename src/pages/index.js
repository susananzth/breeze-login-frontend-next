import Head from 'next/head'
import NavBarGuest from '@/components/Layouts/NavigationGuest'
import LinkA from '@/components/LinkA'

export default function Home() {

    return (
        <>
            <Head>
                <title>SusanaNzth</title>
            </Head>
            <div className="bg-wite dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200">
                <NavBarGuest />
                
                <div className="container mx-auto px-4">
                    <h4 className="border-b text-4xl leading-tight mb-4 pt-8">
                        Sistema de inicio de sesión (Frontend) 📲
                    </h4>
                    <p className="mb-1 mt-0 text-lg leading-relaxed">
                        Proyecto base de inicio de sesión (login) en <strong>Next JS</strong> del 
                        lado <strong>frontend</strong> utilizando <strong>Laravel Breeze</strong> que 
                        incluye las siguientes vistas de autenticación:
                    </p>
                    <ul className="list-disc list-inside leading-relaxed mb-4 mt-0">
                        <li>Inicio de sesión.</li>
                        <li>Registro de usuario.</li>
                        <li>Restablecimiento de contraseña.</li>
                        <li>Verificación de correo electrónico.</li>
                        <li>Confirmación de contraseña.</li>
                        <li>Página de "perfil" donde el usuario puede actualizar su información.</li>
                    </ul>
                    <p className="mb-1 mt-0 text-lg leading-relaxed">
                        Agregando perzonalizacion y funcionalidades adicionales como:
                    </p>
                    <ul className="list-disc list-inside leading-relaxed mb-4 mt-0">
                        <li>Logo y colores representativos de la marca.</li>
                        <li>Cambio de lenguaje entre Español - Inglés.</li>
                        <li>Captura de token de autorización para consultas de autenticación.</li>
                    </ul>
                    <p className="mb-4 mt-0 text-lg leading-relaxed">
                        👉 Proyecto 
                        <LinkA href="https://github.com/susananzth/laravel-login-backend-api"
                        className="pl-1">Backend</LinkA>
                    </p>
                    <h6 className="mb-4 border-b text-2xl leading-tight">
                        Construido con 🛠️
                    </h6>
                    <p className="mb-1 mt-0 text-lg leading-relaxed">
                        Las herramientas que utilice para crear este proyecto:
                    </p>
                    <ul className="list-disc list-inside leading-relaxed mb-4 mt-0">
                        <li>Framework de Rect JS: 
                            <LinkA href="https://nextjs.org" className="pl-1">Next.js</LinkA>.
                        </li>
                        <li>Funciones de autenticación de Laravel: 
                            <LinkA href="https://laravel.com/docs/10.x/starter-kits#breeze-and-next"
                            className="pl-1">Breeze</LinkA>.
                        </li>
                        <li>Framework de CSS: 
                            <LinkA href="https://tailwindcss.com/" className="pl-1">Tailwind CSS</LinkA>.
                        </li>
                    </ul>
                    <h6 className="mb-4 border-b text-2xl leading-tight">
                        Desarrollado por 👩‍💻
                    </h6>
                    <p className="mb-1 mt-0 text-lg leading-relaxed">
                        👉 Susana Piñero <em>FrontEnd + BackEnd + Documentación</em>
                    </p>
                    <ul className="inline-grid grid-cols-2 gap-4 mb-4 mt-0 leading-relaxed">
                        <li>GitLab:
                            <LinkA href="https://gitlab.com/susananzth" className="pl-1">susananzth</LinkA>
                        </li>
                        <li>GitHub:
                            <LinkA href="https://github.com/susananzth" className="pl-1">susananzth</LinkA>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
