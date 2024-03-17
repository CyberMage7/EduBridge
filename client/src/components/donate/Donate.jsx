import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import {Link , useNavigate} from "react-router-dom";
import Footer from "../footer/Footer";
import './donate.css';

function DonateBookForm() {
    const [Fname, setFname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [title, setTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/donate", {
                Fname, email, phone, title, bookAuthor, quantity, category, description
            });
            console.log(response.data); 
            setFname('');
            setEmail('');
            setPhone('');
            setTitle('');
            setBookAuthor('');
            setQuantity('');
            setCategory('');
            setDescription('');

            if (response.status === 200) {
                navigate("/"); 
            } else {
                navigate("/donate"); 
            }
            
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="body-donate">
                <form onSubmit={handleSubmit}>
                    <h1 className="section-p1 color-h h1-donate">Donate Book</h1>
                    <div className="container-donate flex">
                        <div className="professional">
                            <h2 className="color-h">Information</h2>

                            <div className="name">
                                <label className="label-donate" htmlFor="Fname">Full Name:</label>
                                <input className="input-donate" type="text" id="Fname" name="Fname" value={Fname} onChange={(e) => setFname(e.target.value)} autoComplete='off'required />
                            </div>

                            <div className="email">
                                <label className="label-donate" htmlFor="email">Email:</label>
                                <input className="input-donate" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='off' required />
                            </div>

                            <div className="phone_number">
                                <label className="label-donate" htmlFor="phone_number">Phone Number:</label>
                                <input className="input-donate" type="number" id="phone_number" name="phone_number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                            </div>

                            <div className="title_book">
                                <label className="label-donate" htmlFor="title_book">Title of Book:</label>
                                <input className="input-donate" type="text" id="title_book" name="title_book" value={title} onChange={(e) => setTitle(e.target.value)} autoComplete='off' required />
                            </div>

                            <div className="book_author">
                                <label className="label-donate" htmlFor="book_author">Author of Book:</label>
                                <input className="input-donate" type="text" id="book_author" name="book_author" value={bookAuthor} onChange={(e) => setBookAuthor(e.target.value)} autoComplete='off' required />
                            </div>

                            <div className="quantity_book">
                                <label className="label-donate" htmlFor="quantity_book">Quantity of Book:</label>
                                <input className="input-donate" type="number" id="quantity_book" name="quantity_book" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                            </div>

                            <div className="genre">
                                <label className="label-donate" htmlFor="categories">Genre:</label>
                                <select className="select-donate" id="categories" name="categories" value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option>(Select any one)</option>
                                    <option value="Fiction">Fiction</option>
                                    <option value="Non-Fiction">Non-Fiction</option>
                                    <option value="Romance">Romance</option>
                                    <option value="Science">Science</option>
                                    <option value="Business">Business</option>
                                    <option value="Art">Art</option>
                                    <option value="Religion">Religion</option>
                                    <option value="Poetry">Poetry</option>
                                </select>
                            </div>

                            <div className="section-donate">
                                <label className="label-donate" htmlFor="product-description">Book Descriptions:</label>
                                <textarea id="product-description" name="product_description" value={description} onChange={(e) => setDescription(e.target.value)} rows="4" required />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="button-donate section-m2" name="submit">Submit</button>
                </form>
            </div>
            <Footer/>
        </>
    );
}

export default DonateBookForm;
