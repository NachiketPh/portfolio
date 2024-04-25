import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import Alert from "./Alert";
import { addDoc, collection } from "firebase/firestore";
import {db} from "../config/firebase.config"

const Contact = () => {
  const [data, setData] = useState({
    fristName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [alert ,setAlert] = useState({
    isAlert  : false,
    message : "",
    status : null
   });
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    // update the state acco
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const sendMessage = async () => {
    if (data.email === "" || data.email === null) {
        // throw an error
        setAlert({
            isAlert: true,
            message: "Required fields cannot be empty",
            status: "warning"
        });
        setTimeout(() => {
            setAlert({
                isAlert: false,
                message: "",
                status: null
            });
        }, 4000);
    } else {
        await addDoc(collection(db, "messages"), { ...data })
            .then(() => {
                //throw an alert message
                setData({ fristName: "", lastName: "", email: "", message: "" });
                setAlert({
                    isAlert: true,
                    message: "Thanks for contacting me",
                    status: "success"
                });
                setTimeout(() => {
                    setAlert({
                        isAlert: false,
                        message: "",
                        status: null
                    });
                }, 4000);
            })
            .catch(err => {
                // throw an alert
                setAlert({
                    isAlert: true,
                    message: `Error : ${err.message}`,
                    status: "danger"
                });
                setTimeout(() => {
                    setAlert({
                        isAlert: false,
                        message: "",
                        status: null
                    });
                }, 4000);
            });
    }
};

  return (
    <section
      id="contact"
      className="flex items-center justify-center flex-col gap-12 my-12"
    >
      <AnimatePresence>
        {alert.isAlert && (
          <Alert status={alert.status} message={alert.message} />
        )}
      </AnimatePresence>
      <div className="w-full flex items-center justify-center py-12">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52 "
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text  bg-gradient-to-r from-primary to-secondary">
            Contact Me
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      <div className="w-full flex flex-col items-center justify-start gap-4">
        <div className="w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              value={data.fristName}
              onChange={handleTextChange}
              name="fristName"
              placeholder="Frist Name"
              className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white"
            />
            <input
              type="text"
              value={data.lastName}
              onChange={handleTextChange}
              name="lastName"
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white"
            />
          </div>

          <input
            type="email"
            value={data.email}
            onChange={handleTextChange}
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white"
          />
          <textarea
            name="message"
            value={data.message}
            onChange={handleTextChange}
            id=""
            cols="0"
            rows="10"
            placeholder="Message Here.."
            className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-white"
          ></textarea>

          <div className="w-full flex items-center justify-center lg:justify-end ">
            <button className="px-12 py-3 bg-gradient-to-br from-primary to-secondary rounded-md w-full lg:w-auto hover:bg-gradient-to-br hover:from-black hover:to-black hover:border hover:border-primary hover:text-primary duration-200" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;