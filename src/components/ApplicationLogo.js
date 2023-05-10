import Image from 'next/image'
import logo from '@/assets/logo.png'

const ApplicationLogo = ({ className, ...props }) => (
    <Image
        className={className}
        src={logo}
        {...props}
        alt="Logo de SusanaNzth"
    />
)

export default ApplicationLogo
