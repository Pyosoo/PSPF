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
const pj4Arr = ['PJ4-1', 'PJ4-2', 'PJ4-3', 'PJ4-4'];
const pj6Arr = ['PJ6-1', 'PJ6-2', 'PJ6-3', 'PJ6-4', 'PJ6-5']

// =========== 프로젝트 클릭시 관련 MODAL 창 ==================
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        display: 'flex',
        justifyContent : 'center',
        backgroundColor: 'rgb(179, 178, 178)',
        borderRadius: '5px 5px 5px 5px',
        color: 'white',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '60%',
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



    // ================ PJ4 모달 창 관련 ==================================
    const [imgidx4, setImgidx4] = useState(0); // 이미지 slide효과 위한 index
    const classes4 = useStyles();
    const [open4, setOpen4] = React.useState(false);

    const handleOpen4 = () => {
        setOpen4(true);
    };

    const handleClose4 = () => {
        setOpen4(false);
    };
    const minusIndex4 = () => {
        if (imgidx4 <= 0) {
            setImgidx4(3);
        } else {
            setImgidx4(imgidx4 - 1);
        }
    }

    const plusIndex4 = () => {
        if (imgidx4 >= 3) {
            setImgidx4(0);
        } else {
            setImgidx4(imgidx4 + 1);
        }
    }


    // ================ PJ6 모달 창 관련 ==================================
    const [imgidx6, setImgidx6] = useState(0); // 이미지 slide효과 위한 index
    const classes6 = useStyles();
    const [open6, setOpen6] = React.useState(false);

    const handleOpen6 = () => {
        setOpen6(true);
    };

    const handleClose6 = () => {
        setOpen6(false);
    };
    const minusIndex6 = () => {
        if (imgidx6 <= 0) {
            setImgidx6(4);
        } else {
            setImgidx4(imgidx6 - 1);
        }
    }

    const plusIndex6 = () => {
        if (imgidx6 >= 4) {
            setImgidx6(0);
        } else {
            setImgidx6(imgidx6 + 1);
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
                        안녕하세요, 프론트엔드 개발자를 꿈꾸는 전표수입니다.
                        사용자와 서비스를 연결시켜주는 프론트엔드에 매력을 느끼고 도전하고 있습니다.
                        새로운 것을 배우는 걸 좋아하며, 매우 활동적인 성격을 가지고 있습니다.
                        React에 관심을 갖고 있으며 새롭고 사용자의 불편함을 해결해주는 편한 서비스를 만들고 싶습니다. 
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
                                    70%
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
                                    50%
                                </div>
                            </div>
                            <div className="square square4">
                                <span></span>
                                <span></span>
                                <span></span>
                                <div className="content">
                                    JS
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
                        </div>
                    </div>

                    <div className="project_item6 pjitem" onClick={handleOpen6}>
                        <div className="project_img6 pjimg"></div>
                        <div className="project_des6 desc">
                            <p>IT스터디 구인 게시판 웹앱(2020)</p>
                        </div>
                    </div>

                    <div className="project_item2 pjitem" onClick={handleOpen2}>
                        <div className="project_img2 pjimg" ></div>
                        <div className="project_des2 desc">
                            <p>농구 기록지 어플리케이션(2019)</p>
                        </div>
                    </div>

                    <div className="project_item4 pjitem" onClick={handleOpen4}>
                        <div className="project_img4 pjimg" ></div>
                        <div className="project_des4 desc">
                            <p>공사중인 지하철역은?(2020)</p>
                        </div>
                    </div>

                    <div className="project_item3 pjitem" onClick={handleOpen3}>
                        <div className="project_img3 pjimg"></div>
                        <div className="project_des3 desc">
                            <p>컴투스 3x3 프리미어리그 사이트(2020)</p>
                        </div>
                    </div>

                </div>

                <h4>Thank you for viewing this site :)</h4>
                <h4>If you are interested in me, try hovering the picture on the left.</h4>


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

                           

                        <div className="Modal_textContainer Mt1">
                            <h3> 반응형 구구단 학습 웹앱</h3>
                            <p>팀원 수 : 2명(기획디자인, 프론트엔드)</p>
                            <p>나의 역할 : 프론트엔드 전체</p>
                            <p>협업 도구 : Figma</p>
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
                            <h3>농구기록지 App</h3>
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
                            <h3>컴투스 3x3 리그 웹사이트</h3>
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


            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open4}
                onClose={handleClose4}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open4}>
                    <div className={classes.paper}>

                        <button className="ImgControlBtn leftBtn" onClick={minusIndex4}>◁</button>

                        <div className="Modal_ImgContainer">
                            <img className="Modal_img" src={require(`../Images/PJ4/${pj4Arr[imgidx4]}.PNG`)}></img>
                        </div>
                        <button className="ImgControlBtn rightBtn" onClick={plusIndex4}>▷</button>

                        <div className="Modal_textContainer Mt4">
                            <h3>내 주위 공사중 지하철역(리뉴얼중)</h3>
                            <p>팀원 수 : 백엔드 1명 포함 2인</p>
                            <p>나의 역할 : 프론트엔드 </p>
                            <p>사용 기술 : 프론트 : Javascript, HTML, CSS, React.js Redux Navermap API<br/>
                                        백엔드 : Python, Django, DRF, SQLite, PythonAnywhere
                            </p>
                            <p>설명 : 현재 지하철역의 승강 시설의 공사중 유무 데이터를 크롤링하여 사용자들에게 쉽게 알 수 있는 사이트를 제공해주고자
                                만들게 되었습니다. 시작 시 위치허용을 통해 자기 중심의 지도로 시작하며, 사이드바 이동을 통해 지하철의 정보, 도착예정시간을 확인할 수 있습니다.
                                현재 공모전을 계기로 새로운 기능과 디자인을 통해 리뉴얼 중인 프로젝트입니다.
                            </p>
                            <p className="Atag_line">
                                <a href="https://pyosoo.github.io/under_construction/" target="blank" className="Atag">체험하기</a>
                                <a href="https://github.com/Pyosoo/under_construction" target="blank" className="Atag">GitHub<GithubOutlined /></a>
                            </p>
                            <button className="button2 btn2" onClick={handleClose4}>Close</button>
                        </div>
                    </div>
                </Fade>
            </Modal>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open6}
                onClose={handleClose6}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open6}>
                    <div className={classes.paper}>

                        <button className="ImgControlBtn leftBtn" onClick={minusIndex6}>◁</button>

                        <div className="Modal_ImgContainer">
                            <img className="Modal_img" src={require(`../Images/PJ6/${pj6Arr[imgidx6]}.PNG`)}></img>
                        </div>
                        <button className="ImgControlBtn rightBtn" onClick={plusIndex6}>▷</button>

                        <div className="Modal_textContainer">
                            <h2>IT스터디 게시판 웹앱</h2>
                            <p>나의 역할 : 개인프로젝트(진행중)</p>
                            <p>사용 기술 : React, Redux, Firebase(DB,Hosting,Auth), HTML, CSS, Javascript</p>
                            <p>기능 : 글보기, 글쓰기, 스크랩, 댓글(수정,삭제), 나의 페이지, 포지션&지역 별 글보기</p>
                            <p>설명 : 기존의 딱딱한 틀을 벗어난 새로운 형태의 게시판을 만들어 보았습니다.</p>
                            <p className="Atag_line">
                            <a href="https://studysitefb.firebaseapp.com/" target="blank" className="Atag">체험하기</a>
                            </p>
                            <button className="button2 btn2" onClick={handleClose6}>Close</button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default Main;