import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import LoadingButton from "../../Layout/LoadingButton";

export default function Edit() {
    const [values, setValues, processing] = useState({
        title: "",
        isbn: "",
        author: "",
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
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <label htmlFor="isbn"> ISBN:</label>
                            <input
                                className="form-control"
                                id="isbn"
                                value={values.isbn}
                                onChange={handleChange}
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <label htmlFor="title"> Author:</label>

                            <select
                                className="form-control"
                                id="author"
                                value={values.isbn}
                                onChange={handleChange}
                            >
                                <option value="" aria-readonly>
                                    Select Author
                                </option>
                                <option value="1">Author 1</option>
                                <option value="2">Author 2</option>
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
