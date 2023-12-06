import Image from "next/image";

type Props = {
    src:string,
    alt:string,
    width:number,
    height:number,
    className?: string,
}

function CustomImage({src, alt, width, height, className}: Props) 
{
    return(
        <div>
            {src && alt && (
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
            )}
        </div>
    )
}
export default CustomImage;