import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import LoadingButton from "../../Layout/LoadingButton";
import Avatar from "../../../images/face-3.jpg";

import {  usePage } from "@inertiajs/inertia-react";

export default function Create() {
     const { authors, flash_data } = usePage().props;
    console.log(authors);
        const [flash, setFlash] = useState(flash_data);

    const [values, setValues, processing] = useState({
        title: "",
        isbn: "",
        author: "",
        flash: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        Inertia.post("/create/book", values);
    }

    return (
        <div className="mt-20">
            {/* {
                flash.message && (
                <div
                    class="alert alert-warning alert-dismissible fade show"
                    role="alert"
                >
                    <strong>Holy guacamole!{flash.message} </strong> You should
                    check in on some of those fields below.{" "}
                    <button
                        type="button"
                        class="close"
                        data-dismiss="alert"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
            )} */}

            <div class="card shadow mb-4">
                <div class="card-header">
                    <strong class="card-title">Add Book to eShelf</strong>
                </div>
                <div class="card-body">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group col-md-6">
                            <label htmlFor="title"> Book Title:</label>
                            <input
                                className="form-control"
                                id="title"
                                value={values.title}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <label htmlFor="isbn"> ISBN:</label>
                            <input
                                className="form-control"
                                id="isbn"
                                value={values.isbn}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <label htmlFor="title"> Author:</label>

                            <select
                                className="form-control"
                                name="author"
                                id="author"
                                onChange={(e) =>
                                    (onChange = { handleChange }(e))
                                }
                                value={values.author}
                                required
                            >
                                <option value="" aria-readonly>
                                    Select Author
                                </option>
                                {authors.map((author, key) => (
                                    <option key={key} value={author.id}>
                                        {author.fname}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="ml-auto btn-indigo"
                        >
                            Submit
                        </LoadingButton>{" "}
                    </form>
                </div>
            </div>
        </div>
    );
}
