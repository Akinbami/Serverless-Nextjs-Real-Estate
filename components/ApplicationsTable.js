import React,  {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Collapse} from 'reactstrap';
import Head from 'next/head';
import DataTable from 'react-data-table-component';



const APPLICATION_API = "http://127.0.0.1:5559";
const ApplicationsTable = props => {
    const [collapsed, setCollapsed] = useState(true);

    const handleSelectedRows = (state) => {
        // You can use setState or dispatch with something like Redux so we can use the retrieved data
        console.log('Selected Rows: ', state.selectedRows);
      };

    const columns = [
        {
            name: 'Name',
            selector: 'fullname',
            sortable: true,
            cell: row => <p className="text-capitalized">{row.firstname} {row.lastname}</p>
        },
        {
          name: 'Email',
          selector: 'email',
          sortable: true,
          cell: row => <p><Link href={`/admin/occupants/${row._id}`}>
                            <a>{row.user?row.user.email: "admin"}</a>
                            </Link>
                        </p>
        },
        {
          name: 'Room Type',
          selector: 'room_type',
          sortable: true,
        },
        {
            name: 'Duration',
            selector: 'room_type_year',
            sortable: true,
            // cell: row => <p>{row.specialty?"YES":"NO"}</p>
        },
        {
            name: 'Room Number',
            selector: 'room_number',
            sortable: true,
            cell: row => <p>{row.room?row.room.number:"default"}</p>
        },
        {
            name: 'Payment Status',
            selector: 'payment_status',
            sortable: true,
            cell: row => <p>{row.paid?"True":"False"}</p>
        },
        {
            name: 'Payment Reference',
            selector: 'payment_reference',
            sortable: true,
        },
        {
            name: 'CreatedAt',
            selector: 'createdAt',
            sortable: true,
        },
      ];
	return (
    <React.Fragment>
        <DataTable title="All Occupants"
            columns={columns}
            data={props.applications}
            selectableRows // add for checkbox selection
            Clicked
            highlightOnHover
            striped
            onSelectedRowsChange={handleSelectedRows}
            pagination
        />

        {/* <table id="example" className="display table table-bordered" style={{ width:"100%"}}>
            <thead>
                <tr className="room-table-header">
                    <th>Email</th>
                    <th>Room Type</th>
                    <th>Duration</th>
                    <th>Room Number</th>
                    <th>Payment Status</th>
                    <th>Payment Reference</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                
                {props.applications.map((application,index)=>{
                    return (
                        <tr className="room-table-value">
                            <td>
                                <Link href={`/admin/occupants/${application._id}`}>
                                    <a>{application.user?application.user.email: "admin"}</a>
                                </Link>    
                            </td>
                            <td>{application.room_type}</td>
                            <td>{application.room_type_year}</td>
                            <td>{application.room?application.room.number:"default"}</td>
                            <td>{application.paid?"True":"False"}</td>
                            <td>{application.payment_reference}</td>
                            <td>{application.createdAt}</td>
                        </tr>
                    )
                    
                })}
                
            </tbody>
            
        </table> */}
    </React.Fragment>
)}

export default ApplicationsTable;