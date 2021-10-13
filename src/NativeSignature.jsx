import { Component, createElement } from "react";

import { NativeSignature as WrappedNativeSignature } from "./components/NativeSignature";

export class NativeSignature extends Component {
    onSubmitHandler = img => {
        this.props.signature.setValue(img);
        if (this.props.onSubmitSignature) {
            this.props.onSubmitSignature.execute();
        }
    };

    onSubmitEmpty = () => {
        this.props.signature.setValue("");
        if (this.props.onEmptySignature) {
            this.props.onEmptySignature.execute();
        }
    };

    render() {
        //Read widgetconfiguration
        const {
            signature,
            onSubmitSignature,
            onEmptySignature,
            autoClear,
            descriptionText,
            clearText,
            confirmText,
            buttonBackgroundColor,
            buttonTextColor
        } = this.props;

        //Set default values
        const props = {
            descriptionText: descriptionText.value,
            clearText: clearText.value,
            confirmText: confirmText.value,
            onOK: this.onSubmitHandler,
            onEmpty: this.onSubmitEmpty,
            webStyle: `.m-signature-pad--footer
            .button {
              background-color: ${buttonBackgroundColor ? buttonBackgroundColor : "#3F99F7"};
              color: ${buttonTextColor ? buttonTextColor : "#FFF"};
            }`,
            autoClear: autoClear
        };

        return <WrappedNativeSignature {...props} />;
    }
}
