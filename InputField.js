class InputField extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        //是否是因為 handleKeyDown 的this 最原始是綁定在 React.Component
        //即使在 class InputField this 仍然沒有改變，必需用 bind 去改變handleKeyDown的this
        //如此 handleKeyDown 的執行環境才會變成 class InputField
    }
    handleKeyDown(e) {
        const { onSubmitEditing, onKeyDown } = this.props;
        const { value } = e.target;
        switch (e.keyCode) {
            case 13:
                if (value.trim())
                    onSubmitEditing && onSubmitEditing(value);
                e.target.value = '';
                break;
        }
        onKeyDown && onKeyDown(e);
    }

    render() {
        const {
            placeholder
        } = this.props
        return <input {...this.props }
        onKeyDown = { this.handleKeyDown }
        type = "text" / > ;
    }
}

window.App.InputField = InputField;
