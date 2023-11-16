import Image from "next/image";

type Props = {
    src:string,
    alt:string,
    width: number,
    height: number,
}

function CustomImage({src, alt, width, height}: Props) 
{
    return(
        <div>
            <Image 
            src={src}
            alt={alt}
            width={width}
            height={height}
            />
        </div>
    )
}
export default CustomImage;