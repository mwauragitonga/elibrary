import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import LoadingButton from "../../Layout/LoadingButton";

export default function Create() {
    const [values, setValues, processing, progress] = useState({
        fname: "",
        lname: "",
        bio: "",
        avatar: "",
    });
    const [status , setStatus] = useState({success: false});

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
        Inertia.post("/create/author", values, {
            onSuccess: (message) => {
                setStatus({ success: true });
                console.log(fname);
            },
            onFinish: (res) => {
                console.log($page.props.flash.message);
                // console.log($page.message);
                 setStatus({ success: true });
                 console.log(status);
            }
        });
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
                        <div class="form-group col-md-6">
                            <label htmlFor="avatar"> Avatar:</label>
                            <input
                                className="form-control"
                                type="file"
                                onChange={(e) =>
                                    setValues((values) => ({
                                        ...values,
                                        avatar: e.target.files[0],
                                    }))
                                }
                            />
                            {progress && (
                                <progress value={progress.percentage} max="100">
                                    {progress.percentage}%
                                </progress>
                            )}
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
