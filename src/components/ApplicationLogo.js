import Image from 'next/image'
import logo from '@/assets/logo.png'

const ApplicationLogo = props => (
    <Image
        className="logo"
        src={logo}
        alt="Logo de marcación"
    />
)

export default ApplicationLogo
