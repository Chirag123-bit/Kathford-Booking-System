import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { config } from '../../Constants/const'
import { toast } from 'react-toastify'
import { Button, Modal } from 'react-bootstrap'

const Booking = () => {

    const [show, setShow] = useState(false)
    const statuses = ["Booked", "Under-Review", "Checked In", "Checked Out", "Canceled"]

    const hideModal = () => {
        setShow(false)
    }
    const showModal = () => setShow(true)


    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getBookings()
    }, [])

    const getBookings = async () => {
        const { data } = await axios.get("/api/book/all", config)
        if (!data.success) {
            toast.error("Some Error Occured")
        }
        setBookings(data.data)
        setLoading(false)
    }

    const handleUpdateForm = async () => {
        const { data } = await axios.patch("/api/book/", { id, status }, config)
        if (data.success) {
            getBookings()
            toast.success("Details Updated Successfully")
            hideModal()
        }
        else {
            toast.error("Some Error Occured")
        }
    }

    const [id, setId] = useState("")
    const [status, setStatus] = useState("")


    const updateBooking = async (i) => {
        setId(i._id)
        setStatus(i.status)
        showModal()
    }

    return (
        <div>
            <h4 className='text-center my-4'>Bookings of <span className='colored-text'>MiCasa</span></h4>

            <table className="table table-dark  table-striped">
                <thead>
                    <tr>
                        <th scope="col">Username</th>
                        <th scope="col" >Room</th>
                        <th scope="col">Check In</th>
                        <th scope="col">Check Out</th>
                        <th scope="col">Status</th>
                        <th scope="col" className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ? (
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        ) : (
                            bookings.map((i) => {
                                i.checkin = new Date(i.checkin).toLocaleDateString()
                                i.checkout = new Date(i.checkout).toLocaleDateString()
                                return <tr>
                                    <td>{i.user.username}</td>
                                    <td>{i.accomodation.name}</td>
                                    <td>{i.checkin}</td>
                                    <td>{i.checkout}</td>
                                    <td

                                    >{i.status}</td>
                                    <td className='text-center'>
                                        <button className='btn btn-success btn-sm mx-2' onClick={() => updateBooking(i)}>Update</button>
                                        <button className='btn btn-danger btn-sm'>Delete</button>
                                    </td>

                                </tr>
                            })
                        )
                    }

                </tbody>
            </table>

            <Modal
                show={show}
                onHide={hideModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Booking</Modal.Title>
                </Modal.Header>
                <form method="post" enctype='multipart/form-data'>
                    <Modal.Body>
                        <div className="inp-container d-flex align-items-center justify-content-center">
                            <label htmlFor="status" style={{ width: "40%" }} >Status</label>
                            <select name="status" id="status" className='form-control' onChange={(e) => setStatus(e.target.value)} value={status}>
                                {statuses.map((i) => {

                                    return <option value={i}>{i}</option>
                                })}
                            </select>
                        </div>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={hideModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleUpdateForm}>Update</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>


    )
}

export default Booking