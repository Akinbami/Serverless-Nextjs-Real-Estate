import React,  {useState, useEffect, useContext, useRef, useCallback} from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Collapse} from 'reactstrap';
import DataTable from 'react-data-table-component';
import Head from 'next/head';
import { useRouter } from 'next/router';


// const APPLICATION_API = "http://127.0.0.1:5559";
const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

const columns = [
    {
      name: 'Title',
      selector: 'title',
      sortable: true,
      editable: true,
    },
    {
      name: 'Description',
      selector: 'description',
      sortable: true,
      editable: true,
    },{
        name: 'Category',
        selector: 'category',
        sortable: true,
        editable: true,
      },

    {
        name: 'Status',
        selector: 'resolved',
        sortable: true,
        editable: true,
        cell: row => <p className="mb-0">{row.resolved?<p className="support-ticket-completed">Completed</p>:<p className="support-ticket-in-progress">In progress</p>}</p>
    },
    
      {
        name: 'CreatedAt',
        selector: 'createdAt',
        sortable: true,
      }
  ];

const EditableCell = ({ row, index, column, col, onChange }) => {
    const [value, setValue] = useState(row[column.selector]);
  
    const handleOnChange = e => {
      setValue(e.target.value);
      onChange?.(e);
    };
  
    if (column?.editing) {
      return (
        <input
          type={column.type || 'text'}
          name={column.selector}
          style={{ width: '100%' }}
          onChange={handleOnChange}
          value={value}
        />
      );
    }
  
    if (col.cell) {
      return col.cell(row, index, column);
    }
    return row[column.selector];
};

const TicketsTable = props => {
    const [collapsed, setCollapsed] = useState(true);
    const [errorMessage, setErrorMessage]  = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const toggleNavbar = () => setCollapsed(!collapsed);
    const router = useRouter()

    
    const handleSelectedRows = (state) => {
        // You can use setState or dispatch with something like Redux so we can use the retrieved data
        console.log('Selected Rows: ', state.selectedRows);
    };

    const [innerData, setInnerData] = useState(props.tickets);
    const [editingId, setEditingId] = useState('');
    let formData = useRef({}).current;
    const isEditing = record => record._id === editingId;

    const token = props.token;

    const formOnChange = event => {
        const nam = event.target.name;
        const val = event.target.value;

        formData = {
        ...formData,
        [nam]: val,
        };
    };

    const edit = record => {
        setEditingId(record._id);
    };
    
    const cancel = () => {
        setEditingId('');
    };

    const save = item => {
        const payload = { ...item, ...formData };
        const tempData = [...innerData];
    
        
        const index = tempData.findIndex(item => editingId === item._id);
        if (index > -1) {
          
          const item = tempData[index];
          tempData.splice(index, 1, {
            ...item,
            ...payload,
          });
          setEditingId('');
          setInnerData(tempData);

          console.log("this is the temporary payload: ", payload)
          fetch(APPLICATION_API+ `/tickets/${payload._id}`, {
            method: 'PUT',
            headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  "authorization": 'Bearer ' + token
            }, 
            body: JSON.stringify(payload)
            })
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                setIsLoading(false);
                if(data.error){
                    setIsLoading(false);
                    setErrorMessage(data.message)
                }else{
                    // setUser(data.data)
                    setIsLoading(false)
                    router.reload(window.location.pathname)
                    // router.push(`/admin/occupants/${user.profile._id}`)
                }
            })
            .catch(error =>{
                setIsLoading(false)
                setErrorMessage(error.message)
            }) 
        }
    };

    const mergedColumns = columns.map(col => {
        if (!col.editable) {
          return col;
        }
        return {
          ...col,
          cell: (row, index, column) => {
            const editing = isEditing(row);
            return (
              <EditableCell
                row={row}
                index={index}
                column={{ ...column, editing }}
                col={col}
                onChange={formOnChange}
              />
            );
          },
        };
    });

    const createColumns = useCallback(() => {
        return [
          ...mergedColumns,
          {
            name: 'Actions',
            allowOverflow: true,
            minWidth: '200px',
            cell: row => {
              const editable = isEditing(row);
              if (editable) {
                return (
                  <div>
                    <button type="button" onClick={() => save(row)} style={{ backgroundColor: 'lightgreen' }}>save</button>
                    <button type="button" onClick={cancel} style={{ backgroundColor: 'orangered' }}>cancel</button>
                  </div>
                );
              }
              return <button type="button" onClick={() => edit(row)} className="btn btn-primary btn-room-edit">Edit</button>;
            },
          },
        ];
    }, [mergedColumns]);

    
	return (
    <React.Fragment>
        {errorMessage?<p className="text-danger">{errorMessage}</p>:""}

        {/* {!data || !data.data} */}
        <DataTable title="All Rooms"
            columns={createColumns()}
            data={innerData}
            selectableRows // add for checkbox selection
            Clicked
            highlightOnHover
            striped
            onSelectedRowsChange={handleSelectedRows}
            pagination
        />
        

    </React.Fragment>
)}


export default TicketsTable;