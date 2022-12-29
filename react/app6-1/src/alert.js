import React from 'react'

export default function Alert() {
    return (
        <div style={{width:'600px', margin:'20px auto'}}>
            <div className="alert alert-info alert-dismissible">
                <div>Alert เป็นคอมโพเนนต์สำหรับแสดงข้อความ ซึ่งอาจเป็นการแจ้งเตือน...</div>
                <button className="btn-close" data-bs-dismiss="alert"></button>
            </div>

            <div className="alert alert-warning alert-dismissible fade show">
                <h4 className="alert-heading">คำเตือน</h4>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore ...
                </div>
                <button className="btn-close" data-bs-dismiss="alert"></button>
            </div>
        </div>
    )
}