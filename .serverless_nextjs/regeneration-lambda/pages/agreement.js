/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 53919:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ agreement; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(37424);
// EXTERNAL MODULE: ./node_modules/react-signature-canvas/build/index.js
var build = __webpack_require__(58877);
var build_default = /*#__PURE__*/__webpack_require__.n(build);
// EXTERNAL MODULE: ./node_modules/jspdf/dist/jspdf.node.min.js
var jspdf_node_min = __webpack_require__(98036);
// EXTERNAL MODULE: ./node_modules/html2canvas/dist/html2canvas.js
var html2canvas = __webpack_require__(61120);
// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__(87428);
// EXTERNAL MODULE: ./redux/types.js
var types = __webpack_require__(7879);
;// CONCATENATED MODULE: ./redux/actions/main.js

const setFirstname = firstname => ({
  type: t.SET_FIRST_NAME,
  payload: firstname
});
const setLastname = lastname => ({
  type: t.SET_LAST_NAME,
  payload: lastname
});
const setEmail = email => ({
  type: t.SET_EMAIL,
  payload: email
});
const setPassword = password => ({
  type: t.SET_PASSWORD,
  payload: password
});
const setPhone = phone => ({
  type: t.SET_PHONE,
  payload: phone
});
const setJob = job => ({
  type: t.SET_JOB,
  payload: job
});
const setRoomType = room_type => ({
  type: t.SET_ROOM_TYPE,
  payload: room_type
});
const setRoomTypeYear = room_type_year => ({
  type: t.SET_ROOM_TYPE_YEAR,
  payload: room_type_year
});
const setMatric = matric => ({
  type: t.SET_MATRIC,
  payload: matric
});
const setPicture = file => ({
  type: t.SET_PICTURE,
  payload: file
});
const setHealthCondition = status => ({
  type: t.SET_HEALTH_CONDITION,
  payload: status
});
const setReport = report => ({
  type: t.SET_REPORT,
  payload: report
});
const setSelectRoommate = status => ({
  type: t.SET_SELECT_ROOMMATE,
  payload: status
});
const setRoommateName = name => ({
  type: t.SET_ROOMMATE_NAME,
  payload: name
});
const setGender = gender => ({
  type: t.SET_GENDER,
  payload: gender
});
const setDOB = dob => ({
  type: t.SET_DOB,
  payload: dob
});
const setAddress = address => ({
  type: t.SET_ADDRESS,
  payload: address
});
const setGuarantorName = name => ({
  type: t.SET_GUARANTOR_NAME,
  payload: name
});
const setGuarantorPhone = phone => ({
  type: t.SET_GUARANTOR_PHONE,
  payload: phone
});
const setGuarantorAddress = address => ({
  type: t.SET_GUARANTOR_ADDRESS,
  payload: address
});
const setPaid = status => ({
  type: t.SET_PAID,
  payload: status
});
const setAmountPaid = amount => ({
  type: t.SET_AMOUNT_PAID,
  payload: amount
});
const setPaymentReference = ref => ({
  type: t.SET_PAYMENT_REFERENCE,
  payload: ref
});
const setSigned = signature => ({
  type: types/* SET_SIGNED */.xX,
  payload: signature
});
const setUser = user => ({
  type: t.SET_USER,
  payload: user
});
const setRoom = room => ({
  type: t.SET_ROOM,
  payload: room
});
const resetState = data => ({
  type: types/* RESET */.td,
  payload: data
});
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
;// CONCATENATED MODULE: ./pages/agreement.js















function Agreement(props) {
  const {
    0: signature,
    1: setSignature
  } = (0,react.useState)(null);
  const sigCanvas = (0,react.useRef)({});
  const {
    setSigned,
    resetState
  } = props;
  const {
    paid,
    amount_paid,
    payment_reference,
    firstname,
    lastname,
    email,
    address
  } = props.userInfo;
  (0,react.useEffect)(() => {
    // check if user is logged in
    if (!payment_reference || !paid || !amount_paid) {
      router.default.push("/confirm");
    } // Always do navigations after the first render

  }, []);

  const clear = () => sigCanvas.current.clear();

  const uploadSignature = () => {
    setSignature(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
    clear();
  };

  const downloadDocument = () => {
    // const pdf = new jsPDF({  
    //     unit: 'px',  
    //     format: 'a4'  
    // });
    const opt = {
      margin: [15, 15],
      filename: 'agreement.pdf',
      image: {
        type: 'jpeg',
        quality: 0.98
      },
      html2canvas: {
        scale: 2,
        letterRendering: true
      },
      jsPDF: {
        unit: 'pt',
        format: 'letter',
        orientation: 'portrait'
      },
      pagebreak: {
        mode: ['css', 'legacy']
      }
    };
    const input = document.getElementById('registration-card');
    html2pdf().from(input).set(opt).save(); // var specialElementHandlers = {
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
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSigned(true);
    resetState();
    router.default.push("/complete-setup");
  };

  const current_date = new Date();
  const today = current_date.getDate() + '-' + (current_date.getMonth() + 1) + '-' + current_date.getFullYear();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime.jsx("header", {
      className: "landing-header mx-auto bg-transparent py-2",
      children: /*#__PURE__*/jsx_runtime.jsx("ul", {
        className: "nav justify-content-center",
        children: /*#__PURE__*/jsx_runtime.jsx("li", {
          className: "nav-item",
          children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime.jsx("a", {
              className: "landing-logo",
              children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
                src: "/img/logo.png",
                alt: "Picture of the author",
                width: "102px",
                height: "50px"
              })
            })
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "progress-container",
      children: /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "d-flex bd-highlight text-center",
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: "p-2  bd-highlight progress-start-text",
            children: "Start"
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "p-2 flex-grow-1 bd-highlight",
            children: /*#__PURE__*/jsx_runtime.jsx("div", {
              className: "register-progress",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "progress",
                children: [/*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "zero primary-color"
                }), /*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "one primary-color"
                }), /*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "two primary-color"
                }), /*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "three primary-color"
                }), /*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "four primary-color"
                }), /*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "five primary-color"
                }), /*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "progress-bar progress-bar-warning",
                  style: {
                    width: "100%"
                  }
                })]
              })
            })
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "p-2 bd-highlight progress-start-text",
            children: "100%"
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "registration-banner",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "registration-banner-content",
        children: [/*#__PURE__*/jsx_runtime.jsx("p", {
          className: "banner-header mx-auto",
          children: "Tenancy Agreement"
        }), /*#__PURE__*/jsx_runtime.jsx("p", {
          className: "banner-text mx-auto",
          children: "Kindly review the document and e-sign it below"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "registration-card mx-auto mb-5 px-2",
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: "registration-card-inner mx-auto",
        id: "registration-card",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "confirm-section",
          id: "agreement",
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: "d-flex justify-content-between",
            children: /*#__PURE__*/jsx_runtime.jsx("p", {
              className: "confirm-header-right text-dark",
              children: "Agreement"
            })
          }), /*#__PURE__*/jsx_runtime.jsx("hr", {
            className: "mt-0"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "agreement-text",
            id: "agreement-text",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
              className: "table table-bordered border-dark",
              children: [/*#__PURE__*/jsx_runtime.jsx("thead", {
                children: /*#__PURE__*/jsx_runtime.jsx("tr", {
                  className: "text-center",
                  children: /*#__PURE__*/jsx_runtime.jsx("th", {
                    className: "py-0",
                    scope: "col",
                    colspan: "2",
                    children: "FORM OF AGREEMENT"
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tbody", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime.jsx("th", {
                    className: "py-0",
                    scope: "row",
                    children: "LICENSEE NAME"
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
                    className: "py-0",
                    children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                      className: "text-capitalize",
                      children: lastname
                    }), " ", /*#__PURE__*/jsx_runtime.jsx("span", {
                      className: "text-capitalize",
                      children: firstname
                    })]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime.jsx("th", {
                    className: "py-0",
                    scope: "row",
                    children: "EMAIL ADDRESS"
                  }), /*#__PURE__*/jsx_runtime.jsx("td", {
                    className: "py-0",
                    children: email
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                  children: [/*#__PURE__*/jsx_runtime.jsx("th", {
                    className: "py-0",
                    scope: "row",
                    children: "ADDRESS"
                  }), /*#__PURE__*/jsx_runtime.jsx("td", {
                    className: "py-0",
                    children: address
                  })]
                })]
              })]
            }), /*#__PURE__*/jsx_runtime.jsx("p", {
              className: "aggreement-header-1",
              children: "THIS LICENCE AGREEMENT BETWEEN:"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              className: "aggreement-text",
              children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                className: "aggreement-header-1",
                children: "THE POD LIVING LIMITED"
              }), ", a company registered under the Laws of the Federal Republic of Nigeria and having its office at 3B Taofik Lawal Street, Ikoyi, Lagos (hereinafter referred to as \u201Cthe Licensor\u201D which expression shall where the context so admit includes its successors-in-title, Executors, Administrators, Assigns, Legal and Personal Representatives) of the first part"]
            }), /*#__PURE__*/jsx_runtime.jsx("p", {
              className: "aggreement-text",
              children: "AND"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              className: "aggreement-text",
              children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                className: "aggreement-header-1",
                children: "THE LICENSEE"
              }), " as designated in the Form of Agreement above (including her successors-in-title, personal representative and assigns) of the other part."]
            }), /*#__PURE__*/jsx_runtime.jsx("p", {
              className: "aggreement-header-1",
              children: "PREAMBLE:"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ol", {
              className: "aggreement-text",
              children: [/*#__PURE__*/jsx_runtime.jsx("li", {
                children: "The Licensor, acting on behalf of Collection Developments Student Accommodation 1 Limited - the owner and developer of the student halls of residence [insert building name] - enters into this Licence Agreement to grant a licence for the use of the Accommodation as described hereunder."
              }), /*#__PURE__*/jsx_runtime.jsx("li", {
                children: "This Licence Agreement does not, and is not intended to give or to impose on the Licensee any of the rights and obligations of a tenant nor does it give you the right to exclusive possession of any accommodation which you may be allowed to use, or create the relationship of landlord and tenant between the parties."
              }), /*#__PURE__*/jsx_runtime.jsx("li", {
                children: "The Licensee is not to be entitled to a tenancy or to an assured shorthold or assured tenancy, or to any other statutory security of tenure now or when this Licence ends."
              })]
            }), /*#__PURE__*/jsx_runtime.jsx("p", {
              className: "aggreement-header-1",
              children: "DEFINITIONS AND INTERPRETATIONS:"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              className: "aggreement-text",
              children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                className: "aggreement-header-1",
                children: "\u201CAccommodation\u201D"
              }), " means the Bedspace in a single or multi occupancy room with bed, wardrobe, desk and an ensuite bathroom or any room allocated by the Licensor during the Licence Period with the fittings fixtures and contents listed in the appropriate inventory;"]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              className: "aggreement-text",
              children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                className: "aggreement-header-1",
                children: "\u201CBooked Date of Arrival\u201D"
              }), " means the day in which the Licensee agrees to take occupation;"]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              className: "aggreement-text",
              children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                className: "aggreement-header-1",
                children: "\u201CBuilding\u201D"
              }), " means the [Description of the building] where the Accommodation, Common Areas and the Building Common Areas are situated;"]
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              className: "html2pdf__page-break"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              className: "aggreement-text",
              children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                className: "aggreement-header-1",
                children: "\u201CContents\u201D"
              }), " means the furnishings fixtures and fittings in the Accommodation;"]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              className: "aggreement-text",
              children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                className: "aggreement-header-1",
                children: "\u201CCommon Parts\u201D"
              }), " means those parts of the Residence which are necessary for the purpose of gaining access to and from the Accommodation, and to which others have right of access;"]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              className: "aggreement-text",
              children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                className: "aggreement-header-1",
                children: "\u201CConditions of Residence Handbook\u201D"
              }), " means the handbook that the Licensor may make and notify to the Licensee for the purpose of ensuring the safety, security, cleanliness and good management of the Building, the Premises or the efficient or economic performance by the Licensor of its obligations under this Licence Agreement; \u201CDeposit\u201D means a security deposit in the sum of \u20A660,000 payable by the Licensee to the Licensor in accordance with this Agreement."]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              className: "aggreement-text",
              children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                className: "aggreement-header-1",
                children: "\u201CGuarantor\u201D"
              }), " means the parent, guardian, or other guarantor who provides a guarantee in the form specified by the Licensor and agrees to act as a guarantor to the Licensee. \u201CAgreement\u201D or \u201CLicence Agreement\u201D means this residential licence agreement and reference to a numbered room;"]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              className: "aggreement-text",
              children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                className: "aggreement-header-1",
                children: "\u201CLicence Charge\u201D"
              }), " means the full rental charge due in respect of the Accommodation occupied and the Rights Granted to the Licensee in accordance with this Agreement. \u201CFees\u201D or \u201CResidence Fees\u201D means all of the Licence Charges due to the Licensor over the duration of the Licence Agreement;"]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              className: "aggreement-text",
              children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                className: "aggreement-header-1",
                children: "\u201CResidence\u201D"
              }), " means the entirety of the premises under the control of the Licensor of which the Building, Common Areas, Accommodation and the Building Common Areas all form part;"]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              className: "aggreement-text",
              children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                className: "aggreement-header-1",
                children: "\u201CShared Facilities\u201D"
              }), " means any shared facility such as kitchen, bathroom, common or other room designated as such by the Licensor."]
            }), /*#__PURE__*/jsx_runtime.jsx("p", {
              className: "aggreement-header-1",
              children: "TERMS AND CONDITIONS OF THIS AGREEMENT ARE AS FOLLOWS:"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ol", {
              className: "aggreement-text",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
                children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "aggreement-header-1",
                  children: "LICENCE"
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ol", {
                  className: "mb-3",
                  children: [/*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "In consideration of the Licence Charge paid and received under this Licence Agreement, and of the obligations of the Licensee contained herein, the Licensor permits the Licensee throughout the duration of the Licence Agreement to occupy the Accommodation and to share in common with the other occupiers of the Residence, the Shared Facilities."
                  }), /*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "This Licence Agreement will be effective during the Licence Period."
                  }), /*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "In agreeing to this Licence Agreement, the Licensee undertakes to accept liability for its obligations hereunder for the full duration of the Licence Agreement and its extension(s) if applicable."
                  }), /*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "The Licensee will be liable for the Licence Charge due in respect of the Accommodation they are allocated during this Licence Period."
                  }), /*#__PURE__*/jsx_runtime.jsx("div", {
                    className: "html2pdf__page-break"
                  }), /*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "The Licensor, acting reasonably, may require the Licensee to move to alternative accommodation, but the Licensor will use their reasonable endeavours, where practicable, to move the Licensee to accommodation of an equivalent or higher type than that which the Licensee occupied immediately prior to the move. Any increase in the Licence Charge will not be charged to the Licensee."
                  }), /*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "No room key will be issued to any Licensee where the Licence Charge due has not been paid."
                  }), /*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "If the Licensee fails to pay on reasonable request any outstanding Licence Charge, Fees, or costs owed under this Licence Agreement, they will be given Notice to Quit and may have their details passed to an appointed debt recovery agent for pursuance of the debt."
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
                children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "aggreement-header-1",
                  children: "DEPOSIT"
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ol", {
                  className: "mb-3",
                  children: [/*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "The Licensee shall pay the Deposit to secure the compliance of the Licensee\u2019s obligations under this Licence Agreement (without prejudice the Licensor\u2019s other rights and remedies). If at any time during the period the Licensor is obliged to draw upon it to satisfy any breaches of such obligations, then the Licensee will immediately make such additional payment as is necessary to restore the full amount of the Deposit held by the Licensor."
                  }), /*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "The Licensor reserves the right to deduct from the Deposit any sums due to the Licensor and any reasonable costs incurred by The Licensor as a result of any breach under this Licence Agreement by the Licensee or any of their visitors and any bank charges incurred as a result of the deduction."
                  }), /*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "Upon request, the deposit will be refunded within twenty-eight days of the termination of the Licence Agreement (however that happens), by refunding the amount due back by Bank transfer, less any transaction charges deducted by the sending or receiving banks. The Licensee must provide details of the return bank account to ensure prompt refund of any deposit due."
                  }), /*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "Such deductions may include, but are not limited to, costs in respect of cleaning and/or repair to any damage caused to the Residence and its fixtures and fittings or equipment contained within and without, outstanding Licence Charges and any reasonable associated administrative charges, fire alarm fines, and any other reasonable costs or charges outstanding at termination of this Licence Agreement."
                  }), /*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "The Licensor may make a levy on the deposits of all or some licensees, to pay for the cost of cleaning and/or repairs to any damage caused within the Residence, other than by trespass, where the culprits are not traced."
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
                children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "aggreement-header-1",
                  children: "CONDITIONS OF RESIDENCE"
                }), /*#__PURE__*/jsx_runtime.jsx("p", {
                  children: "The Licensee agrees to accept and observe the conditions contained in the Conditions of Residence Handbook."
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
                children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "aggreement-header-1",
                  children: "SERVICES"
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ol", {
                  className: "mb-3",
                  children: [/*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "In consideration of the Licence Charge paid and received and the observance and performance of the covenants contained herein, the Licensor shall be responsible for providing:"
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
                    children: [/*#__PURE__*/jsx_runtime.jsx("li", {
                      children: "Lighting and cooling;"
                    }), /*#__PURE__*/jsx_runtime.jsx("li", {
                      children: "Hot and cold running water;"
                    }), /*#__PURE__*/jsx_runtime.jsx("li", {
                      children: "Electricity supply;"
                    }), /*#__PURE__*/jsx_runtime.jsx("li", {
                      children: "Disposal of rubbish deposited in proper receptacles;"
                    }), /*#__PURE__*/jsx_runtime.jsx("li", {
                      children: "Access to wireless internet via the main internet service provider."
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
                children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "aggreement-header-1",
                  children: "TERMINATION OF THE AGREEMENT OR BOOKING"
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ol", {
                  className: "mb-3",
                  children: [/*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "The Licensee may terminate this Licence Agreement by giving notice to the Licensor not less than 4 (four) weeks before the commencement of the Licence Period. In this case, the booking fee is non-refundable and it cannot be transferred to another applicant or another tenancy period. If the Licensee terminates this Agreement less than 4 (four) weeks before the commencement of the Licence Period, the Licensee will remain liable for the contractual obligations laid out in the Licence Agreement."
                  }), /*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "If the Licensee wishes to leave the Accommodation at any time after the commencement but before the expiry of the Licence Period, they must give notice of this effect to the Licensor. The Licensee will be solely responsible for filling the vacancy in the Residence created by their departure by finding a suitable replacement licensee. If the Licensee succeeds in finding a suitable replacement, they must notify the Licensor immediately."
                  }), /*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "The Licensor is under no obligation to accept the replacement licensee. Should the Licensor agree on the suitability of the replacement licensee and agree to terminate the Licence Agreement, the Licensor will confirm this in writing to the Licensee. The date of termination of this Licence Agreement will then take effect on the date that the licence agreement with the replacement licensee commences (and not with effect from any other date)."
                  }), /*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "The Deposit and any applicable refund due (less appropriate Fees) to the Licensee will be returned within 28 (twenty-eight) days of receipt of the replacement licensee\u2019s deposit and Licence Charge for the Licence Period."
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
                    children: ["The Licensor may terminate this agreement with immediate effect by giving written notice to the Licensee if:", /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
                      children: [/*#__PURE__*/jsx_runtime.jsx("li", {
                        children: "the Licensee fails to pay any amount due under this Agreement on the due date for payment and remains in default not less than 7 (seven) days after being notified to make such payment; or"
                      }), /*#__PURE__*/jsx_runtime.jsx("li", {
                        children: "The Licensee commits a material breach of any term of this Agreement or fails to observe the rules stipulated in the Conditions of Residence Handbook."
                      })]
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
                children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "aggreement-header-1",
                  children: "EFFECT OF TERMINATION OR EXPIRY"
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ol", {
                  className: "mb-3",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
                    children: ["Upon termination or expiry of this Agreement or the Licence Period, the Licensee shall:", /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
                      children: [/*#__PURE__*/jsx_runtime.jsx("li", {
                        children: "give the Licensor vacant possession of the Accommodation;"
                      }), /*#__PURE__*/jsx_runtime.jsx("li", {
                        children: "leave those parts of the Residence for which he or she is responsible in a state of repair and condition consistent with his or her obligations under this Licence Agreement, fair wear and tear excepted;"
                      }), /*#__PURE__*/jsx_runtime.jsx("li", {
                        children: "remove all rubbish and leave the Accommodation in a clean and tidy condition, fair wear and tear excepted;"
                      }), /*#__PURE__*/jsx_runtime.jsx("li", {
                        children: "remove all personal possessions from the Residence. The Licensor accepts no responsibility for anything left at the Residence at the end of this Licence Agreement;"
                      })]
                    })]
                  }), /*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "The Licensor reserves the right to dispose of any items left at the Residence by the Licensee at the end of the Licence Agreement and to deduct any sums owing to the Licensor by the Licensee from the sale proceeds."
                  }), /*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "Room keys must be handed into the office no later than 10.00am on the termination date. Licensees who retain their keys may be liable, at the discretion of the Licensor or the operations manager, for the full cost of replacing locks and keys for all areas of the Residence to which their keys allow access."
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
                children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "aggreement-header-1",
                  children: "GUARANTEE"
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ol", {
                  children: [/*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "The Licensee shall provide a Guarantor who shall execute a guarantee in the form provided by the Licensor and hereunder guarantees that the Licensee shall pay the Licence Charge and any other amount due under this Licence Agreement and observe and perform the Licensee\u2019s covenants under this Licence Agreement."
                  }), /*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "If the Licensee fails to pay the Licence Charge or other amount due or to observe or perform any of the Licensee\u2019s covenants, the Guarantor shall pay or observe and perform them."
                  }), /*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "The Guarantor covenants as principle obligor and as a separate and independent obligation and liability from its obligations and liabilities under this clause to indemnify and keep indemnified against any failure by the Licensee to pay the Licence Charge or other amount due or any failure by the Licensee to observe or perform any of the Licensee\u2019s covenants under this Licence Agreement."
                  }), /*#__PURE__*/jsx_runtime.jsx("li", {
                    children: "If the Licensee breaches the Licence Agreement at any time during the Licence Period, the Manager reserves the right to advise the Guarantor of any such breach without prior notice."
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
                    children: ["The liability of the Guarantor shall not be reduced, discharged or otherwise adversely affected by:", /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
                      children: [/*#__PURE__*/jsx_runtime.jsx("li", {
                        children: "any time or indulgence granted by the Licensor to the Licensee;"
                      }), /*#__PURE__*/jsx_runtime.jsx("li", {
                        children: "any delay or forbearance by the Licensor in enforcing the payment of the Licence Charge or other amount due or the observance or performance of any of the Licensee\u2019s covenants under this Licence Agreement or in making any demand in respect of them;"
                      }), /*#__PURE__*/jsx_runtime.jsx("li", {
                        children: "any delay or forbearance by the Licensor in enforcing the payment of the Licence Charge or other amount due or the observance or performance of any of the Licensee\u2019s covenants under this Licence Agreement or in making any demand in respect of them;"
                      }), /*#__PURE__*/jsx_runtime.jsx("li", {
                        children: "the Licensor taking any action or refraining from taking any action in connection with the Deposit: or"
                      }), /*#__PURE__*/jsx_runtime.jsx("li", {
                        children: "the Licensee dying or becoming incapable of managing his or her affairs"
                      })]
                    })]
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "aggreement-footer",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
                className: "aggreement-text",
                children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                  className: "aggreement-header-1",
                  children: "ACCEPTED AND AGREED"
                }), /*#__PURE__*/jsx_runtime.jsx("br", {}), "By the within-named ", /*#__PURE__*/jsx_runtime.jsx("span", {
                  className: "aggreement-header-1",
                  children: "LICENSEE,"
                })]
              }), /*#__PURE__*/jsx_runtime.jsx("div", {
                className: "signature",
                children: signature ? /*#__PURE__*/jsx_runtime.jsx("img", {
                  src: signature,
                  alt: "signature"
                }) : ""
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "mb-0",
                children: "\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.."
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
                className: "aggreement-header-1",
                children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                  className: "text-capitalize",
                  children: lastname
                }), " ", /*#__PURE__*/jsx_runtime.jsx("span", {
                  className: "text-capitalize",
                  children: firstname
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
                className: "aggreement-header-1",
                children: ["Date: ", today]
              })]
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime.jsx("p", {
        className: "text-center",
        children: "Sign below:"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "signature-canvas mx-auto",
        children: [/*#__PURE__*/jsx_runtime.jsx((build_default()), {
          ref: sigCanvas,
          penColor: "black",
          canvasProps: {
            width: 320,
            height: 150,
            className: 'sigCanvas'
          }
        }), /*#__PURE__*/jsx_runtime.jsx("hr", {
          className: "mt-0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
        className: "signature-upload-text mt-4",
        onClick: uploadSignature,
        children: [/*#__PURE__*/jsx_runtime.jsx("span", {
          className: "pe-1",
          children: /*#__PURE__*/jsx_runtime.jsx("img", {
            src: "/img/upload-icon.png",
            width: "10",
            alt: "edit icon"
          })
        }), "Click here after signing to add your signature to document"]
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "text-center",
        children: signature != null ? /*#__PURE__*/jsx_runtime.jsx("button", {
          type: "button",
          className: "btn btn-primary btn-lg btn-register mt-4",
          onClick: handleSubmit,
          children: "Continue"
        }) : /*#__PURE__*/jsx_runtime.jsx("button", {
          className: "btn btn-light btn-lg btn-deactivate mt-4 w-50",
          disabled: true,
          children: "Continue"
        })
      })]
    })]
  });
}

const mapStateToProps = state => ({
  userInfo: state.main
});

const mapDispatchToProps = {
  setSigned: setSigned,
  resetState: resetState
};
/* harmony default export */ var agreement = ((0,lib.connect)(mapStateToProps, mapDispatchToProps)(Agreement));

/***/ }),

/***/ 74974:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; },
/* harmony export */   "unstable_getStaticParams": function() { return /* binding */ unstable_getStaticParams; },
/* harmony export */   "unstable_getStaticProps": function() { return /* binding */ unstable_getStaticProps; },
/* harmony export */   "unstable_getStaticPaths": function() { return /* binding */ unstable_getStaticPaths; },
/* harmony export */   "unstable_getServerProps": function() { return /* binding */ unstable_getServerProps; },
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "_app": function() { return /* binding */ _app; },
/* harmony export */   "renderReqToHTML": function() { return /* binding */ renderReqToHTML; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3660);
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35706);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32738);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19392);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([{"path":".env.production.local","contents":"# Add the public site key here\nNEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LclehYbAAAAAORK9uakcqGXACzGbkcqHFksZge8\n# Add the secret key here\nRECAPTCHA_SECRET_KEY=6LclehYbAAAAAPzK1VyaCqDac5aZgvwyeTgkKWeb\n\nBACKEND_API=127.0.0.1:5559\n"},{"path":".env.local","contents":"# Add the public site key here\nNEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LclehYbAAAAAORK9uakcqGXACzGbkcqHFksZge8\n# Add the secret key here\nRECAPTCHA_SECRET_KEY=6LclehYbAAAAAPzK1VyaCqDac5aZgvwyeTgkKWeb\n\nBACKEND_API=127.0.0.1:5559"},{"path":".env","contents":"# Add the public site key here\nNEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LclehYbAAAAAORK9uakcqGXACzGbkcqHFksZge8\n# Add the secret key here\nRECAPTCHA_SECRET_KEY=6LclehYbAAAAAPzK1VyaCqDac5aZgvwyeTgkKWeb\n\nBACKEND_API=127.0.0.1:5559\n\nAWS_ACCESS_KEY_ID=AKIAQHWIICMX6QYTCN53\nAWS_SECRET_ACCESS_KEY=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"}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(48609)

      const appMod = __webpack_require__(40083)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(53919)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ __webpack_exports__["default"] = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(70900),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/agreement",
        buildId: "h_UmUIGlEjDMrPgHkXuTN",
        escapedBuildId: "h_UmUIGlEjDMrPgHkXuTN",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"a5e7c3aec068b71e60dcfed050baaf02",previewModeSigningKey:"6a7ad9631f7c129e555fe9b0f37ab59a4623166ad9fc6efc10ba8e1e887551f8",previewModeEncryptionKey:"129bf860fcb72505aad63cd86e143d7e4580c51efa47c27b2f434ce2ff98316e"}
      })
      
    

/***/ }),

/***/ 64293:
/***/ (function(module) {

module.exports = require("buffer");;

/***/ }),

/***/ 45532:
/***/ (function(module) {

module.exports = require("critters");;

/***/ }),

/***/ 76417:
/***/ (function(module) {

module.exports = require("crypto");;

/***/ }),

/***/ 28614:
/***/ (function(module) {

module.exports = require("events");;

/***/ }),

/***/ 35747:
/***/ (function(module) {

module.exports = require("fs");;

/***/ }),

/***/ 98605:
/***/ (function(module) {

module.exports = require("http");;

/***/ }),

/***/ 57211:
/***/ (function(module) {

module.exports = require("https");;

/***/ }),

/***/ 33700:
/***/ (function(module) {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");;

/***/ }),

/***/ 12087:
/***/ (function(module) {

module.exports = require("os");;

/***/ }),

/***/ 85622:
/***/ (function(module) {

module.exports = require("path");;

/***/ }),

/***/ 71191:
/***/ (function(module) {

module.exports = require("querystring");;

/***/ }),

/***/ 92413:
/***/ (function(module) {

module.exports = require("stream");;

/***/ }),

/***/ 24304:
/***/ (function(module) {

module.exports = require("string_decoder");;

/***/ }),

/***/ 78835:
/***/ (function(module) {

module.exports = require("url");;

/***/ }),

/***/ 31669:
/***/ (function(module) {

module.exports = require("util");;

/***/ }),

/***/ 65013:
/***/ (function(module) {

module.exports = require("worker_threads");;

/***/ }),

/***/ 78761:
/***/ (function(module) {

module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [7158,5087,8259,7485,9008,5745,573,6255,1163,5075,3750,1428,2739,422,5284], function() { return __webpack_require__(74974); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [{"url":"https://fonts.googleapis.com/css2?family=Calistoga&display=swap","content":"@font-face{font-family:'Calistoga';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/calistoga/v5/6NUU8F2OJg6MeR7l4e0vtw.woff) format('woff')}@font-face{font-family:'Calistoga';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/calistoga/v5/6NUU8F2OJg6MeR7l4e0fvMwB49dJfuWv.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Calistoga';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/calistoga/v5/6NUU8F2OJg6MeR7l4e0fvcwB49dJfuWv.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Calistoga';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/calistoga/v5/6NUU8F2OJg6MeR7l4e0fs8wB49dJfg.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}"}];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);/* webpack/runtime/require chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			7567: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = function(chunkId) { return installedChunks[chunkId]; };
/******/ 		
/******/ 		var installChunk = function(chunk) {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			__webpack_require__.e(7158);
/******/ 			__webpack_require__.e(5087);
/******/ 			__webpack_require__.e(8259);
/******/ 			__webpack_require__.e(7485);
/******/ 			__webpack_require__.e(9008);
/******/ 			__webpack_require__.e(5745);
/******/ 			__webpack_require__.e(573);
/******/ 			__webpack_require__.e(6255);
/******/ 			__webpack_require__.e(1163);
/******/ 			__webpack_require__.e(5075);
/******/ 			__webpack_require__.e(3750);
/******/ 			__webpack_require__.e(1428);
/******/ 			__webpack_require__.e(2739);
/******/ 			__webpack_require__.e(422);
/******/ 			__webpack_require__.e(5284);
/******/ 			return next();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;