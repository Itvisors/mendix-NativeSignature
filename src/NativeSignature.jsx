import { Component, createElement } from "react";

import { NativeSignature as WrappedNativeSignature } from "./components/NativeSignature";

export class NativeSignature extends Component {

    onSubmitHandler = img => {
        this.props.signature.setValue(img);
    }

    onSubmitEmpty = () => {
        this.props.signature.setValue('');
    }

    render() {

        //Read widgetconfiguration
        const { autoClear, descriptionText, clearText, confirmText, buttonBackgroundColor, buttonTextColor } = this.props;

        //Set default values
        const props = {
            descriptionText: descriptionText ? descriptionText : "Sign above",
            clearText: clearText ? clearText : "Clear",
            confirmText: confirmText ? confirmText : "Confirm",
            onOK: this.onSubmitHandler,
            onEmpty: this.onSubmitEmpty,
            webStyle: `.m-signature-pad--footer
            .button {
              background-color: ${buttonBackgroundColor ? buttonBackgroundColor : '#3F99F7'};
              color: ${buttonTextColor ? buttonTextColor : '#FFF'};
            }`,
            autoClear: autoClear

        }

        return (
            <WrappedNativeSignature {...props} />
        );
    }
}
