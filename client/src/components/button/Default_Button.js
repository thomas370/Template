import './default_button.scss'

const Default_Button = (props) => {
    return (
        <div className="button_1">
            <button>{props.text}</button>
        </div>
    )
}

export default Default_Button