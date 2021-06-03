import React, { useRef, useState } from 'react'
import "./homepage.css"
import { useReactToPrint } from 'react-to-print';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import template1 from "../cert_templates/Template1.png";
import firebase from "../firebase"
import ReactToPrint from 'react-to-print';

export class ComponentToPrint extends React.PureComponent {
    render() {
        return (
            <div style={{ position: 'relative' }}>
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
                {this.props.logo === '' ? '' : <img src={this.props.logo} style={{ position: 'absolute', width: '6rem', borderRadius: '50%', top: '20%', left: '35%' }} alt="" />}

            </div>
        );
    }
}
function Homepage({ setuser, user }) {
    const [name, setname] = useState('');
    const [heading, setheading] = useState('');
    const [desc, setdesc] = useState('');
    const [author, setauthor] = useState('');
    const [logo, setlogo] = useState('');
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const pageStyle = `
                            @page {
                              size: 80mm 50mm;
                            }
                          
                            @media all {
                              .pagebreak {
                                display: none;
                              }
                            }
                          
                            @media print {
                              .pagebreak {
                                page-break-before: always;
                              }
                            }
                          `;
    const signout = () => {
        firebase.auth().signOut();
    }
    return (
        <div className="main">
            <div className="header">
                <div className="left">
                    <h2>Hash/Hub</h2>
                </div>
                <div className="Middle">
                    <h1>Certificate Generator</h1>
                </div>
                <div className="right">
                    <a href="https://github.com/vedant-jain03/certificate-generator">Contribute <ArrowUpwardIcon />  </a>
                    <a href="https://github.com/vedant-jain03/certificate-generator">Give us <StarOutlineIcon /> </a>
                    <button onClick={signout}>Logout</button>
                </div>
            </div>
            <div className="maincontainer">
                <div className="leftmost">
                    <h1>Note</h1>
                    <ul>
                        <h2>Setup Printing Page</h2>
                        <li>Destination: Save as PDF</li>
                        <li>Pages: All</li>
                        <li>Layout: Landscape</li>
                        <h3>More Settings</h3>
                        <li>Paper Size: A4</li>
                        <li>Paper per Sheet:1</li>
                        <li>Margins: none</li>
                        <li>Scale: Custom 200</li>
                    </ul>
                </div>
                <div className="middle">
                    <ComponentToPrint ref={componentRef} name={name} heading={heading} desc={desc} author={author} logo={logo} />
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
                            <span className="details">Logo URL</span>
                            <input type="text" placeholder="Enter logo URL" onChange={e => setlogo(e.target.value)} />
                        </div>

                        {/* <button className="generate" onClick={handlePrint}>Generate  Certificate</button> */}
                        <ReactToPrint
                            trigger={() => <button className="generate" >Print this out!</button>}
                            content={() => componentRef.current}
                            pageStyle={pageStyle}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage