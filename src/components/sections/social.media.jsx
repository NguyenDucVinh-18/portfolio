import { FaFacebook } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

const SocialMedia = (props) => {
    const { github, facebook } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            
            <a href={facebook} target='_blank' className="highlight" title="Facebook Vinh">
                <FaFacebook size={30} />
            </a>
            <a href={github} target='_blank' className="highlight" title="Github Vinh">
                <BsGithub size={30} />
            </a>

        </div>
    )
}

export default SocialMedia;