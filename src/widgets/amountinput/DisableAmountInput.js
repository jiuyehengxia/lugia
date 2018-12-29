/**
 *
 * create by liangguodong
 *
 */
import React from "react";
import { AmountInput,Button } from "@lugia/lugia-web";

export default class DisableAmountInput extends React.Component<any, any> {
  constructor (props: any) {
    super(props);
  }
  state = {
    disabled: false,
  };

  toggle = () => {
    const disabled =!this.state.disabled;
    this.setState({
      disabled
    });
  };

  render () {
    return (
      <div>
        <div style={{ marginTop: 20 }}>
          <Button onClick={this.toggle} type="primary">点击切换 disabled</Button>
        </div>
        <AmountInput disabled={this.state.disabled}/>
    </div> )
  }
}
