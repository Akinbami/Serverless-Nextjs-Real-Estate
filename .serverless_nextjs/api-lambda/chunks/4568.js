exports.id = 4568;
exports.ids = [4568];
exports.modules = {

/***/ 68668:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25675);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13199);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_4__);







const APPLICATION_API = "http://127.0.0.1:5559"; // const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

const RoomChecklist = props => {
  const {
    0: collapsed,
    1: setCollapsed
  } = useState(true);
  const {
    0: processingChecklist,
    1: setProcessingChecklist
  } = useState(null);
  const {
    0: checklist,
    1: setChecklist
  } = useState({});

  const fetcher = url => fetch(url, {
    method: 'GET',
    headers: {
      authorization: 'Bearer ' + props.token
    }
  }).then(res => res.json());

  let {
    data,
    error
  } = useSWR(APPLICATION_API + `/users/checklist`, fetcher);

  if (!data) {
    return /*#__PURE__*/_jsx("div", {
      className: "room-checklist-card mx-auto py-3 mt-5",
      children: /*#__PURE__*/_jsxs("div", {
        className: "room-checklist-card-inner",
        children: [/*#__PURE__*/_jsxs("p", {
          className: "room-checklist-header mb-0",
          children: [/*#__PURE__*/_jsx("img", {
            src: "/img/room_check.png",
            alt: ""
          }), /*#__PURE__*/_jsx("span", {
            className: "px-2",
            children: "Room Checklist"
          })]
        }), /*#__PURE__*/_jsx("hr", {
          className: "mt-0 mb-4"
        }), /*#__PURE__*/_jsx("p", {
          className: "room-checklist-subheader mb-0",
          children: "To do"
        }), /*#__PURE__*/_jsx("hr", {
          className: "mt-0"
        }), /*#__PURE__*/_jsx("div", {
          className: "text-center",
          children: /*#__PURE__*/_jsx("div", {
            className: "spinner-border",
            role: "status",
            children: /*#__PURE__*/_jsx("span", {
              className: "visually-hidden",
              children: "Loading..."
            })
          })
        })]
      })
    });
  }

  if (!data.data) {
    return /*#__PURE__*/_jsx("div", {
      className: "room-checklist-card mx-auto py-3 mt-5",
      children: /*#__PURE__*/_jsxs("div", {
        className: "room-checklist-card-inner",
        children: [/*#__PURE__*/_jsxs("p", {
          className: "room-checklist-header mb-0",
          children: [/*#__PURE__*/_jsx("img", {
            src: "/img/room_check.png",
            alt: ""
          }), /*#__PURE__*/_jsx("span", {
            className: "px-2",
            children: "Room Checklist"
          })]
        }), /*#__PURE__*/_jsx("hr", {
          className: "mt-0 mb-4"
        }), /*#__PURE__*/_jsx("p", {
          className: "room-checklist-subheader mb-0",
          children: "To do"
        }), /*#__PURE__*/_jsx("hr", {
          className: "mt-0"
        }), /*#__PURE__*/_jsx("p", {
          className: "text-center",
          children: "No checklist for you yet!!!"
        })]
      })
    });
  }

  const handleChecklist = (id, key) => {
    setProcessingChecklist(key);
    const req_data = {
      id: id,
      key: key
    };
    fetch(APPLICATION_API + `/users/checklist`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + props.token
      },
      body: JSON.stringify(req_data)
    }).then(response => {
      return response.json();
    }).then(res => {
      console.log("response data", res); //   setIsLoading(false)

      if (res.error) {//   setsubscriptionSuccess(data.data)
      } else {
        setChecklist(res.data);
        console.log(res); //   data.data = res.data;
      }
    }).catch(error => {
      console.log(error); // setPhoneError("Failed")
    });
  };

  return /*#__PURE__*/_jsx(React.Fragment, {
    children: /*#__PURE__*/_jsx("div", {
      className: "room-checklist-card mx-auto py-3 mt-5",
      children: /*#__PURE__*/_jsxs("div", {
        className: "room-checklist-card-inner",
        children: [/*#__PURE__*/_jsxs("p", {
          className: "room-checklist-header mb-0",
          children: [/*#__PURE__*/_jsx("img", {
            src: "/img/room_check.png",
            alt: ""
          }), /*#__PURE__*/_jsx("span", {
            className: "px-2",
            children: "Room Checklist"
          })]
        }), /*#__PURE__*/_jsx("hr", {
          className: "mt-0 mb-4"
        }), /*#__PURE__*/_jsx("p", {
          className: "room-checklist-subheader mb-0",
          children: "To do"
        }), /*#__PURE__*/_jsx("hr", {
          className: "mt-0"
        }), /*#__PURE__*/_jsxs("div", {
          className: "room-checklist",
          children: [checklist.checkedin == true || data.data.checkedin ? "" : /*#__PURE__*/_jsxs("div", {
            className: "d-flex bd-highlight",
            children: [/*#__PURE__*/_jsx("div", {
              className: "p-2 bd-highlight",
              children: processingChecklist == 1 ? /*#__PURE__*/_jsx("div", {
                className: "spinner-grow spinner-grow-sm",
                role: "status",
                children: /*#__PURE__*/_jsx("span", {
                  className: "visually-hidden",
                  children: "Loading..."
                })
              }) : /*#__PURE__*/_jsx("p", {
                className: "room-checklist-bullet btn mb-0",
                onClick: e => handleChecklist(data.data._id, 1)
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "p-2 flex-grow-1 bd-highlight",
              children: /*#__PURE__*/_jsx("p", {
                className: "room-checklist-text",
                children: "Checked in to my Room/Flat"
              })
            })]
          }), checklist.inspect == true || data.data.inspect ? "" : /*#__PURE__*/_jsxs("div", {
            className: "d-flex bd-highlight",
            children: [/*#__PURE__*/_jsx("div", {
              className: "p-2 bd-highlight",
              children: processingChecklist == 2 ? /*#__PURE__*/_jsx("div", {
                className: "spinner-grow spinner-grow-sm",
                role: "status",
                children: /*#__PURE__*/_jsx("span", {
                  className: "visually-hidden",
                  children: "Loading..."
                })
              }) : /*#__PURE__*/_jsx("p", {
                className: "room-checklist-bullet btn mb-0",
                onClick: e => handleChecklist(data.data._id, 2)
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "p-2 flex-grow-1 bd-highlight",
              children: /*#__PURE__*/_jsx("p", {
                className: "room-checklist-text",
                children: "Inspect Room Inventory"
              })
            })]
          }), checklist.meet_roommates == true || data.data.meet_roommates ? "" : /*#__PURE__*/_jsxs("div", {
            className: "d-flex bd-highlight",
            children: [/*#__PURE__*/_jsx("div", {
              className: "p-2 bd-highlight",
              children: processingChecklist == 3 ? /*#__PURE__*/_jsx("div", {
                className: "spinner-grow spinner-grow-sm",
                role: "status",
                children: /*#__PURE__*/_jsx("span", {
                  className: "visually-hidden",
                  children: "Loading..."
                })
              }) : /*#__PURE__*/_jsx("p", {
                className: "room-checklist-bullet btn mb-0",
                onClick: e => handleChecklist(data.data._id, 3)
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "p-2 flex-grow-1 bd-highlight",
              children: /*#__PURE__*/_jsx("p", {
                className: "room-checklist-text",
                children: "Meet New Roommates"
              })
            })]
          }), checklist.settledin == true || data.data.settledin ? "" : /*#__PURE__*/_jsxs("div", {
            className: "d-flex bd-highlight",
            children: [/*#__PURE__*/_jsx("div", {
              className: "p-2 bd-highlight",
              children: processingChecklist == 4 ? /*#__PURE__*/_jsx("div", {
                className: "spinner-grow spinner-grow-sm",
                role: "status",
                children: /*#__PURE__*/_jsx("span", {
                  className: "visually-hidden",
                  children: "Loading..."
                })
              }) : /*#__PURE__*/_jsx("p", {
                className: "room-checklist-bullet btn mb-0",
                onClick: e => handleChecklist(data.data._id, 4)
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "p-2 flex-grow-1 bd-highlight",
              children: /*#__PURE__*/_jsx("p", {
                className: "room-checklist-text",
                children: "Settle In"
              })
            })]
          }), checklist.get_room_key == true || data.data.get_room_key ? "" : /*#__PURE__*/_jsxs("div", {
            className: "d-flex bd-highlight",
            children: [/*#__PURE__*/_jsx("div", {
              className: "p-2 bd-highlight",
              children: processingChecklist == 5 ? /*#__PURE__*/_jsx("div", {
                className: "spinner-grow spinner-grow-sm",
                role: "status",
                children: /*#__PURE__*/_jsx("span", {
                  className: "visually-hidden",
                  children: "Loading..."
                })
              }) : /*#__PURE__*/_jsx("p", {
                className: "room-checklist-bullet btn mb-0",
                onClick: e => handleChecklist(data.data._id, 5)
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "p-2 flex-grow-1 bd-highlight",
              children: /*#__PURE__*/_jsx("p", {
                className: "room-checklist-text",
                children: "Get room key"
              })
            })]
          })]
        }), /*#__PURE__*/_jsx("p", {
          className: "room-checklist-subheader mb-0",
          children: "Done"
        }), /*#__PURE__*/_jsx("hr", {
          className: "mt-0"
        }), checklist.checkedin == true || data.data.checkedin ? /*#__PURE__*/_jsxs("div", {
          className: "d-flex bd-highlight",
          children: [/*#__PURE__*/_jsx("div", {
            className: "p-2 bd-highlight",
            children: /*#__PURE__*/_jsx("p", {
              className: "room-checklist-bullet room-checklist-bullet-deactivate mb-0",
              children: /*#__PURE__*/_jsx("img", {
                src: "/img/checklist-checked.png",
                width: "70%",
                alt: ""
              })
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "p-2 flex-grow-1 bd-highlight",
            children: /*#__PURE__*/_jsx("p", {
              className: "room-checklist-text",
              children: "Checked in to my Room/Flat"
            })
          })]
        }) : "", checklist.inspect == true || data.data.inspect ? /*#__PURE__*/_jsxs("div", {
          className: "d-flex bd-highlight",
          children: [/*#__PURE__*/_jsx("div", {
            className: "p-2 bd-highlight",
            children: /*#__PURE__*/_jsx("p", {
              className: "room-checklist-bullet room-checklist-bullet-deactivate mb-0",
              children: /*#__PURE__*/_jsx("img", {
                src: "/img/checklist-checked.png",
                width: "70%",
                alt: ""
              })
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "p-2 flex-grow-1 bd-highlight",
            children: /*#__PURE__*/_jsx("p", {
              className: "room-checklist-text",
              children: "Inspect Room Inventory"
            })
          })]
        }) : "", checklist.meet_roommates == true || data.data.meet_roommates ? /*#__PURE__*/_jsxs("div", {
          className: "d-flex bd-highlight",
          children: [/*#__PURE__*/_jsx("div", {
            className: "p-2 bd-highlight",
            children: /*#__PURE__*/_jsx("p", {
              className: "room-checklist-bullet room-checklist-bullet-deactivate mb-0",
              children: /*#__PURE__*/_jsx("img", {
                src: "/img/checklist-checked.png",
                width: "70%",
                alt: ""
              })
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "p-2 flex-grow-1 bd-highlight",
            children: /*#__PURE__*/_jsx("p", {
              className: "room-checklist-text",
              children: "Meet New Roommates"
            })
          })]
        }) : "", checklist.settledin == true || data.data.settledin ? /*#__PURE__*/_jsxs("div", {
          className: "d-flex bd-highlight",
          children: [/*#__PURE__*/_jsx("div", {
            className: "p-2 bd-highlight",
            children: /*#__PURE__*/_jsx("p", {
              className: "room-checklist-bullet room-checklist-bullet-deactivate mb-0",
              children: /*#__PURE__*/_jsx("img", {
                src: "/img/checklist-checked.png",
                width: "70%",
                alt: ""
              })
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "p-2 flex-grow-1 bd-highlight",
            children: /*#__PURE__*/_jsx("p", {
              className: "room-checklist-text",
              children: "Settle In"
            })
          })]
        }) : "", checklist.get_room_key == true || data.data.get_room_key ? /*#__PURE__*/_jsxs("div", {
          className: "d-flex bd-highlight",
          children: [/*#__PURE__*/_jsx("div", {
            className: "p-2 bd-highlight",
            children: /*#__PURE__*/_jsx("p", {
              className: "room-checklist-bullet room-checklist-bullet-deactivate mb-0",
              children: /*#__PURE__*/_jsx("img", {
                src: "/img/checklist-checked.png",
                width: "70%",
                alt: ""
              })
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "p-2 flex-grow-1 bd-highlight",
            children: /*#__PURE__*/_jsx("p", {
              className: "room-checklist-text",
              children: "Get room key"
            })
          })]
        }) : ""]
      })
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (RoomChecklist)));

/***/ }),

/***/ 46947:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25675);







const RoommateSection = props => {
  const {
    0: collapsed,
    1: setCollapsed
  } = useState(true);
  return /*#__PURE__*/_jsx(React.Fragment, {
    children: /*#__PURE__*/_jsx("div", {
      className: "room-checklist-card mx-auto py-3 mt-5",
      children: /*#__PURE__*/_jsxs("div", {
        className: "room-checklist-card-inner",
        children: [/*#__PURE__*/_jsx("div", {
          className: "d-flex justify-content-between",
          children: /*#__PURE__*/_jsxs("p", {
            className: "room-checklist-header mb-0",
            children: [/*#__PURE__*/_jsx("img", {
              src: "/img/roommate.png",
              alt: ""
            }), /*#__PURE__*/_jsx("span", {
              className: "px-2",
              children: "Roommates"
            })]
          })
        }), /*#__PURE__*/_jsx("hr", {
          className: "mt-1 mb-0"
        }), /*#__PURE__*/_jsxs("div", {
          className: "roommate-card",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "d-flex align-items-center mb-3",
            children: [/*#__PURE__*/_jsx("div", {
              className: "flex-shrink-0",
              children: /*#__PURE__*/_jsx("img", {
                src: "/img/roommate-pic.png",
                width: "100%",
                alt: ""
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "flex-grow-1 ms-3 pt-4",
              children: /*#__PURE__*/_jsxs("div", {
                className: "d-flex justify-content-between",
                children: [/*#__PURE__*/_jsxs("p", {
                  className: "support-ticket-card-text mb-0",
                  children: ["You", /*#__PURE__*/_jsx("p", {
                    className: "text-muted",
                    children: "SS/56/0644"
                  })]
                }), /*#__PURE__*/_jsx("p", {
                  className: "support-ticket-card-text mb-0",
                  children: /*#__PURE__*/_jsx("img", {
                    src: "/img/CaretRight.png",
                    width: "100%",
                    alt: ""
                  })
                })]
              })
            })]
          }), /*#__PURE__*/_jsx("hr", {
            className: "my-0"
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "roommate-card",
          children: /*#__PURE__*/_jsxs("div", {
            className: "d-flex align-items-center mb-3",
            children: [/*#__PURE__*/_jsx("div", {
              className: "flex-shrink-0",
              children: /*#__PURE__*/_jsx("img", {
                src: "/img/roommate-pic.png",
                width: "100%",
                alt: ""
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "flex-grow-1 ms-3 pt-4",
              children: /*#__PURE__*/_jsxs("div", {
                className: "d-flex justify-content-between",
                children: [/*#__PURE__*/_jsxs("p", {
                  className: "support-ticket-card-text mb-0",
                  children: ["Shuaid Hassan", /*#__PURE__*/_jsx("p", {
                    className: "text-muted",
                    children: "SS/56/0456"
                  })]
                }), /*#__PURE__*/_jsx("p", {
                  className: "support-ticket-card-text mb-0",
                  children: /*#__PURE__*/_jsx("img", {
                    src: "/img/CaretRight.png",
                    width: "100%",
                    alt: ""
                  })
                })]
              })
            })]
          })
        })]
      })
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (RoommateSection)));

/***/ }),

/***/ 8032:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25675);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13199);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TicketCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17534);







 // const APPLICATION_API = "http://127.0.0.1:5559";

const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

const TicketSupportSection = props => {
  const {
    0: collapsed,
    1: setCollapsed
  } = useState(true);

  const fetcher = url => fetch(url, {
    method: 'GET',
    headers: {
      authorization: 'Bearer ' + props.token
    }
  }).then(res => res.json());

  const {
    data,
    error
  } = useSWR(APPLICATION_API + `/tickets?limit=${3}`, fetcher); // console.log("this is the component data", data)

  if (error) return /*#__PURE__*/_jsx(React.Fragment, {
    children: /*#__PURE__*/_jsx("div", {
      className: "room-checklist-card mx-auto py-3 mt-5",
      children: /*#__PURE__*/_jsxs("div", {
        className: "room-checklist-card-inner",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "d-flex justify-content-between",
          children: [/*#__PURE__*/_jsxs("p", {
            className: "room-checklist-header mb-0",
            children: [/*#__PURE__*/_jsx("img", {
              src: "/img/chat-icon.png",
              alt: ""
            }), /*#__PURE__*/_jsx("span", {
              className: "px-2",
              children: "Support Ticket"
            })]
          }), /*#__PURE__*/_jsx(Link, {
            href: "/support",
            children: /*#__PURE__*/_jsx("a", {
              children: /*#__PURE__*/_jsxs("p", {
                className: "support-button p-2",
                children: [/*#__PURE__*/_jsx("img", {
                  src: "/img/chat-plus.png",
                  alt: ""
                }), /*#__PURE__*/_jsx("span", {
                  className: "px-2",
                  children: "NEW TICKET"
                })]
              })
            })
          })]
        }), /*#__PURE__*/_jsx("hr", {
          className: "mt-1 mb-4"
        }), /*#__PURE__*/_jsx("div", {
          className: "container text-center",
          children: /*#__PURE__*/_jsx("p", {
            className: "support-done-header",
            children: "Failed to load ticket"
          })
        })]
      })
    })
  });
  if (!data || !data.data) return /*#__PURE__*/_jsx(React.Fragment, {
    children: /*#__PURE__*/_jsx("div", {
      className: "room-checklist-card mx-auto py-3 mt-5",
      children: /*#__PURE__*/_jsxs("div", {
        className: "room-checklist-card-inner",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "d-flex justify-content-between",
          children: [/*#__PURE__*/_jsxs("p", {
            className: "room-checklist-header mb-0",
            children: [/*#__PURE__*/_jsx("img", {
              src: "/img/chat-icon.png",
              alt: ""
            }), /*#__PURE__*/_jsx("span", {
              className: "px-2",
              children: "Support Ticket"
            })]
          }), /*#__PURE__*/_jsx(Link, {
            href: "/support",
            children: /*#__PURE__*/_jsx("a", {
              children: /*#__PURE__*/_jsxs("p", {
                className: "support-button p-2",
                children: [/*#__PURE__*/_jsx("img", {
                  src: "/img/chat-plus.png",
                  alt: ""
                }), /*#__PURE__*/_jsx("span", {
                  className: "px-2",
                  children: "NEW TICKET"
                })]
              })
            })
          })]
        }), /*#__PURE__*/_jsx("hr", {
          className: "mt-1 mb-4"
        }), /*#__PURE__*/_jsxs("div", {
          className: "container text-center",
          children: [/*#__PURE__*/_jsx("p", {
            className: "support-done-logo",
            children: /*#__PURE__*/_jsx("img", {
              src: "/img/noticket.png",
              alt: "done"
            })
          }), /*#__PURE__*/_jsx("p", {
            className: "support-done-header",
            children: "No ticket found"
          }), /*#__PURE__*/_jsxs("p", {
            className: "support-done-text",
            children: ["Looks like you haven\u2019t raised", /*#__PURE__*/_jsx("br", {}), "any complaint yet"]
          })]
        })]
      })
    })
  });
  return /*#__PURE__*/_jsx(React.Fragment, {
    children: /*#__PURE__*/_jsx("div", {
      className: "room-checklist-card mx-auto py-3 mt-5",
      children: /*#__PURE__*/_jsxs("div", {
        className: "room-checklist-card-inner",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "d-flex justify-content-between",
          children: [/*#__PURE__*/_jsxs("p", {
            className: "room-checklist-header mb-0",
            children: [/*#__PURE__*/_jsx("img", {
              src: "/img/chat-icon.png",
              alt: ""
            }), /*#__PURE__*/_jsx("span", {
              className: "px-2",
              children: "Support Ticket"
            })]
          }), /*#__PURE__*/_jsx(Link, {
            href: "/support",
            children: /*#__PURE__*/_jsx("a", {
              children: /*#__PURE__*/_jsxs("p", {
                className: "support-button p-2",
                children: [/*#__PURE__*/_jsx("img", {
                  src: "/img/chat-plus.png",
                  alt: ""
                }), /*#__PURE__*/_jsx("span", {
                  className: "px-2",
                  children: "NEW TICKET"
                })]
              })
            })
          })]
        }), /*#__PURE__*/_jsx("hr", {
          className: "mt-1 mb-4"
        }), data.data.docs.map((ticket, index) => {
          return /*#__PURE__*/_jsx(TicketCard, {
            ticket: ticket
          });
        })]
      })
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (TicketSupportSection)));

/***/ })

};
;