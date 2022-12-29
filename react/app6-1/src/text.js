import React from 'react'

export default function Text() {
    return (
        <div style={{width:'400px', margin:'10px auto'}}>
            <div className="text-info">Text-Info</div>
            <div className="text-success">Text-Success</div>
            <div className="text-primary">Text-Primary</div><br/>
            <div className="text-white bg-primary">Text-White, BG-Primary</div>
            <div className="text-light bg-dark">Text-Light, BG-Dark</div>
            <div className="text-primary bg-warning">
                Text-Primary, BG-Warning
            </div><br/>
            <div className="text-uppercase">Text Uppercase ...</div>
            <div className="text-capitalize">text capitalize ...</div><br/>
            <div className="text-start">Text-Start</div>
            <div className="text-center">Text-Center</div>
            <div className="text-end">Text-End</div><br/>
            <div>ฟอนต์ขนาดปกติ</div>
            <div className="lead">ฟอนต์เมื่อใช้คลาส lead</div>
            <div className="small">ฟอนต์เมื่อใช้คลาส small</div>
        </div>
    )
}