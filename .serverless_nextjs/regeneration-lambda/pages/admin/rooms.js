/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 82325:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ rooms; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__(65988);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__(87428);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/javascript-time-ago/index.commonjs.js
var index_commonjs = __webpack_require__(21331);
var index_commonjs_default = /*#__PURE__*/__webpack_require__.n(index_commonjs);
// EXTERNAL MODULE: ./node_modules/javascript-time-ago/locale/en.json
var en = __webpack_require__(21727);
// EXTERNAL MODULE: ./node_modules/react-data-table-component/dist/index.cjs.js
var index_cjs = __webpack_require__(90044);
;// CONCATENATED MODULE: ./components/RoomsTable.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // const APPLICATION_API = "http://127.0.0.1:5559";

const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";
const columns = [{
  name: 'Number',
  selector: 'number',
  sortable: true
}, {
  name: 'Type',
  selector: 'type',
  sortable: true,
  editable: true
}, {
  name: 'Specialty',
  selector: 'specialty',
  sortable: true,
  editable: true,
  cell: row => /*#__PURE__*/jsx_runtime.jsx("p", {
    children: row.specialty ? "YES" : "NO"
  })
}, {
  name: 'Taken',
  selector: 'taken',
  sortable: true,
  editable: true,
  cell: row => /*#__PURE__*/jsx_runtime.jsx("p", {
    children: row.taken ? "YES" : "NO"
  })
}, {
  name: 'Floor',
  selector: 'floor',
  sortable: true
}, {
  name: 'CreatedAt',
  selector: 'createdAt',
  sortable: true
}];

const EditableCell = ({
  row,
  index,
  column,
  col,
  onChange
}) => {
  const {
    0: value,
    1: setValue
  } = (0,react.useState)(row[column.selector]);

  const handleOnChange = e => {
    setValue(e.target.value);
    onChange === null || onChange === void 0 ? void 0 : onChange(e);
  };

  if (column !== null && column !== void 0 && column.editing) {
    return /*#__PURE__*/jsx_runtime.jsx("input", {
      type: column.type || 'text',
      name: column.selector,
      style: {
        width: '100%'
      },
      onChange: handleOnChange,
      value: value
    });
  }

  if (col.cell) {
    return col.cell(row, index, column);
  }

  return row[column.selector];
};

const RoomsTable = props => {
  const {
    0: collapsed,
    1: setCollapsed
  } = (0,react.useState)(true);
  const {
    0: errorMessage,
    1: setErrorMessage
  } = (0,react.useState)(null);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react.useState)(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const router = (0,next_router.useRouter)();

  const handleSelectedRows = state => {
    // You can use setState or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', state.selectedRows);
  };

  const {
    0: innerData,
    1: setInnerData
  } = (0,react.useState)(props.rooms);
  const {
    0: editingId,
    1: setEditingId
  } = (0,react.useState)('');
  let formData = (0,react.useRef)({}).current;

  const isEditing = record => record._id === editingId;

  const token = props.token;

  const formOnChange = event => {
    const nam = event.target.name;
    const val = event.target.value;
    formData = _objectSpread(_objectSpread({}, formData), {}, {
      [nam]: val
    });
  };

  const edit = record => {
    setEditingId(record._id);
  };

  const cancel = () => {
    setEditingId('');
  };

  const save = item => {
    const payload = _objectSpread(_objectSpread({}, item), formData);

    const tempData = [...innerData];
    const index = tempData.findIndex(item => editingId === item._id);

    if (index > -1) {
      const item = tempData[index];
      tempData.splice(index, 1, _objectSpread(_objectSpread({}, item), payload));
      setEditingId('');
      setInnerData(tempData);
      console.log("this is the temporary payload: ", payload);
      fetch(APPLICATION_API + `/rooms/${payload._id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "authorization": 'Bearer ' + token
        },
        body: JSON.stringify(payload)
      }).then(response => response.json()).then(data => {
        console.log(data);
        setIsLoading(false);

        if (data.error) {
          setIsLoading(false);
          setErrorMessage(data.message);
        } else {
          // setUser(data.data)
          setIsLoading(false);
          router.reload(window.location.pathname); // router.push(`/admin/occupants/${user.profile._id}`)
        }
      }).catch(error => {
        setIsLoading(false);
        setErrorMessage(error.message);
      });
    }
  };

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }

    return _objectSpread(_objectSpread({}, col), {}, {
      cell: (row, index, column) => {
        const editing = isEditing(row);
        return /*#__PURE__*/jsx_runtime.jsx(EditableCell, {
          row: row,
          index: index,
          column: _objectSpread(_objectSpread({}, column), {}, {
            editing
          }),
          col: col,
          onChange: formOnChange
        });
      }
    });
  });
  const createColumns = (0,react.useCallback)(() => {
    return [...mergedColumns, {
      name: 'Actions',
      allowOverflow: true,
      minWidth: '200px',
      cell: row => {
        const editable = isEditing(row);

        if (editable) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime.jsx("button", {
              type: "button",
              onClick: () => save(row),
              style: {
                backgroundColor: 'lightgreen'
              },
              children: "save"
            }), /*#__PURE__*/jsx_runtime.jsx("button", {
              type: "button",
              onClick: cancel,
              style: {
                backgroundColor: 'orangered'
              },
              children: "cancel"
            })]
          });
        }

        return /*#__PURE__*/jsx_runtime.jsx("button", {
          type: "button",
          onClick: () => edit(row),
          className: "btn btn-primary btn-room-edit",
          children: "Edit"
        });
      }
    }];
  }, [mergedColumns]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [errorMessage ? /*#__PURE__*/jsx_runtime.jsx("p", {
      className: "text-danger",
      children: errorMessage
    }) : "", /*#__PURE__*/jsx_runtime.jsx(index_cjs/* default */.ZP, {
      title: "All Rooms",
      columns: createColumns(),
      data: innerData,
      selectableRows: true // add for checkbox selection
      ,
      Clicked: true,
      highlightOnHover: true,
      striped: true,
      onSelectedRowsChange: handleSelectedRows,
      pagination: true
    })]
  });
};

/* harmony default export */ var components_RoomsTable = (RoomsTable);
// EXTERNAL MODULE: ./components/Sidbar.js
var Sidbar = __webpack_require__(85789);
// EXTERNAL MODULE: ./node_modules/reactstrap/lib/index.js
var lib = __webpack_require__(45408);
;// CONCATENATED MODULE: ./pages/admin/rooms.js














index_commonjs_default().addLocale(en);
const timeAgo = new (index_commonjs_default())('en-US'); // const APPLICATION_API = "http://127.0.0.1:5559";

const rooms_APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

function Rooms(props) {
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react.useState)(false);
  const {
    0: errorMessage,
    1: setErrorMessage
  } = (0,react.useState)(null);
  const {
    0: successMessage,
    1: setSuccessMessage
  } = (0,react.useState)(null);
  const {
    0: roomModal,
    1: setRoomModal
  } = (0,react.useState)(false);
  const router = (0,next_router.useRouter)();

  const toggleRoom = () => setRoomModal(!roomModal);

  const token = props.token;

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    const req_data = {
      "type": e.target.roomtype.value,
      "number": e.target.number.value,
      "floor": e.target.floor.value,
      "specialty": e.target.specialty.value
    }; // save to backend

    fetch(rooms_APPLICATION_API + `/rooms`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "authorization": 'Bearer ' + token
      },
      body: JSON.stringify(req_data)
    }).then(response => response.json()).then(data => {
      console.log(data);
      setIsLoading(false);

      if (data.error) {
        setIsLoading(false);
        setErrorMessage(data.message);
      } else {
        setIsLoading(false);
        setSuccessMessage(data.message);
        router.reload(window.location.pathname);
      }
    }).catch(error => {
      setIsLoading(false);
      setErrorMessage(error.message);
    });
  };

  const rooms = props.rooms.data.docs;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime.jsx(head.default, {
      children: /*#__PURE__*/jsx_runtime.jsx("link", {
        href: "/css/sidebar.css",
        rel: "stylesheet",
        className: "jsx-4262498705"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "jsx-4262498705" + " " + "row",
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: "jsx-4262498705" + " " + "col-md-2",
        children: /*#__PURE__*/jsx_runtime.jsx(Sidbar/* default */.Z, {})
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "jsx-4262498705" + " " + "col-md-10",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "jsx-4262498705" + " " + "admin-dashboard-content",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "jsx-4262498705" + " " + "d-flex justify-content-between",
            children: [/*#__PURE__*/jsx_runtime.jsx("p", {
              className: "jsx-4262498705" + " " + "admin-dashboard-content-header",
              children: "Rooms"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              className: "jsx-4262498705",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
                type: "button",
                onClick: toggleRoom,
                "data-bs-toggle": "modal",
                "data-bs-target": "#exampleModal",
                className: "jsx-4262498705" + " " + "btn btn-primary btn-add-room",
                children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                  src: "/img/PlusCircle.png",
                  width: "20",
                  className: "jsx-4262498705"
                }), " ", /*#__PURE__*/jsx_runtime.jsx("span", {
                  className: "jsx-4262498705" + " " + "px-1",
                  children: "Add room"
                }), "   "]
              }), /*#__PURE__*/jsx_runtime.jsx(lib/* Modal */.u_, {
                isOpen: roomModal,
                toggle: toggleRoom,
                centered: true,
                children: /*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "jsx-4262498705" + " " + "modal-dialog m-0",
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "jsx-4262498705" + " " + "modal-content",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "jsx-4262498705" + " " + "modal-header",
                      children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                        id: "exampleModalLabel",
                        className: "jsx-4262498705" + " " + "modal-title",
                        children: "Add Room"
                      }), /*#__PURE__*/jsx_runtime.jsx("button", {
                        type: "button",
                        "data-bs-dismiss": "modal",
                        "aria-label": "Close",
                        onClick: toggleRoom,
                        className: "jsx-4262498705" + " " + "btn-close"
                      })]
                    }), /*#__PURE__*/jsx_runtime.jsx("div", {
                      className: "jsx-4262498705" + " " + "modal-body",
                      children: successMessage ? /*#__PURE__*/jsx_runtime.jsx("h3", {
                        className: "jsx-4262498705" + " " + "w-75 mx-auto",
                        children: successMessage
                      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
                        onSubmit: handleSubmit,
                        className: "jsx-4262498705",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "jsx-4262498705" + " " + "mb-3",
                          children: [/*#__PURE__*/jsx_runtime.jsx("label", {
                            for: "number",
                            className: "jsx-4262498705" + " " + "form-label login-form-label",
                            children: "Room Number*"
                          }), /*#__PURE__*/jsx_runtime.jsx("input", {
                            type: "text",
                            id: "number",
                            "aria-describedby": "phoneHelp",
                            name: "number",
                            className: "jsx-4262498705" + " " + "form-control"
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "jsx-4262498705" + " " + "mb-3",
                          children: [/*#__PURE__*/jsx_runtime.jsx("label", {
                            for: "roomtype",
                            className: "jsx-4262498705" + " " + "form-label login-form-label",
                            children: "Room Type*"
                          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("select", {
                            "aria-label": "Default select example",
                            name: "roomtype",
                            className: "jsx-4262498705" + " " + "form-select",
                            children: [/*#__PURE__*/jsx_runtime.jsx("option", {
                              selected: true,
                              className: "jsx-4262498705",
                              children: "--select--"
                            }), /*#__PURE__*/jsx_runtime.jsx("option", {
                              value: "1 Man",
                              className: "jsx-4262498705",
                              children: "1 Man Room"
                            }), /*#__PURE__*/jsx_runtime.jsx("option", {
                              value: "2 Man",
                              className: "jsx-4262498705",
                              children: "2 Man Room"
                            }), /*#__PURE__*/jsx_runtime.jsx("option", {
                              value: "4 Man",
                              className: "jsx-4262498705",
                              children: "4 Man Room"
                            })]
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "jsx-4262498705" + " " + "mb-3",
                          children: [/*#__PURE__*/jsx_runtime.jsx("label", {
                            for: "floor",
                            className: "jsx-4262498705" + " " + "form-label login-form-label",
                            children: "Floor*"
                          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("select", {
                            "aria-label": "Default select example",
                            name: "floor",
                            className: "jsx-4262498705" + " " + "form-select",
                            children: [/*#__PURE__*/jsx_runtime.jsx("option", {
                              selected: true,
                              className: "jsx-4262498705",
                              children: "--select--"
                            }), /*#__PURE__*/jsx_runtime.jsx("option", {
                              value: "1st Floor",
                              className: "jsx-4262498705",
                              children: "1st Floor"
                            }), /*#__PURE__*/jsx_runtime.jsx("option", {
                              value: "2nd Floor",
                              className: "jsx-4262498705",
                              children: "2nd Floor"
                            }), /*#__PURE__*/jsx_runtime.jsx("option", {
                              value: "Ground Floor",
                              className: "jsx-4262498705",
                              children: "Ground Floor"
                            })]
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "jsx-4262498705" + " " + "mb-3",
                          children: [/*#__PURE__*/jsx_runtime.jsx("label", {
                            for: "specialty",
                            className: "jsx-4262498705" + " " + "form-label login-form-label",
                            children: "Specialty*"
                          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("select", {
                            "aria-label": "Default select example",
                            name: "specialty",
                            className: "jsx-4262498705" + " " + "form-select",
                            children: [/*#__PURE__*/jsx_runtime.jsx("option", {
                              selected: true,
                              className: "jsx-4262498705",
                              children: "--select--"
                            }), /*#__PURE__*/jsx_runtime.jsx("option", {
                              value: true,
                              className: "jsx-4262498705",
                              children: "YES"
                            }), /*#__PURE__*/jsx_runtime.jsx("option", {
                              value: false,
                              className: "jsx-4262498705",
                              children: "NO"
                            })]
                          })]
                        }), errorMessage ? /*#__PURE__*/jsx_runtime.jsx("p", {
                          className: "jsx-4262498705" + " " + "text-danger",
                          children: errorMessage
                        }) : "", /*#__PURE__*/jsx_runtime.jsx("div", {
                          className: "jsx-4262498705" + " " + "mb-3 text-center",
                          children: isLoading ? /*#__PURE__*/jsx_runtime.jsx("button", {
                            type: "submit",
                            disabled: true,
                            className: "jsx-4262498705" + " " + "btn btn-primary btn-lg btn-register mt-4",
                            children: "Loading..."
                          }) : /*#__PURE__*/jsx_runtime.jsx("button", {
                            type: "submit",
                            className: "jsx-4262498705" + " " + "btn btn-primary btn-lg btn-register mt-4",
                            children: "Continue"
                          })
                        })]
                      })
                    })]
                  })
                })
              })]
            })]
          }), /*#__PURE__*/jsx_runtime.jsx("p", {
            className: "jsx-4262498705" + " " + "recent-transaction-header",
            children: "All Rooms"
          }), /*#__PURE__*/jsx_runtime.jsx(components_RoomsTable, {
            rooms: rooms,
            token: token
          })]
        })
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(style.default, {
      id: "4262498705",
      children: [".modal-header.jsx-4262498705{background:#EEEEEE;border-radius:5px 5px 0px 0px;}", ".modal-title.jsx-4262498705{font-family:Objektiv Mk2;font-style:normal;font-weight:bold;font-size:1rem;line-height:30px;color:#585858;}"]
    })]
  });
}

async function getServerSideProps(ctx) {
  const {
    req,
    res
  } = ctx;
  const {
    cookies
  } = req;
  const token = cookies["pod-token"];
  const api_res = await fetch(rooms_APPLICATION_API + `/rooms`, {
    method: 'GET',
    headers: {
      authorization: 'Bearer ' + token
    }
  }); // Call an external API endpoint to get posts

  const data = await api_res.json();
  console.log("rooms", data);

  if (data.error) {
    return {
      redirect: {
        permanent: false,
        destination: '/admin/login'
      }
    };
  } // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time


  return {
    props: {
      rooms: data,
      token
    }
  };
}
/* harmony default export */ var rooms = (Rooms);

/***/ }),

/***/ 45218:
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

      const compMod = __webpack_require__(82325)

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
        page: "/admin/rooms",
        buildId: "h_UmUIGlEjDMrPgHkXuTN",
        escapedBuildId: "h_UmUIGlEjDMrPgHkXuTN",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"a5e7c3aec068b71e60dcfed050baaf02",previewModeSigningKey:"6a7ad9631f7c129e555fe9b0f37ab59a4623166ad9fc6efc10ba8e1e887551f8",previewModeEncryptionKey:"129bf860fcb72505aad63cd86e143d7e4580c51efa47c27b2f434ce2ff98316e"}
      })
      
    

/***/ }),

/***/ 67294:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(72408);
} else {}


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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [7158,5087,8259,7485,7424,5745,1073,5855,6071,9781,4479,3966,5103,7185,5408,1428,2739,422,5284,5789], function() { return __webpack_require__(45218); })
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
/******/ 			9258: 1
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
/******/ 					installChunk(require("../../chunks/" + __webpack_require__.u(chunkId)));
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
/******/ 			__webpack_require__.e(7424);
/******/ 			__webpack_require__.e(5745);
/******/ 			__webpack_require__.e(1073);
/******/ 			__webpack_require__.e(5855);
/******/ 			__webpack_require__.e(6071);
/******/ 			__webpack_require__.e(9781);
/******/ 			__webpack_require__.e(4479);
/******/ 			__webpack_require__.e(3966);
/******/ 			__webpack_require__.e(5103);
/******/ 			__webpack_require__.e(7185);
/******/ 			__webpack_require__.e(5408);
/******/ 			__webpack_require__.e(1428);
/******/ 			__webpack_require__.e(2739);
/******/ 			__webpack_require__.e(422);
/******/ 			__webpack_require__.e(5284);
/******/ 			__webpack_require__.e(5789);
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