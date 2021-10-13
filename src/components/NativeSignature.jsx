import { Component, createElement } from "react";
import Signature from "react-native-signature-canvas";

export class NativeSignature extends Component {
    render() {
        return (
            <Signature
                descriptionText={this.props.descriptionText}
                clearText={this.props.clearText}
                confirmText={this.props.confirmText}
                onOK={this.props.onOK}
                onEmpty={this.props.onEmpty}
                webStyle={this.props.webStyle}
                autoClear={this.props.autoClear}
            />
        );
    }
}
