import Image from "next/image";

type Props = {
    src:string,
    alt:string,
    width:number,
    height:number,
    className?: string,
    classNameContainerImage?: string,
}

function CustomImage({src, alt, width, height, className,classNameContainerImage}: Props) 
{
    return(
        <div className={classNameContainerImage}>
            {src && alt && (
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={className}
            />
            )}
        </div>
    )
}
export default CustomImage;