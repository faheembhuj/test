import React from 'react';
import { IoIosMenu, IoIosSearch, IoMdArrowDropdown, IoMdMore, IoMdEye } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import { AiFillGoogleSquare, AiFillFacebook, AiOutlineClose } from "react-icons/ai";
import firebase from '../config/firebase';
import { connect } from 'react-redux';
import { add_user, } from '../store/action';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            showSignin: false,
            showSignUp: false,
            loginEmail: '',
            loginPassword: '',
            signupEmail: '',
            signupPassword: '',
            signupFirstName: '',
            signupLastName: '',
            signupConfirmPassword: '',
            signupUserName: '',
            user: undefined
        }
    }
    signup() {
        const { signupEmail, signupPassword, signupConfirmPassword, signupFirstName, signupLastName, signupUserName } = this.state;
        const user = {
            email: signupEmail,
            password: signupPassword,
            firstName: signupFirstName,
            lastName: signupLastName,
            username: signupUserName,
        }
        console.log(user)
        firebase.auth().createUserWithEmailAndPassword(signupEmail, signupPassword).then(() => {
            const uid = firebase.auth().currentUser.uid;
            user.uid = uid;
            firebase.database().ref("users/" + uid).set(user).then(() => {
                this.setState({ showSignUp: false, showSignin: true })
            })
        })
    }
    signin() {
        const { loginEmail, loginPassword } = this.state;
        const user = {
            email: loginEmail,
            password: loginPassword
        }
        console.log(user)
        firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword).then(() => {
            let uid = firebase.auth().currentUser.uid;
            firebase.database().ref("users/" + uid).once("value").then((data) => {
                const user = data.val();
                this.props.set_user(user)
                this.props.history.push(`/user/${user.firstName + " " + user.lastName}`)

            })
        })

    }
    componentDidMount() {
        this.setState({ user: this.props.user })
    }
    render() {
        return (
            <div className={'container'}>
                <div className={'box1'}>
                    <div className={'header'}>
                        <div className={'headerLogoArea'}>
                            <AiOutlineMenu />
                            <img src={require("../assets/images/logo.png")} width='160px' />
                        </div>
                        <div className={'headerSearchArea'}>
                            <input placeholder='search' /><button className={'headerSearchBtn'}><IoIosSearch /></button>
                        </div>
                        <div className={'headerBtns'}>
                            <p>App <IoMdArrowDropdown /></p>
                            {!this.state.user && <button onClick={() => { this.setState({ showSignin: true }) }} className={'headerSignInBtn'}><FaRegUserCircle size='30px' />  SIGN IN</button>}
                            {this.state.user && <button className={'headerSignInBtn'}><FaRegUserCircle size='30px' />  {this.state.user.firstName.toUpperCase() + " " + this.state.user.lastName.toUpperCase()}</button>}
                            <button className={'headerDropDown'}><FiMoreVertical /></button>
                        </div>
                    </div>
                    <div className={'box1Content'}>

                        <img src={require('../assets/images/logo2.png')} />
                        <p>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                        </p>

                    </div>
                </div>
                <div className={"box2"}>
                    <div>
                        <div>
                            <img src={require('../assets/images/1.png')} />
                            <div>
                                <div><p className={'dot'}><GoPrimitiveDot /></p> <p>Gaming</p> </div>
                                <div><p><IoMdEye /></p> <p>2047</p> </div>
                            </div>
                        </div>

                        <div>
                            <img src={require('../assets/images/2.png')} />
                            <div>
                                <div><p className={'dot'}><GoPrimitiveDot /></p> <p>Gaming</p> </div>
                                <div><p><IoMdEye /></p> <p>2047</p> </div>
                            </div>
                        </div>

                        <div>
                            <img src={require('../assets/images/3.png')} />
                            <div>
                                <div><p className={'dot'}><GoPrimitiveDot /></p> <p>Gaming</p> </div>
                                <div><p><IoMdEye /></p> <p>2047</p> </div>
                            </div>
                        </div>


                        <div>
                            <img src={require('../assets/images/4.png')} />
                            <div>
                                <div><p className={'dot'}><GoPrimitiveDot /></p> <p>Gaming</p> </div>
                                <div><p><IoMdEye /></p> <p>2047</p> </div>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div>
                            <img src={require('../assets/images/5.png')} />
                            <div>
                                <div><p className={'dot'}><GoPrimitiveDot /></p> <p>Gaming</p> </div>
                                <div><p><IoMdEye /></p> <p>2047</p> </div>
                            </div>
                        </div>

                        <div>
                            <img src={require('../assets/images/6.png')} />
                            <div>
                                <div><p className={'dot'}><GoPrimitiveDot /></p> <p>Gaming</p> </div>
                                <div><p><IoMdEye /></p> <p>2047</p> </div>
                            </div>
                        </div>

                        <div>
                            <img src={require('../assets/images/7.png')} />
                            <div>
                                <div><p className={'dot'}><GoPrimitiveDot /></p> <p>Gaming</p> </div>
                                <div><p><IoMdEye /></p> <p>2047</p> </div>
                            </div>
                        </div>


                        <div>
                            <img src={require('../assets/images/8.png')} />
                            <div>
                                <div><p className={'dot'}><GoPrimitiveDot /></p> <p>Gaming</p> </div>
                                <div><p><IoMdEye /></p> <p>2047</p> </div>
                            </div>
                        </div>
                    </div>



                    <div>
                        <div>
                            <img src={require('../assets/images/9.png')} />
                            <div>
                                <div><p className={'dot'}><GoPrimitiveDot /></p> <p>Gaming</p> </div>
                                <div><p><IoMdEye /></p> <p>2047</p> </div>
                            </div>
                        </div>

                        <div>
                            <img src={require('../assets/images/10.png')} />
                            <div>
                                <div><p className={'dot'}><GoPrimitiveDot /></p> <p>Gaming</p> </div>
                                <div><p><IoMdEye /></p> <p>2047</p> </div>
                            </div>
                        </div>

                        <div>
                            <img src={require('../assets/images/11.png')} />
                            <div>
                                <div><p className={'dot'}><GoPrimitiveDot /></p> <p>Gaming</p> </div>
                                <div><p><IoMdEye /></p> <p>2047</p> </div>
                            </div>
                        </div>


                        <div>
                            <img src={require('../assets/images/1.png')} />
                            <div>
                                <div><p className={'dot'}><GoPrimitiveDot /></p> <p>Gaming</p> </div>
                                <div><p><IoMdEye /></p> <p>2047</p> </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className={'box3'}>
                    <div className={'joinUs'}>
                        <h1>Join The Assemble Community</h1>
                        <button>JOIN US</button>
                    </div>
                </div>

                <div className={'footer'}>
                    <p>Privacy Policy - Terms of Service - All Trademarks - Their Respective Owners</p>
                    <p>@ 2008 - 19 Assemble</p>
                </div>
                {this.state.showSignin && <div id="myModal" class="modal">


                    <div class="modal-content" >

                        <p onClick={() => { this.setState({ showSignin: false }) }} style={{ color: "#C39C01", textAlign: "right", cursor: "pointer" }}><AiOutlineClose size='25px' /></p>

                        <div className={'modalForm'}>
                            <button style={{ backgroundColor: "white", color: "black" }}><AiFillGoogleSquare size='25px' /> CONTINUE WITH GOOGLE</button>
                            <button><AiFillFacebook size='25px' /> CONTINUE WITH FACEBOOK</button>
                            <p>-OR-</p>
                            <form action={'JavaScript:void(0)'}>
                                <div>
                                    <input placeholder='email' type='email' onChange={(e) => { this.setState({ loginEmail: e.target.value }) }} required />
                                    <input placeholder='password' type='password' onChange={(e) => { this.setState({ loginPassword: e.target.value }) }} required />
                                </div>
                                <small style={{ color: "#C39C01" }}>Forgot Password?</small>
                                <br />
                                <button onClick={() => { this.signin() }}>SIGN IN</button>
                                <p>Don't have an account? <span style={{ color: "#C39C01", cursor: "pointer" }} onClick={() => { this.setState({ showSignUp: true, showSignin: false }) }}>Sign up</span></p>
                            </form>
                        </div>
                    </div>

                </div>}
                {this.state.showSignUp && <div id="myModal" class="modal">


                    <div class="modal-content" >

                        <p onClick={() => { this.setState({ showSignUp: false }) }} style={{ color: "#C39C01", textAlign: "right", cursor: "pointer" }}><AiOutlineClose size='25px' /></p>

                        <div className={'modalForm'}>
                            <button style={{ backgroundColor: "white", color: "black" }}><AiFillGoogleSquare size='25px' /> CONTINUE WITH GOOGLE</button>
                            <button><AiFillFacebook size='25px' /> CONTINUE WITH FACEBOOK</button>
                            <p>-OR-</p>
                            <form action={'JavaScript:void(0)'} className={"signuUpForm"}>
                                <input placeholder='First Name' type='text' onChange={(e) => { this.setState({ signupFirstName: e.target.value }) }} required />
                                <input placeholder='Last Name' type='text' onChange={(e) => { this.setState({ signupLastName: e.target.value }) }} required />
                                <br />
                                <input placeholder='Email Address' type='email' onChange={(e) => { this.setState({ signupEmail: e.target.value }) }} required />
                                <input placeholder='Username' type='text' onChange={(e) => { this.setState({ signupUserName: e.target.value }) }} required />
                                <br />
                                <input placeholder='Password' type='password' onChange={(e) => { this.setState({ signupPassword: e.target.value }) }} required required />
                                <input placeholder='Confirm Password' type='password' onChange={(e) => { this.setState({ signupConfirmPassword: e.target.value }) }} required />

                                <br />
                                <button onClick={() => { this.signup() }}>SIGN UP</button>
                                <p>Already have an account? <span style={{ color: "#C39C01", cursor: "pointer" }} onClick={() => { this.setState({ showSignUp: false, showSignin: true }) }}>Sign in</span></p>
                            </form>
                        </div>
                    </div>

                </div>}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        set_user: (user) => dispatch(add_user(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);