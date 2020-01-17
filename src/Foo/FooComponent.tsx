
import * as React from "react";
import { render } from "react-dom";
import { AddOne } from "src/SomeLibrary/SomeHelperFile";

export class FooComponent extends React.Component<{},{}> {

    render() {

        const onePlusOne = AddOne(1);

        return <div>
            <p>This is the FooComponent.</p>
            <p>When you add 1 and 1 together you get {onePlusOne}</p>
        </div>;
    }
}