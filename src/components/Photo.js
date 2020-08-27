import React from 'react';
import { MailOutlined, PhoneOutlined, GithubOutlined, InstagramOutlined} from '@ant-design/icons';
import '../CSSs/Photo.css';
function Photo() {
    return (
        <div className="flip-container">
            <div className="flipper">
                <div className="front">
                </div>
                <div className="back">
                    <p className="back_text">
                        <p className="text_line2"><MailOutlined className="IconImage"/>Snstkfka02@Hanmail.net</p>
                        <p className="text_line2"><PhoneOutlined className="IconImage"/>010 - 2999 - 3667</p>
                        <p className="text_line2"><GithubOutlined className="IconImage"/><a href="https://github.com/Pyosoo" target="_blank">Github.com/Pyosoo</a></p><br/>
                        <p className="text_line2"><InstagramOutlined className="IconImage"/><a href="https://instagram.com/Pyojeon" target="_blank">PyoJeon</a></p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Photo;