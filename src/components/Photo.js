import React from 'react';
import { MailOutlined, PhoneOutlined, GithubOutlined} from '@ant-design/icons';
import '../CSSs/Photo.css';
function Photo() {
    return (
        <div className="flip-container">
            <div className="flipper">
                <div className="front">
                </div>
                <div className="back">
                    <div className="back_text">
                        <p className="text_line2"><MailOutlined className="IconImage"/>Snstkfka02@Hanmail.net</p>
                        <p className="text_line2"><PhoneOutlined className="IconImage"/>010 - 2999 - 3667</p>
                        <p className="text_line2"><GithubOutlined className="IconImage"/><a href="https://github.com/Pyosoo" target="_blank">Github.com/Pyosoo</a></p><br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photo;