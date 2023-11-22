
type CustomButtonProps = {
    content:string,
    styleText?: string,
    styleButton?: string,
}

function CustomButton({content, styleText, styleButton}: CustomButtonProps) {
  return (
    <div>
        <button className={styleButton}>
            <p className={styleText}>{content}</p>
        </button>
    </div>
  )
}

export default CustomButton