import React, { Component } from 'react'
import { Button, Carousel, Progress,DatePicker, Space,Calendar  } from 'antd';
import 'antd/dist/antd.css'
// function onChange(a, b, c) {
//     console.log(a, b, c);
// }
function onChange(date, dateString) {
    console.log(date, dateString);
  }
  function onPanelChange(value, mode) {
    console.log(value.format('YYYY-MM-DD'), mode);
  }
  
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
export default class App extends Component {
    render() {
        return (
            <div>
                <button>Press me!</button>&nbsp;
                <Button type="primary">Primary Button</Button>
                {/* <Carousel afterChange={onChange}>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel> */}
                <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
                <Progress type="circle" percent={100} format={() => 'Done'} />
                <DatePicker onChange={onChange} />
                <Calendar onPanelChange={onPanelChange}/>

            </div>
        )
    }
}
