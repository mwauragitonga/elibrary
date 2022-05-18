import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import LoadingButton from "../../Layout/LoadingButton";

export default function Edit() {
    const [values, setValues, processing] = useState({
        fname: "",
        lname: "",
        bio: "",
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
        Inertia.post("/create/author", values);
    }

    return (
        <div className="mt-20">
            <div class="card shadow mb-4">
                <div class="card-header">
                    <strong class="card-title">Add New Author</strong>
                </div>
                <div class="card-body">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group col-md-6">
                            <label htmlFor="fname"> First Name:</label>
                            <input
                                className="form-control"
                                id="fname"
                                value={values.fname}
                                onChange={handleChange}
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <label htmlFor="lname"> Last Name:</label>
                            <input
                                className="form-control"
                                id="lname"
                                value={values.lname}
                                onChange={handleChange}
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <label htmlFor="title"> Bio:</label>
                            <textarea
                                className="form-group"
                                label="Bio"
                                name="bio"
                                id="bio"
                                rows={5}
                                cols={70}
                                value={values.bio}
                                onChange={handleChange}
                            />
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
