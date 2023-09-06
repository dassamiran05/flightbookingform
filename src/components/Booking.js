import React, { useEffect, useState } from "react";
import frame from "../assets/img/icons/Frame.svg";
import vector from "../assets/img/icons/Vector (1).svg";
import vector3 from "../assets/img/icons/Vector (3).svg";
import { useDispatch, useSelector } from "react-redux";
import { dataadd, datadelete } from "../redux/booking/bookingAction";

const Booking = () => {
  let formdata = { from: "", to: "", date: "", guests: "", ticketClass: "" };
  const [formvalues, setFormvalues] = useState(formdata);
  const [errorval, setErrorVal] = useState({});
  // const [resData, setResData] = useState([]);

  const dispatch = useDispatch();

  const data = useSelector((state) => state.values);
  console.log(data);

  // useEffect(() => {
  //   if (data && data.length > 0) {
  //     setResData(data);
  //   }
  // }, [data]);

  const submitForm = (e) => {
    e.preventDefault();

    const error = validation(formvalues);
    setErrorVal(error);

    if (Object.keys(error).length === 0) {
      dispatch(dataadd(formvalues));
    }
  };

  const validation = (value) => {
    let error = {};
    for (const item in value) {
      if (value[item] === "") {
        error[item] = `${item} should not be empty`;
      }
    }
    return error;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormvalues({ ...formvalues, [name]: value });
  };

  // const handleDelete = (id) => {
  //   const selectedData = data.find((item) => item.id === id);
  //   console.log(typeof selectedData.id);
  //   if (selectedData) {
  //     dispatch(datadelete(id));
  //   }
  // };
  return (
    <>
      <section>
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
          <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form className="first-hero lws-inputform" onSubmit={submitForm}>
              <div className="des-from">
                <p>Destination From</p>
                <div className="flex flex-row">
                  <img src={frame} alt />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="from"
                    id="lws-from"
                    value={formvalues?.destFrom}
                    onChange={handleInputChange}
                  >
                    <option value hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
                {errorval.from && (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {errorval?.from}
                  </p>
                )}
              </div>
              <div className="des-from">
                <p>Destination To</p>
                <div className="flex flex-row">
                  <img src={frame} alt />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="to"
                    id="lws-to"
                    value={formvalues?.destTo}
                    onChange={handleInputChange}
                  >
                    <option value hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
                {errorval.to && (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {errorval?.to}
                  </p>
                )}
              </div>
              <div className="des-from">
                <p>Journey Date</p>
                <input
                  type="date"
                  className="outline-none px-2 py-2 w-full date"
                  name="date"
                  id="lws-date"
                  value={formvalues?.date}
                  onChange={handleInputChange}
                />
                {errorval.date && (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {errorval?.date}
                  </p>
                )}
              </div>
              <div className="des-from">
                <p>Guests</p>
                <div className="flex flex-row">
                  <img src={vector} alt />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="guests"
                    id="lws-guests"
                    value={formvalues?.guest}
                    onChange={handleInputChange}
                  >
                    <option value hidden>
                      Please Select
                    </option>
                    <option value={1}>1 Person</option>
                    <option value={2}>2 Persons</option>
                    <option value={3}>3 Persons</option>
                    <option value={4}>4 Persons</option>
                  </select>
                </div>
                {errorval.guests && (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {errorval?.guests}
                  </p>
                )}
              </div>
              <div className="des-from !border-r-0">
                <p>Class</p>
                <div className="flex flex-row">
                  <img src={vector3} alt />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="ticketClass"
                    id="lws-ticketClass"
                    value={formvalues?.ticketClass}
                    onChange={handleInputChange}
                  >
                    <option value hidden>
                      Please Select
                    </option>
                    <option>Business</option>
                    <option>Economy</option>
                  </select>
                </div>
                {errorval.ticketClass && (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {errorval?.ticketClass}
                  </p>
                )}
              </div>
              <button className="addCity" type="submit" id="lws-addCity">
                <svg
                  width="15px"
                  height="15px"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span className="text-sm">Book</span>
              </button>
            </form>
          </div>
        </div>
        {data?.length > 0 && (
          <>
            <div className="table-container">
              <table className="booking-table">
                <thead className="bg-gray-100/50">
                  <tr className="text-black text-left">
                    <th>Destination From</th>
                    <th>Destination To</th>
                    <th className="text-center">Journey Date</th>
                    <th className="text-center">Guests</th>
                    <th className="text-center">Class</th>
                    <th className="text-center">Delete</th>
                  </tr>
                </thead>
                <tbody
                  className="divide-y divide-gray-300/20"
                  id="lws-previewBooked"
                >
                  {data?.map((data, index) => {
                    return (
                      <>
                        <tr
                          className="lws-bookedTable text-black"
                          key={index + 1}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <p className="lws-bookedFrom">{data?.from}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <p className="lws-bookedTo">{data?.to}</p>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <p className="lws-bookedDate">{data?.date}</p>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <p className="lws-bookedGustes">{data?.guests}</p>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="lws-bookedClass">
                              {" "}
                              {data?.ticketClass}{" "}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <div className="flex justify-center gap-4">
                              <button
                                className="lws-remove"
                                onClick={() => dispatch(datadelete(data?.id))}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Booking;
