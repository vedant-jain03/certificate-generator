import React, { useRef, useState } from 'react'
import "./homepage.css"
import { useReactToPrint } from 'react-to-print';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import template1 from "../cert_templates/Template1.png";
import template2 from "../cert_templates/Template2.png";
import firebase from "../firebase"
import template3 from "../cert_templates/Template3.png";
import template4 from "../cert_templates/Template4.jpeg";
import ReactToPrint from 'react-to-print';

export class ComponentToPrint extends React.PureComponent {
    render() {
        switch (this.props.template) {
            case "template1": {
                return (
                    <div style={{ position: 'relative' }} id="template1" >
                        <img src={template1} style={{ width: '45rem' }}></img>

                        <div className="info" style={{ position: 'absolute', top: '39%', left: '36%', width: '60%' }}>
                            <h2 style={{ textTransform: 'uppercase', color: '#0e4573', textDecoration: 'underline', marginBottom: '1rem' }}>{this.props.heading === '' ? 'Certificate of Achievement' : this.props.heading}</h2>
                            <h3 style={{ fontSize: '16px', fontWeight: '500', color: '#ff9800', textTransform: 'uppercase', letterSpacing: '3px' }}>This is presented to</h3>
                            <h1 style={{ fontSize: '3rem', color: '#33d5ac' }}>{this.props.name === '' ? 'Name' : this.props.name}</h1>
                            <p style={{ fontSize: '15px', fontWeight: '600', color: '#ff9800' }}>{this.props.desc === '' ? 'for the active participation in the event and for giving efforts,ideas and Knowledge.' : this.props.desc}</p>
                        </div>
                        <div className="author" style={{ position: 'absolute', top: '59%', left: '10%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '20%', textAlign: 'center' }}>
                            <h2 style={{ fontSize: '12px', color: '#0e4573', textDecoration: 'underline', textTransform: 'uppercase' }}>Course Director</h2>
                            <h1 style={{ fontSize: '20px', color: '#ff9800', textTransform: 'uppercase' }}>{this.props.author === '' ? 'Author Name' : this.props.author}</h1>
                        </div>
                        {this.props.logo === '' ? "" : <img src={this.props.logo} style={{ position: 'absolute', width: '6rem', borderRadius: '50%', top: '20%', left: '35%' }} alt="logo" />}

                    </div>
                );
            }
            case "template2": {
                return (
                    <div style={{ position: 'relative' }} id="template2">
                        <img src={template2} style={{ width: '45rem' }}></img>

                        <div className="info" style={{ position: 'absolute', top: '34%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h2 style={{ color: 'rgb(255 251 240)', textDecoration: 'underline', marginBottom: '3rem' }}>{this.props.heading === '' ? 'Certificate of Achievement' : this.props.heading}</h2>
                            {/* <h3 style={{ fontSize: '16px', fontWeight: '500', color: '#ff9800', textTransform: 'uppercase', letterSpacing: '3px' }}>This is presented to</h3> */}
                            <h1 style={{ fontSize: '3rem', color: 'rgb(209 254 255)' }}>{this.props.name === '' ? 'Name' : this.props.name}</h1>
                            <p style={{ fontSize: '15px', fontWeight: '600', color: 'rgb(255 251 240)', width: '60%', textAlign: 'center' }}>{this.props.desc === '' ? 'for the active participation in the event and for giving efforts,ideas and Knowledge.' : this.props.desc}</p>
                        </div>
                        <div className="author" style={{ position: 'absolute', top: '80%', left: '26%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <h2 style={{ fontSize: '12px', color: 'rgb(187 238 243)', textDecoration: 'underline' }}>Course Director</h2>
                            <h1 style={{ fontSize: '20px', color: '#ace3ea', }}>{this.props.author === '' ? 'Author Name' : this.props.author}</h1>
                        </div>
                        {this.props.logo === '' ? '' : <img src={this.props.logo} style={{ position: 'absolute', width: '4rem', borderRadius: '50%', top: '78%', left: '62%' }} alt="logo" />}

                    </div>
                );
            }
            case "template3": {
                return (
                    <div style={{ position: 'relative' }} id="template2">
                        <img src={template3} style={{ width: '45rem' }}></img>

                        <div className="info" style={{ position: 'absolute', top: '25%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h2 style={{ color: 'white', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1rem' }}>{this.props.heading === '' ? 'Certificate of Achievement' : this.props.heading}</h2>
                            <h3 style={{ fontSize: '16px', fontWeight: '500', color: 'rgb(255, 152, 0)', textTransform: 'uppercase', letterSpacing: '3px' }}>is hereby awarded to</h3>
                            <h1 style={{ fontSize: '3rem', color: '#e55e5e' }}>{this.props.name === '' ? 'Name' : this.props.name}</h1>
                            <p style={{ fontSize: '15px', fontWeight: '600', color: 'rgb(255 251 240)', width: '60%', textAlign: 'center' }}>{this.props.desc === '' ? 'for the active participation in the event and for giving efforts,ideas and Knowledge.' : this.props.desc}</p>
                        </div>
                        <div className="author" style={{ position: 'absolute', top: '70%', left: '41%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <h2 style={{ fontSize: '12px', color: 'white', textDecoration: 'underline' }}>Course Director</h2>
                            <h1 style={{ fontSize: '20px', color: 'rgb(231 133 58)', }}>{this.props.author === '' ? 'Author Name' : this.props.author}</h1>
                        </div>
                        {this.props.logo === '' ? '' : <img src={this.props.logo} style={{ position: 'absolute', width: '4rem', borderRadius: '50%', top: '10%', left: '45%' }} alt="logo" />}

                    </div>
                );
            }
            case "template4": {
                return (
                    <div style={{ position: 'relative' }} id="template2">
                        <img src={template4} style={{ width: '45rem' }}></img>
                        <h1 style={{ fontSize: '3rem', color: 'black', position: 'absolute', top: '9rem', left: '25px', wordBreak: 'break-all' }}>{this.props.name === '' ? 'Name' : this.props.name}</h1>
                        <h6 style={{ fontSize: '15px', fontWeight: '600', color: '#213a62', width: '60%', position: 'absolute', top: '17rem', left: '27px', wordBreak: 'break-all' }}>{this.props.desc === '' ? 'for the active participation in the event and for giving efforts,ideas and Knowledge.' : this.props.desc}</h6>
                        <h1 style={{ fontSize: '15px', color: 'black', position: 'absolute', top: '19.95rem', left: '8.6rem', wordBreak: 'break-all' }}>{this.props.author === '' ? 'Author Name' : this.props.author}</h1>
                    </div>
                );
            }
        }

    }
}
const Popup = (props) => {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-box">
                <button onClick={() => props.setpop(false)} >Close</button>
                <h1>Rules for Setup Printing Page</h1>
                <div className="content">
                    <li>Destination: Save as PDF</li>
                    <li>Pages: All</li>
                    <li>Layout: Landscape</li>
                    <h2>More Settings</h2>
                    <li>Paper Size: A4</li>
                    <li>Paper per Sheet:1</li>
                    <li>Margins: none</li>
                    <li>Scale: Custom 200</li>
                </div>
            </div>
        </div>
    ) : null;
}
function Homepage() {
    const [pop, setpop] = useState(false);
    const [name, setname] = useState('');
    const [heading, setheading] = useState('');
    const [desc, setdesc] = useState('');
    const [author, setauthor] = useState('');
    const [logo, setlogo] = useState('');
    const [template, settemplate] = useState('template4');
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const signout = () => {
        firebase.auth().signOut();
    }
    return (
        <div className="main">
            <Popup trigger={pop} setpop={setpop} >
            </Popup>
            <div className="header">
                <div className="left">
                    <h2>Hash/Hub</h2>
                </div>
                <div className="Middle">
                    <h1>Certificate Generator</h1>
                </div>
                <div className="right">
                    <button className="info" onClick={() => setpop(true)}>i</button>
                    <a href="https://github.com/vedant-jain03/certificate-generator">Contribute <ArrowUpwardIcon />  </a>
                    <a href="https://github.com/vedant-jain03/certificate-generator">Give us <StarOutlineIcon /> </a>
                    <button onClick={signout}>Logout</button>
                </div>
            </div>
            <div className="maincontainer">
                <div className="leftmost">
                    <h1>Templates</h1>
                    <div className={`templates ${template === 'template1' ? "active" : ""}`} onClick={() => settemplate("template1")} >
                        <img src={template1} alt="" />
                    </div>
                    <div className={`templates ${template === 'template2' ? "active" : ""}`} onClick={() => settemplate("template2")} >
                        <img src={template2} alt="" />
                    </div>
                    <div className={`templates ${template === 'template3' ? "active" : ""}`} onClick={() => settemplate("template3")} >
                        <img src={template3} alt="" />
                    </div>
                    <div className={`templates ${template === 'template4' ? "active" : ""}`} onClick={() => settemplate("template4")} >
                        <img src={template4} alt="" />
                    </div>
                </div>
                <div className="middle">
                    <ComponentToPrint ref={componentRef} name={name} heading={heading} desc={desc} author={author} logo={logo} template={template} />
                </div>
                <div className="right">
                    <div className="form">
                        <div className="input-box">
                            <span className="details">Heading</span>
                            <input type="text" placeholder="Enter heading" onChange={e => { setheading(e.target.value) }} />
                        </div>
                        <div className="input-box">
                            <span className="details">Particpant Name</span>
                            <input type="text" placeholder="Enter participant Name" onChange={e => { setname(e.target.value) }} />
                        </div>
                        <div className="input-box">
                            <span className="details">Description</span>
                            <textarea type="text" placeholder="Enter Description" onChange={e => setdesc(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <span className="details">Author Name</span>
                            <input type="text" placeholder="Enter Author Name" onChange={e => setauthor(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <span className="details">Logo</span>
                            <input type="url" placeholder='Enter logo url' onChange={e => setlogo(e.target.value)} />
                            <input type="file" id='file-input' onChange={e => setlogo(e.target.value)}/>
                        </div>

                        {/* <button className="generate" onClick={handlePrint}>Generate  Certificate</button> */}
                        <ReactToPrint
                            trigger={() => <button className="generate" >Print this out!</button>}
                            content={() => componentRef.current}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage