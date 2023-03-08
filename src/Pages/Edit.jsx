import React, { useEffect, useState } from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'
import {AiFillPhone} from 'react-icons/ai'
import axios from 'axios';

const Edit = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const getSingleContact = async () => {
    const { data } = await axios.get(`http://localhost:3000/contacts/${id}`);
    console.log(data);
    setName(data.name);//original value
    setEmail(data.email);
    setPhone(data.phone);
  }
  useEffect(() => {
    getSingleContact();
  }, [])
  const apiUpdateContact = async (contact)=>{
    const { data } = await axios.patch(
      `http://localhost:3000/contacts/${id}`,
      contact
    );
    console.log(data);
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const contact = { name, email, phone };
    apiUpdateContact(contact);
    navigate('/')
  }
  return (
    <form
      onSubmit={onSubmitHandler}
      className="w-96 container mx-auto my-10 rounded-mdborder p-5 shadow-lg "
    >
      <h1 className="mb-3 text-center text-lg tracking-wide font-medium text-gray-900">
        Update Contacts
      </h1>
      <div className="mb-3">
        <label
          htmlFor="website-admin"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            @
          </span>
          <input
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="website-admin"
            className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="elonmusk"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="input-group-1"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Email
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input
            type="text"
            id="input-group-1"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="input-group-1"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Phone Number
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            
            <AiFillPhone className="text-gray-500" />
          </div>
          <input
            defaultValue={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="0945xxxxxxx"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-green-700 transform transition-all hover:scale-105 hover:shadow-lg text-gray-50 mr-4 px-5 py-1 tracking-wider rounded-md"
      >
        Update
      </button>
      <Link to="/">
        <button
          type="button"
          className="bg-red-600 transform transition-all hover:scale-105 hover:shadow-lg text-gray-50 px-5 py-1 tracking-wider rounded-md"
        >
          Cancel
        </button>
      </Link>
    </form>
  );
}

export default Edit