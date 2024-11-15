import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useRef, useState} from "react";
import { connect } from "react-redux";

import SignatureCanvas from 'react-signature-canvas';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import Layout from '../components/Layout'
import { resetState, setSigned } from '../redux/actions/main';
import Router from 'next/router';
import { InputGroup } from 'reactstrap';

function Agreement(props) {
    const [signature, setSignature] = useState(null);
    const sigCanvas = useRef({});

    const {setSigned,resetState} = props;

    const {paid, amount_paid, payment_reference, firstname,lastname,email,address} = props.userInfo;

    useEffect(() => {
        // check if user is logged in
        if(!payment_reference||!paid||!amount_paid){
            Router.push("/confirm")
        }
        // Always do navigations after the first render
        }, [])

    const clear = () => sigCanvas.current.clear();

    const uploadSignature = () =>{
        setSignature(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
        clear();
    } 

    const downloadDocument = () =>{
        // const pdf = new jsPDF({  
        //     unit: 'px',  
        //     format: 'a4'  
        // });
        const opt = {
            margin: [15,15],
            filename: 'agreement.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, letterRendering: true },
            jsPDF:        { unit: 'pt', format: 'letter', orientation: 'portrait' },
           pagebreak: { mode: ['css', 'legacy'] }
         };

        const input = document.getElementById('registration-card');
        html2pdf().from(input).set(opt).save();
        // var specialElementHandlers = {
        //     '#elementH': function (element, renderer) {
        //         return true;
        //     }
        // };
        // pdf.html(input,{
        //     callback: function (doc) {
        //       doc.save("agreement.pdf");
        //     },
        //  });
        // pdf.save("agreement.pdf");
        // html2canvas(input,{  
        //     imageTimeout: 2000,  
        //     removeContainer: true  
        // })
        // .then((canvas) => {
        //     const imgData = canvas.toDataURL('image/png');
        //     const pdf = new jsPDF({  
        //         unit: 'px',  
        //         format: 'a4'  
        //     });
        //     pdf.addImage(imgData, 'PNG', 0, 0);
        //     // pdf.output('dataurlnewwindow');
        //     pdf.save("agreement.pdf");
        // });
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setSigned(true);
        resetState()
        Router.push("/complete-setup")
    }

    const current_date = new Date();
    const today = current_date.getDate()+'-'+(current_date.getMonth()+1)+'-'+current_date.getFullYear();
    
  return (
    <Layout>
        <header className="landing-header mx-auto bg-transparent py-2">
            <ul className="nav justify-content-center">

                <li className="nav-item">
                    <Link href="/">
                        <a className="landing-logo">
                            <Image src="/img/logo.png" alt="Picture of the author" width={"102px"} height={"50px"} />
                        </a>
                    </Link>
                </li>

                
            </ul>
        </header>

        

        <div className="progress-container">
            <div className="container">
                <div className="d-flex bd-highlight text-center">
                    <div className="p-2  bd-highlight progress-start-text">Start</div>
                    <div className="p-2 flex-grow-1 bd-highlight">
                        <div className="register-progress">
                            <div className="progress">
                                <div className="zero primary-color"></div>
                                <div className="one primary-color"></div>
                                <div className="two primary-color"></div>
                                <div className="three primary-color"></div>
                                <div className="four primary-color"></div>
                                <div className="five primary-color"></div>
                                <div className="progress-bar progress-bar-warning" style={{width: "100%"}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 bd-highlight progress-start-text">100%</div>
                </div>
            </div>

        </div>
        
        

        <div className="registration-banner">
            <div className="registration-banner-content">
                <p className="banner-header mx-auto">Tenancy Agreement</p>
                <p className="banner-text mx-auto">Kindly review the document and e-sign it below</p>
            </div>
        </div>

        <div className="registration-card mx-auto mb-5 px-2" >
            <div className="registration-card-inner mx-auto" id="registration-card">
                <div className="confirm-section"  id="agreement">
                    <div className="d-flex justify-content-between">
                        <p className="confirm-header-right text-dark">Agreement</p>
                        {/* <a className="confirm-header-left" onClick={downloadDocument}><span className="pe-1"><img src="/img/download-icon-primary.png" width="10" alt="edit icon" /></span>Download Agreement</a> */}
                    </div>
                    <hr className="mt-0" />

                    <div className="agreement-text" id="agreement-text">
                        <table className="table table-bordered border-dark">
                            <thead>
                                <tr className="text-center">
                                    <th className="py-0" scope="col" colspan="2">FORM OF AGREEMENT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="py-0" scope="row">LICENSEE NAME</th>
                                    <td className="py-0"><span className="text-capitalize">{lastname}</span> <span className="text-capitalize">{firstname}</span></td>
                                </tr>
                                <tr>
                                    <th className="py-0" scope="row">EMAIL ADDRESS</th>
                                    <td className="py-0" >{email}</td>
                                </tr>
                                <tr>
                                    <th className="py-0" scope="row">ADDRESS</th>
                                    <td className="py-0">{address}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="aggreement-header-1">THIS LICENCE AGREEMENT BETWEEN:</p>
                        <p className="aggreement-text"><span className="aggreement-header-1">THE POD LIVING LIMITED</span>, a company registered under the Laws of the Federal
                            Republic of Nigeria and having its office at 3B Taofik Lawal Street, Ikoyi, Lagos
                            (hereinafter referred to as “the Licensor” which expression shall where the context so
                            admit includes its successors-in-title, Executors, Administrators, Assigns, Legal and
                            Personal Representatives) of the first part
                        </p>
                        <p className="aggreement-text">AND</p>
                        <p className="aggreement-text"><span className="aggreement-header-1">THE LICENSEE</span> as designated in the Form of Agreement above (including her
                            successors-in-title, personal representative and assigns) of the other part.
                        </p>

                        <p className="aggreement-header-1">PREAMBLE:</p>
                        <ol className="aggreement-text">
                            <li>The Licensor, acting on behalf of Collection Developments Student
                                Accommodation 1 Limited - the owner and developer of the student halls of
                                residence [insert building name] - enters into this Licence Agreement to grant
                                a licence for the use of the Accommodation as described hereunder.
                            </li>
                            <li>This Licence Agreement does not, and is not intended to give or to impose on
                                the Licensee any of the rights and obligations of a tenant nor does it give you
                                the right to exclusive possession of any accommodation which you may be
                                allowed to use, or create the relationship of landlord and tenant between the
                                parties.
                            </li>
                            <li>The Licensee is not to be entitled to a tenancy or to an assured shorthold or
                                assured tenancy, or to any other statutory security of tenure now or when this
                                Licence ends.
                            </li>
                        </ol>
                        <p className="aggreement-header-1">DEFINITIONS AND INTERPRETATIONS:</p>
                        <p className="aggreement-text"><span className="aggreement-header-1">“Accommodation”</span> means the Bedspace in a single or multi occupancy room with bed,
                            wardrobe, desk and an ensuite bathroom or any room allocated by the Licensor during
                            the Licence Period with the fittings fixtures and contents listed in the appropriate
                            inventory;
                        </p>
                        <p className="aggreement-text"><span className="aggreement-header-1">“Booked Date of Arrival”</span> means the day in which the Licensee agrees to take
                            occupation;
                        </p>
                        <p className="aggreement-text"><span className="aggreement-header-1">“Building”</span> means the [Description of the building] where the Accommodation, Common
                            Areas and the Building Common Areas are situated;
                        </p>
                        <div className="html2pdf__page-break"></div>
                        <p className="aggreement-text"><span className="aggreement-header-1">“Contents”</span> means the furnishings fixtures and fittings in the Accommodation;</p>
                        <p className="aggreement-text"><span className="aggreement-header-1">“Common Parts”</span> means those parts of the Residence which are necessary for the
                            purpose of gaining access to and from the Accommodation, and to which others have
                            right of access;
                        </p>
                        <p className="aggreement-text"><span className="aggreement-header-1">“Conditions of Residence Handbook”</span> means the handbook that the Licensor may
                            make and notify to the Licensee for the purpose of ensuring the safety, security,
                            cleanliness and good management of the Building, the Premises or the efficient or
                            economic performance by the Licensor of its obligations under this Licence Agreement;
                            “Deposit” means a security deposit in the sum of ₦60,000 payable by the Licensee to
                            the Licensor in accordance with this Agreement.
                        </p>
                        <p className="aggreement-text"><span className="aggreement-header-1">
                                “Guarantor”</span> means the parent, guardian, or other guarantor who provides a guarantee
                                in the form specified by the Licensor and agrees to act as a guarantor to the Licensee.
                                “Agreement” or “Licence Agreement” means this residential licence agreement and
                                reference to a numbered room;
                        </p>
                        <p className="aggreement-text"><span className="aggreement-header-1">“Licence Charge”</span> means the full rental charge due in respect of the Accommodation
                            occupied and the Rights Granted to the Licensee in accordance with this Agreement.
                            “Fees” or “Residence Fees” means all of the Licence Charges due to the Licensor over
                            the duration of the Licence Agreement;
                        </p>
                        <p className="aggreement-text"><span className="aggreement-header-1">“Residence”</span> means the entirety of the premises under the control of the Licensor of
                            which the Building, Common Areas, Accommodation and the Building Common Areas all
                            form part;
                        </p>
                        <p className="aggreement-text"><span className="aggreement-header-1">“Shared Facilities”</span> means any shared facility such as kitchen, bathroom, common or
                            other room designated as such by the Licensor.
                        </p>

                        <p className="aggreement-header-1">TERMS AND CONDITIONS OF THIS AGREEMENT ARE AS FOLLOWS:</p>

                        <ol className="aggreement-text">
                            <li><p className="aggreement-header-1">LICENCE</p> 
                                <ol className="mb-3">
                                    <li>In consideration of the Licence Charge paid and received under this Licence
                                    Agreement, and of the obligations of the Licensee contained herein, the
                                    Licensor permits the Licensee throughout the duration of the Licence
                                    Agreement to occupy the Accommodation and to share in common with the
                                    other occupiers of the Residence, the Shared Facilities.</li>
                                    <li>This Licence Agreement will be effective during the Licence Period.</li>
                                    <li>In agreeing to this Licence Agreement, the Licensee undertakes to accept
                                        liability for its obligations hereunder for the full duration of the Licence
                                        Agreement and its extension(s) if applicable.</li>
                                    <li>The Licensee will be liable for the Licence Charge due in respect of the
                                        Accommodation they are allocated during this Licence Period.</li>
                                    <div className="html2pdf__page-break"></div>

                                    <li>The Licensor, acting reasonably, may require the Licensee to move to
                                        alternative accommodation, but the Licensor will use their reasonable
                                        endeavours, where practicable, to move the Licensee to accommodation of an
                                        equivalent or higher type than that which the Licensee occupied immediately
                                        prior to the move. Any increase in the Licence Charge will not be charged to the
                                        Licensee.</li>
                                    <li>No room key will be issued to any Licensee where the Licence Charge due has
                                        not been paid.</li>
                                    <li>If the Licensee fails to pay on reasonable request any outstanding Licence
                                        Charge, Fees, or costs owed under this Licence Agreement, they will be given
                                        Notice to Quit and may have their details passed to an appointed debt recovery
                                        agent for pursuance of the debt.</li>
                                </ol>
                            </li>
                            <li><p className="aggreement-header-1">DEPOSIT</p> 
                                <ol className="mb-3">
                                    <li>The Licensee shall pay the Deposit to secure the compliance of the Licensee’s
                                        obligations under this Licence Agreement (without prejudice the Licensor’s
                                        other rights and remedies). If at any time during the period the Licensor is
                                        obliged to draw upon it to satisfy any breaches of such obligations, then the
                                        Licensee will immediately make such additional payment as is necessary to
                                        restore the full amount of the Deposit held by the Licensor.</li>
                                    <li>The Licensor reserves the right to deduct from the Deposit any sums due to the
                                        Licensor and any reasonable costs incurred by The Licensor as a result of any
                                        breach under this Licence Agreement by the Licensee or any of their visitors
                                        and any bank charges incurred as a result of the deduction.</li>
                                    <li>Upon request, the deposit will be refunded within twenty-eight days of the
                                        termination of the Licence Agreement (however that happens), by refunding the
                                        amount due back by Bank transfer, less any transaction charges deducted by
                                        the sending or receiving banks. The Licensee must provide details of the return
                                        bank account to ensure prompt refund of any deposit due.</li>
                                    <li>Such deductions may include, but are not limited to, costs in respect of cleaning
                                        and/or repair to any damage caused to the Residence and its fixtures and
                                        fittings or equipment contained within and without, outstanding Licence Charges
                                        and any reasonable associated administrative charges, fire alarm fines, and any
                                        other reasonable costs or charges outstanding at termination of this Licence
                                        Agreement.</li>
                                    <li>The Licensor may make a levy on the deposits of all or some licensees, to pay
                                        for the cost of cleaning and/or repairs to any damage caused within the
                                        Residence, other than by trespass, where the culprits are not traced.</li>
                                </ol>
                            </li>
                            <li><p className="aggreement-header-1">CONDITIONS OF RESIDENCE</p>
                                <p>The Licensee agrees to accept and observe the conditions contained in the
                                    Conditions of Residence Handbook.</p>
                            </li>
                            <li><p className="aggreement-header-1">SERVICES</p> 
                                <ol className="mb-3">
                                    <li>In consideration of the Licence Charge paid and received and the observance
                                        and performance of the covenants contained herein, the Licensor shall be
                                        responsible for providing:</li>
                                    <ul>
                                        <li>Lighting and cooling;</li>
                                        <li>Hot and cold running water;</li>
                                        <li>Electricity supply;</li>
                                        <li>Disposal of rubbish deposited in proper receptacles;</li>
                                        <li>Access to wireless internet via the main internet service provider.</li>

                                    </ul>
                                </ol>
                                
                            </li>
                            <li><p className="aggreement-header-1">TERMINATION OF THE AGREEMENT OR BOOKING</p> 
                                <ol className="mb-3">
                                    <li>The Licensee may terminate this Licence Agreement by giving notice to the
                                        Licensor not less than 4 (four) weeks before the commencement of the Licence
                                        Period. In this case, the booking fee is non-refundable and it cannot be
                                        transferred to another applicant or another tenancy period. If the Licensee
                                        terminates this Agreement less than 4 (four) weeks before the commencement
                                        of the Licence Period, the Licensee will remain liable for the contractual
                                        obligations laid out in the Licence Agreement.</li>
                                    <li>If the Licensee wishes to leave the Accommodation at any time after the
                                        commencement but before the expiry of the Licence Period, they must give
                                        notice of this effect to the Licensor. The Licensee will be solely responsible for
                                        filling the vacancy in the Residence created by their departure by finding a
                                        suitable replacement licensee. If the Licensee succeeds in finding a suitable
                                        replacement, they must notify the Licensor immediately.</li>
                                    <li>The Licensor is under no obligation to accept the replacement licensee. Should
                                        the Licensor agree on the suitability of the replacement licensee and agree to
                                        terminate the Licence Agreement, the Licensor will confirm this in writing to the
                                        Licensee. The date of termination of this Licence Agreement will then take
                                        effect on the date that the licence agreement with the replacement licensee
                                        commences (and not with effect from any other date).</li>
                                    <li>The Deposit and any applicable refund due (less appropriate Fees) to the
                                        Licensee will be returned within 28 (twenty-eight) days of receipt of the
                                        replacement licensee’s deposit and Licence Charge for the Licence Period.</li>
                                    <li>The Licensor may terminate this agreement with immediate effect by giving
                                        written notice to the Licensee if:
                                        <ul>
                                            <li>the Licensee fails to pay any amount due under this Agreement on the
                                                due date for payment and remains in default not less than 7 (seven)
                                                days after being notified to make such payment; or</li>
                                            <li>The Licensee commits a material breach of any term of this Agreement
                                                or fails to observe the rules stipulated in the Conditions of Residence
                                                Handbook.</li>
                                        </ul>
                                    </li>
                                </ol>
                            </li>
                            <li><p className="aggreement-header-1">EFFECT OF TERMINATION OR EXPIRY</p> 
                                <ol className="mb-3">
                                    <li>Upon termination or expiry of this Agreement or the Licence Period, the
                                        Licensee shall:
                                        <ul>
                                            <li>give the Licensor vacant possession of the Accommodation;</li>
                                            <li>leave those parts of the Residence for which he or she is responsible
                                                in a state of repair and condition consistent with his or her obligations
                                                under this Licence Agreement, fair wear and tear excepted;</li>
                                            <li>remove all rubbish and leave the Accommodation in a clean and tidy
                                                condition, fair wear and tear excepted;</li>
                                            <li>remove all personal possessions from the Residence. The Licensor
                                                accepts no responsibility for anything left at the Residence at the end
                                                of this Licence Agreement;</li>
                                        </ul>
                                    </li>
                                    <li>The Licensor reserves the right to dispose of any items left at the Residence by
                                        the Licensee at the end of the Licence Agreement and to deduct any sums
                                        owing to the Licensor by the Licensee from the sale proceeds.</li>
                                    <li>Room keys must be handed into the office no later than 10.00am on the
                                        termination date. Licensees who retain their keys may be liable, at the
                                        discretion of the Licensor or the operations manager, for the full cost of
                                        replacing locks and keys for all areas of the Residence to which their keys allow
                                        access.</li>
                                </ol>
                            </li>
                            <li><p className="aggreement-header-1">GUARANTEE</p> 
                                <ol>
                                    <li>The Licensee shall provide a Guarantor who shall execute a guarantee in the
                                        form provided by the Licensor and hereunder guarantees that the Licensee
                                        shall pay the Licence Charge and any other amount due under this Licence
                                        Agreement and observe and perform the Licensee’s covenants under this
                                        Licence Agreement.</li>
                                    <li>If the Licensee fails to pay the Licence Charge or other amount due or to
                                        observe or perform any of the Licensee’s covenants, the Guarantor shall pay or
                                        observe and perform them.</li>
                                    <li>The Guarantor covenants as principle obligor and as a separate and
                                        independent obligation and liability from its obligations and liabilities under this
                                        clause to indemnify and keep indemnified against any failure by the Licensee to
                                        pay the Licence Charge or other amount due or any failure by the Licensee to
                                        observe or perform any of the Licensee’s covenants under this Licence
                                        Agreement.</li>
                                    <li>If the Licensee breaches the Licence Agreement at any time during the Licence
                                        Period, the Manager reserves the right to advise the Guarantor of any such
                                        breach without prior notice.</li>
                                    <li>The liability of the Guarantor shall not be reduced, discharged or otherwise
                                        adversely affected by:
                                        <ul>
                                            <li>any time or indulgence granted by the Licensor to the Licensee;</li>
                                            <li>any delay or forbearance by the Licensor in enforcing the payment of
                                                the Licence Charge or other amount due or the observance or
                                                performance of any of the Licensee’s covenants under this Licence
                                                Agreement or in making any demand in respect of them;</li>
                                            <li>any delay or forbearance by the Licensor in enforcing the payment of
                                                the Licence Charge or other amount due or the observance or
                                                performance of any of the Licensee’s covenants under this Licence
                                                Agreement or in making any demand in respect of them;</li>
                                            <li>the Licensor taking any action or refraining from taking any action in
                                                connection with the Deposit: or</li>
                                            <li>the Licensee dying or becoming incapable of managing his or her
                                                affairs</li>
                                        </ul>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                        <div className="aggreement-footer">
                            <p className="aggreement-text"><span className="aggreement-header-1">ACCEPTED AND AGREED</span><br />
                                By the within-named <span className="aggreement-header-1">LICENSEE,</span></p>
                            
                            <div className="signature">
                                {signature?<img src={signature} alt="signature" />:""}
                            </div>
                            <p className="mb-0">…………………………………………..</p>
                            <p className="aggreement-header-1"><span className="text-capitalize">{lastname}</span> <span className="text-capitalize">{firstname}</span></p>
                            <p className="aggreement-header-1">Date: {today}</p>
                        </div>
                    </div>
                    
                    
                    

                </div>
                
                
            </div>
            <p className="text-center">Sign below:</p>
            <div className="signature-canvas mx-auto">
                <SignatureCanvas ref={sigCanvas} penColor='black' canvasProps={{width: 320, height: 150, className: 'sigCanvas'}} />
                <hr className="mt-0"/>
            </div>

            <p className="signature-upload-text mt-4" onClick={uploadSignature}><span className="pe-1"><img src="/img/upload-icon.png" width="10" alt="edit icon" /></span>Click here after signing to add your signature to document</p>

            <div className="text-center">
                {signature!=null ?
                    <button type="button" className="btn btn-primary btn-lg btn-register mt-4" onClick={handleSubmit}>Continue</button>
                    :
                <button className="btn btn-light btn-lg btn-deactivate mt-4 w-50" disabled>Continue</button>}
            </div>
        </div>

    </Layout>
  )
}

const mapStateToProps = state => ({
    userInfo: state.main
  })

const mapDispatchToProps = {
    setSigned: setSigned,
    resetState: resetState,
}


export default connect(mapStateToProps, mapDispatchToProps)(Agreement)
