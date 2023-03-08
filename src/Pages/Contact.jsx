import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {MdDelete} from "react-icons/md"
import {CiEdit} from "react-icons/ci"
import { Link } from 'react-router-dom';

const Contact = () => {
    const [contacts, setContact] = useState([]);
    const getContacts = async () => {
        const { data } = await axios.get("http://localhost:3000/contacts");
        setContact(data)
        console.log(data);
    }
    const apiDeleteContact = async (id) => {
        const { data } = await axios.delete(`http://localhost:3000/contacts/${id}`);
        getContacts();
        console.log(data);
    }
    useEffect(() => {
        getContacts()
    },[])
    return (
      <>
        <Link to="/create">
          <button className="bg-gray-200 text-gray-700 font-semibold rounded-md shadow-lg  px-4 py-2 my-4">
            Create Contacts
          </button>
        </Link>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>

                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts?.map((contact) => (
                <tr
                  key={contact.id}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {contact.name}
                  </th>
                  <td className="px-6 py-4">{contact.email}</td>
                  <td className="px-6 py-4">{contact.phone}</td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <MdDelete
                        onClick={() => apiDeleteContact(contact.id)}
                        className="text-lg text-red-600"
                      />
                      <Link to={`/edit/${contact.id}`} >
                        <CiEdit className="text-lg text-green-700" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
}

export default Contact