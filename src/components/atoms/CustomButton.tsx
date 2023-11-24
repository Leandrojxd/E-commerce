
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
    <div>
        <button className={styleButton}>
          <div className={itemButtonDisplay}>
            <img src={imagePath} alt={imgAlt}/>
            <p className={styleText}>{content}</p>
          </div>
        </button>
    </div>
  )
}

export default CustomButton