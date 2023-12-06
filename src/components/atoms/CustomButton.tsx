import Image from 'next/image'

type CustomButtonProps = {
    content:string,
    styleText?: string,
    styleButton?: string,
    imagePath?: string,
    imgAlt?: string,
    itemButtonDisplay?: string,
  }

function CustomButton({content, styleText, styleButton,imagePath, imgAlt, itemButtonDisplay}: CustomButtonProps) {
  return (
      <button className={styleButton}>
        <div className={itemButtonDisplay}>
        {imagePath && imgAlt && (
          <Image
            src={imagePath}
            alt={imgAlt}
            width={24}
            height={25}
          />
        )}  
        <p className={styleText}>{content}</p>
        </div>
      </button>
  )
}

export default CustomButton