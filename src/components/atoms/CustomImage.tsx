import Image from "next/image";

type Props = {
    src:string,
    alt:string,
    className: string,
}

function CustomImage({src, alt, className}: Props) 
{
    return(
        <div>
            <img
            src={src}
            alt={alt}
            className={className}
            />
        </div>
    )
}
export default CustomImage;