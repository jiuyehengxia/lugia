import  React from 'react';
        import {Anchor,Grid} from '@lugia/lugia-web';
        import EditTables from '../../edit-table'; 
        import AMOUNTINPUT from '@lugia/lugia-web/dist/amount-input/lugia.amount-input.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BaseAmountInput =  require('./BaseAmountInput').default;  const DisableAmountInput =  require('./DisableAmountInput').default;  const DefaultValueAmountInput =  require('./DefaultValueAmountInput').default;  const SizeAmountInput =  require('./SizeAmountInput').default;  const PrefixAmountInput =  require('./PrefixAmountInput').default;  const TransformAmountInput =  require('./TransformAmountInput').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
        export default class ComDemo extends React.Component {
            render(){
                return(
                    <Row>
                        <Col span={20}>
                            <Title title={'金额输入框'} subTitle={'AmountInput'} desc={'用于金额数字的填写,可切换人民币大小写显示效果.'} />
                            <Demo title={'金额输入框基础用法'} titleID={'amount-input-0'} code={<code>{ 'import React from \'react\';\nimport { AmountInput } from \'@lugia/lugia-web\';\n\nexport default class BaseAmountInput extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n    this.state = { value: \'\' };\n  }\n\n  onChange = ({ newValue: value }: any) => {\n    this.setState({ value });\n  };\n\n  render() {\n   return <AmountInput value={this.state.value} onChange={this.onChange} />;\n  }\n}\n'}</code>} desc={'金额输入框基础用法'}  demo={<BaseAmountInput />}></Demo><Demo title={'禁用状态'} titleID={'amount-input-1'} code={<code>{ 'import React from \'react\';\nimport { AmountInput,Button } from \'@lugia/lugia-web\';\n\nexport default class DisableAmountInput extends React.Component<any, any> {\n  constructor (props: any) {\n    super(props);\n  }\n  state = {\n    disabled: false,\n  };\n\n  toggle = () => {\n    const disabled =!this.state.disabled;\n    this.setState({\n      disabled\n    });\n  };\n\n  render () {\n    return (\n      <div>\n        <div style={{ marginTop: 20 }}>\n          <Button onClick={this.toggle} type=\"primary\">点击切换 disabled</Button>\n        </div>\n        <AmountInput disabled={this.state.disabled}/>\n    </div> );\n  }\n}\n'}</code>} desc={'点击按钮切换金额输入框的禁用状态'}  demo={<DisableAmountInput />}></Demo><Demo title={'金额输入框默认值显示'} titleID={'amount-input-2'} code={<code>{ 'import React from \'react\';\nimport { AmountInput } from \'@lugia/lugia-web\';\n\nexport default class DefaultValueAmountInput extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n    this.state = { value: \'123456\' };\n  }\n\n  onChange = ({ newValue: value }: any) => {\n    this.setState({ value });\n  };\n\n  render() {\n    return <AmountInput value={this.state.value} onChange={this.onChange} />;\n  }\n}\n'}</code>} desc={'金额输入框显示设置的默认值'}  demo={<DefaultValueAmountInput />}></Demo><Demo title={'不同尺寸得金额输入框'} titleID={'amount-input-3'} code={<code>{ 'import React from \'react\';\nimport { AmountInput } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst Wrapper = styled.div`\n  float: left;\n`;\n\nconst onChange = cmpName => (value: any) => {};\nexport default class SizeAmountInput extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n    this.state = { value: \'\' };\n  }\n\n  onChange = ({ newValue: value }: any) => {\n    this.setState({ value });\n  };\n\n  render() {\n    return(\n    <Wrapper>\n    <AmountInput size={\'small\'} placeholder={\'请填写金额\'} />\n    <AmountInput placeholder={\'请填写金额\'} />\n    <AmountInput size={\'large\'} placeholder={\'请填写金额\'} />\n    </Wrapper>);\n  }\n}\n'}</code>} desc={'有三种尺寸可以配置 高度分别为 40px、32px 和 24px。'}  demo={<SizeAmountInput />}></Demo><Demo title={'不同的金额输入框 前缀 \'¥\'与 \'\$\' '} titleID={'amount-input-4'} code={<code>{ 'import React from \'react\';\nimport { AmountInput } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst Wrapper = styled.div`\n  float: left;\n`;\n\nexport default class PrefixAmountInput extends React.Component<any, any> {\n  render() {\n    return(\n    <Wrapper>\n      <AmountInput amountPrefix=\"¥\" />\n      <AmountInput amountPrefix=\"\$\" />\n    </Wrapper>);\n  }\n}\n'}</code>} desc={'默认前缀  \'¥\',代表输入为人民币 '}  demo={<PrefixAmountInput />}></Demo><Demo title={'是否可以去转换大小写'} titleID={'amount-input-5'} code={<code>{ 'import React from \'react\';\nimport { AmountInput } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst Wrapper = styled.div`\n  float: left;\n`;\n\nexport default class TransformAmountInput extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n  }\n  render() {\n    return(\n      <Wrapper>\n        <AmountInput transform={true} />\n        <AmountInput transform={false} />\n      </Wrapper>);\n  }\n}\n'}</code>} desc={'人民币前缀时  默认可以转换 '}  demo={<TransformAmountInput />}></Demo>
                            <EditTables dataSource={AMOUNTINPUT} />
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'金额输入框基础用法'} href={'#amount-input-0'} /><Link title={'禁用状态'} href={'#amount-input-1'} /><Link title={'金额输入框默认值显示'} href={'#amount-input-2'} /><Link title={'不同尺寸得金额输入框'} href={'#amount-input-3'} /><Link title={'不同的金额输入框 前缀 \'¥\'与 \'\$\' '} href={'#amount-input-4'} /><Link title={'是否可以去转换大小写'} href={'#amount-input-5'} />
                            </Anchor>
                        </Col>
                    </Row>
                );
            }
         }   
        
