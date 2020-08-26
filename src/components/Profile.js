import React from 'react';
import '../CSSs/Profile.css';
import {GithubOutlined, InstagramOutlined, PhoneOutlined, MailOutlined} from '@ant-design/icons'; 

function Profile(){
    return(
        <div className="Profile_Total_Container">
            {/* 이름 이메일 주소  등적 힐 곳 */}
            <div className="top_line"> 
                <h3>Contact Me!</h3>
                <p><MailOutlined /> snstkfka02@hanmail.net</p>
                <p><PhoneOutlined /> 010-2999-3667</p>
            </div>
            {/* 인스타, 깃허브, 번호 */}
            <div className="bottom_line">
                <div className="bottom_item">
                    <a href="https://github.com/pyosoo" target="blank"><GithubOutlined style={{fontSize:'60px'}}/></a>
                </div>
                <div className="bottom_item">
                    <a href="https://www.instagram.com/pyojeon/" target="blank"><InstagramOutlined style={{fontSize:'60px'}}/></a>
                </div>
                <div className="bottom_item">
                    <PhoneOutlined  style={{fontSize:'60px'}}/>
                </div>
            </div>
        </div>
    )
}

export default Profile;