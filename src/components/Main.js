import React from 'react';
import { useState, useEffect, useRef } from "react";
import '../CSSs/Main.css';
import useTypewriter from "react-typewriter-hook";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { GithubOutlined } from '@ant-design/icons';
const pj1Arr = ['pj1-0', 'pj1-1', 'pj1-2', 'pj1-3', 'pj1-4', 'pj1-5'];
const pj2Arr = ['PJ2-1', 'PJ2-2', 'PJ2-3'];
const pj3Arr = ['PJ3-1', 'PJ3-2', 'PJ3-3', 'PJ3-4', 'PJ3-5', 'PJ3-6'];

// =========== 프로젝트 클릭시 관련 MODAL 창 ==================
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        display: 'flex',
        backgroundColor: 'rgb(179, 178, 178)',
        borderRadius: '20px 20px 20px 20px',
        color: 'white',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '900px',
        height: '450px',
        outline: '0px'
    },
}));
// ============================================================

const f = (data) => {
    console.log(data);
}

for (let i = 1; i <= 2; i++) {
    f(i);
}

function Main() {
    // ================ 타이핑 효과 관련 ==========================
    const MagicOcean = [
        "Yo, did you see that?",
        "Fine, I' ll show you again.",
        "事不过三，bye."
    ];
    let index = 0;

    const [magicName, setMagicName] = useState("Dreamer of Front-End Developer");
    const intervalRef = useRef({});
    const name = useTypewriter(magicName);
    useEffect(
        () => {
            intervalRef.current = setInterval(() => {
                index = index > 2 ? 0 : ++index;
                setMagicName("Dreamer of Front-End Developer");
            }, 1000);
            return function clear() {
                clearInterval(intervalRef.current);
            };
        },
        [magicName]
    );
    // ===============================================================







    // ================ PJ1 모달 창 관련 ==================================
    const [imgidx, setImgidx] = useState(0); // 이미지 slide효과 위한 index
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const minusIndex = () => {
        if (imgidx <= 0) {
            setImgidx(5);
        } else {
            setImgidx(imgidx - 1);
        }
    }

    const plusIndex = () => {
        if (imgidx >= 5) {
            setImgidx(0);
        } else {
            setImgidx(imgidx + 1);
        }
    }
    // ================ PJ2 모달 창 관련 ==================================
    const [imgidx2, setImgidx2] = useState(0); // 이미지 slide효과 위한 index
    const classes2 = useStyles();
    const [open2, setOpen2] = React.useState(false);

    const handleOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };
    const minusIndex2 = () => {
        if (imgidx2 <= 0) {
            setImgidx2(2);
        } else {
            setImgidx2(imgidx2 - 1);
        }
    }

    const plusIndex2 = () => {
        if (imgidx2 >= 2) {
            setImgidx2(0);
        } else {
            setImgidx2(imgidx2 + 1);
        }
    }

    // ================ PJ3 모달 창 관련 ==================================
    const [imgidx3, setImgidx3] = useState(0); // 이미지 slide효과 위한 index
    const classes3 = useStyles();
    const [open3, setOpen3] = React.useState(false);

    const handleOpen3 = () => {
        setOpen3(true);
    };

    const handleClose3 = () => {
        setOpen3(false);
    };
    const minusIndex3 = () => {
        if (imgidx3 <= 0) {
            setImgidx3(5);
        } else {
            setImgidx3(imgidx3 - 1);
        }
    }

    const plusIndex3 = () => {
        if (imgidx3 >= 5) {
            setImgidx3(0);
        } else {
            setImgidx3(imgidx3 + 1);
        }
    }




    const GoTop = () => {
        document.querySelector('#TOP').scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
    const GoSKILLSET = () => {
        document.querySelector('#SKILLSET').scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
    const GoPROJECT = () => {
        document.querySelector('#PROJECT').scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
    return (
        <div className="Main_Total_Container">
            <div className="rain_container">
                <div className="rain1 rain"></div>
                <div className="rain2 rain"></div>
                <div className="rain3 rain"></div>
                <div className="rain4 rain"></div>
                <div className="rain5 rain"></div>
            </div>
           
            <div id="TOP" ></div>
            <div className="Logo" onClick={GoTop}></div>
            
            <div className="MenuIcon"></div>


            <div className="Main_Container">
                <div className="Main_text">
                    <p className="text_box text1">{name}</p>
                    <p className="text_box">
                        <span>Pyosoo.JEON</span> <br />
                        I love Front-end.
                        This can help me communicate to user.
                        Especially i enjoying React.
                        and also i like learn new skills.
                        I Always have a challenging attitude to everyting <br />
                        Finally, I Love every sports play with a ball :)
                        </p>
                    <button className="button" onClick={GoSKILLSET}>See More</button>
                </div>

                <div id="SKILLSET"></div>

                <div id="SKILLSET2" className="Main_skillset">
                    <h1>What I Can Do!</h1>
                    <div className="skill_item_Container">
                        <div>
                            <div className="square square1">
                                <span></span>
                                <span></span>
                                <span></span>
                                <div className="content">
                                    C
                                </div>
                                <div className="content_hover">
                                    60%
                                </div>
                            </div>
                            <div className="square square2">
                                <span></span>
                                <span></span>
                                <span></span>
                                <div className="content">
                                    C++
                                </div>
                                <div className="content_hover">
                                    80%
                                </div>
                            </div>
                            <div className="square square3">
                                <span></span>
                                <span></span>
                                <span></span>
                                <div className="content">
                                    Java
                                </div>
                                <div className="content_hover">
                                    60%
                                </div>
                            </div>
                            <div className="square square4">
                                <span></span>
                                <span></span>
                                <span></span>
                                <div className="content">
                                    Javascript
                                </div>
                                <div className="content_hover">
                                    60%
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="square square5">
                                <span></span>
                                <span></span>
                                <span></span>
                                <div className="content">
                                    React
                                </div>
                                <div className="content_hover">
                                    60%
                                </div>
                            </div>
                            <div className="square square6">
                                <span></span>
                                <span></span>
                                <span></span>
                                <div className="content">
                                    HTML
                                </div>
                                <div className="content_hover">
                                    70%
                                </div>
                            </div>
                            <div className="square square7">
                                <span></span>
                                <span></span>
                                <span></span>
                                <div className="content">
                                    CSS
                                </div>
                                <div className="content_hover">
                                    70%
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <button className="button btn1" onClick={GoPROJECT}>See More</button>


                <div id="PROJECT" className="Main_project">
                    <h1>My Project</h1>

                        <div className="project_item1 pjitem" onClick={handleOpen}>
                            <div className="project_img1 pjimg"></div>
                            <div className="project_des1 desc">
                                <p>구구단 학습 반응형 웹앱(2020)</p>
                                <p>RESPONSIVE WEB</p>
                            </div>
                        </div>
                   
                    <div className="project_item2 pjitem" onClick={handleOpen2}>
                        <div className="project_img2 pjimg" ></div>
                        <div className="project_des2 desc">
                            <p>농구 기록지 어플리케이션(2019)</p>
                            <p>MOBILE APP</p>
                        </div>
                    </div>
                    <div className="project_item3 pjitem" onClick={handleOpen3}>
                        <div className="project_img3 pjimg"></div>
                        <div className="project_des3 desc">
                            <p>컴투스 3x3 프리미어리그 웹 창작(2020)</p>
                            <p>WEB</p>
                        </div>
                    </div>

                </div>


                <h4>If you're curious about Me, try hovering the picture on the left.</h4>


            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>

                        <button className="ImgControlBtn leftBtn" onClick={minusIndex}>◁</button>

                        <div className="Modal_ImgContainer">
                            <img className="Modal_img" src={require(`../Images/PJ1/${pj1Arr[imgidx]}.PNG`)}></img>
                        </div>
                        <button className="ImgControlBtn rightBtn" onClick={plusIndex}>▷</button>

                        <div className="Modal_textContainer">
                            <h2> 반응형 구구단 학습 웹앱</h2>
                            <p>팀원 수 : 2명(기획디자인, 프론트엔드)</p>
                            <p>나의 역할 : 프론트엔드 전체</p>
                            <p>설명 : 유아 구구단 학습을 위한 반응형 웹앱 사이트로 모바일 및 타블렛, PC버전으로 각각 이용이 가능합니다.
                                구구단외우기, 연습모드(객관식), 시험보기(서술형), 성적확인 을 통한 훈련이며 Localstorage를 이용하여 구현하였습니다.</p>
                            <p className="Atag_line">
                                <a href="https://pyosoo.github.io/ggd_webapp" target="blank" className="Atag">체험하기</a>
                                <a href="https://github.com/Pyosoo/ggd_webapp" target="blank" className="Atag">GitHub<GithubOutlined /></a>
                            </p>
                            <button className="button2 btn2" onClick={handleClose}>Close</button>
                        </div>
                    </div>
                </Fade>
            </Modal>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open2}
                onClose={handleClose2}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open2}>
                    <div className={classes.paper}>

                        <button className="ImgControlBtn leftBtn" onClick={minusIndex2}>◁</button>

                        <div className="Modal_ImgContainer">
                            <img className="Modal_img" src={require(`../Images/PJ2/${pj2Arr[imgidx2]}.PNG`)}></img>
                        </div>
                        <button className="ImgControlBtn rightBtn" onClick={plusIndex2}>▷</button>

                        <div className="Modal_textContainer">
                            <h2>농구기록지 App</h2>
                            <p>나의 역할 : 개인프로젝트</p>
                            <p>사용 기술 : Java, AndroidStudio, Firebase</p>
                            <p>설명 : 농구 기록지의 불편함을 해결하기 위해 만들어본 APP으로, 농구 기록지 작성, 기록지 검색, 기록별 랭킹 검색 기능이 있어
                                아마추어 농구 동호회의 활성화를 위해 재미요소를 추가하는 의미로 만들어보았습니다.</p>
                            <p className="Atag_line">
                                <a href="https://github.com/Pyosoo/BRSsystem" target="blank" className="Atag">GitHub<GithubOutlined /></a>
                            </p>
                            <button className="button2 btn2" onClick={handleClose2}>Close</button>
                        </div>
                    </div>
                </Fade>
            </Modal>


            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open3}
                onClose={handleClose3}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open3}>
                    <div className={classes.paper}>

                        <button className="ImgControlBtn leftBtn" onClick={minusIndex3}>◁</button>

                        <div className="Modal_ImgContainer">
                            <img className="Modal_img" src={require(`../Images/PJ3/${pj3Arr[imgidx3]}.PNG`)}></img>
                        </div>
                        <button className="ImgControlBtn rightBtn" onClick={plusIndex3}>▷</button>

                        <div className="Modal_textContainer">
                            <h2>컴투스 3x3프리미어 리그 웹사이트</h2>
                            <p>나의 역할 : 개인프로젝트</p>
                            <p>사용 기술 : Javascript, HTML, CSS, React.js</p>
                            <p>설명 : 컴투스에서 주최한 3x3프리미어리그를 재미있게 보고 이 대회만을 위한 사이트를 찾던 중 발견하지 못하여
                                더욱 이 대회에만 집중되있는 사이트를 만들어보고 싶었습니다. 각 라운드별 결과를 확인할 수 있습니다.</p>
                            <p className="Atag_line">
                                <a href="https://pyosoo.github.io/react_study/" target="blank" className="Atag">체험하기</a>
                                <a href="https://github.com/Pyosoo/react_study" target="blank" className="Atag">GitHub<GithubOutlined /></a>
                            </p>
                            <button className="button2 btn2" onClick={handleClose3}>Close</button>
                        </div>
                    </div>
                </Fade>
            </Modal>

        </div>
    )
}

export default Main;