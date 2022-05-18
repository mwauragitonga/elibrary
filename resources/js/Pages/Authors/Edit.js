import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import Layout from "../../Layout";
import DeleteButton from "../../Layout/DeleteButton";
import LoadingButton from "../../Layout/LoadingButton";
import TextInput from "../../Layout/TextInput";

const Edit = () => {
    const { author } = usePage().props;
    console.log(author);
    const { data, setData, errors, put, processing } = useForm({
        fname: author.fname || "",
        lname: author.lname || "",
        bio: author.bio || "",
        book: author.book || "",
        created_at: author.created_at || "",
    });
    // console.log(book);
    function handleSubmit(e) {
        e.preventDefault();
        put(route("author.update", author.id));
    }

    function destroy() {
        if (confirm("Are you sure you want to delete this contact?")) {
            // Inertia.delete(route("contacts.destroy", contact.id));
        }
    }

    function restore() {
        if (confirm("Are you sure you want to restore this contact?")) {
            // Inertia.put(route("contacts.restore", contact.id));
        }
    }

    return (
        <div className="mt-20">
            <h2 class="h3 mb-4 page-title">Author Info</h2>
            <div class="card shadow mb-4">
                <div class="card-header">
                    <strong class="card-title">Viewing Author Details</strong>
                </div>
                <div class="card-body">
                         <form onSubmit={handleSubmit}>
                    <div class="row mt-5 align-items-center">
                        <div class="col-md-3 text-center mb-5">
                            <div class="avatar avatar-xl">
                                <img
                                    src={"../../../images/" + author.image}
                                    alt="..."
                                    class="avatar-img rounded-circle"
                                />
                            </div>
                        </div>
                        <div class="col">
                            <div class="row align-items-center">
                                <div class="col-md-7">
                                    <h4 class="mb-1">
                                        {data.fname}, {data.lname}
                                    </h4>
                                    <p class="small mb-3">
                                        <span class="badge badge-dark">
                                            {data.book.map(
                                                (book) => book.name + " "
                                            )}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="form-group col-md-4">
                                    <TextInput
                                        className="form-group"
                                        label="First Name"
                                        name="fname"
                                        errors={errors.fname}
                                        value={data.fname}
                                        onChange={(e) =>
                                            setData("fname", e.target.value)
                                        }
                                    />{" "}
                                </div>
                                <div class="form-group col-md-4">
                                    <TextInput
                                        className="form-group"
                                        label="Last Name"
                                        name="lname"
                                        errors={errors.lname}
                                        value={data.lname}
                                        onChange={(e) =>
                                            setData("lname", e.target.value)
                                        }
                                    />{" "}
                                </div>
                            </div>
                            <div class="row">
                                <label for="bio">
                                    Bio
                                </label>

                                <div class="form-group col-md-8">
                                    <textarea
                                        className="form-group"
                                        label="Bio"
                                        name="bio"
                                        rows={10}
                                        cols={70}
                                        errors={errors.bio}
                                        value={data.bio}
                                        onChange={(e) =>
                                            setData("bio", e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <LoadingButton
                                loading={processing}
                                type="submit"
                                className="ml-auto btn-indigo"
                            >
                                Update Author Details
                                </LoadingButton>
                                
                            </div>
                            
                        </div>
                        </form>
                    {/* <form onSubmit={handleSubmit}> */}
                        {" "}
                        {/* <div class="form-row">
                            <div class="form-group col-md-4">
                                <TextInput
                                    className="form-group"
                                    label="First Name"
                                    name="fname"
                                    errors={errors.fname}
                                    value={data.fname}
                                    onChange={(e) =>
                                        setData("fname", e.target.value)
                                    }
                                />{" "}
                            </div>
                            <div class="form-group col-md-4">
                                <TextInput
                                    className="form-group"
                                    label="Last Name"
                                    name="lname"
                                    errors={errors.lname}
                                    value={data.lname}
                                    onChange={(e) =>
                                        setData("isbn", e.target.value)
                                    }
                                />{" "}
                            </div>
                        </div>
                        <div class="form-row">
                            <label for="bio">
                                <strong>Bio</strong>
                            </label>

                            <div class="form-group col-md-8">
                                <textarea
                                    className="form-group"
                                    label="Bio"
                                    name="bio"
                                    rows={5}
                                    cols={90}
                                    errors={errors.bio}
                                    value={data.bio}
                                    onChange={(e) =>
                                        setData("bio", e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div class="form-group col-md-4">

                            {data.book.map((book) => (
                                <div class="form-group">
                                    <div class="form-check">
                                        <label
                                            class="form-check-label"
                                            for="gridCheck1"
                                        >
                                            {book.name}
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                    {/* </form> */}
                </div>
            </div>

            <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
                {/* <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                        <TextInput
                            className="w-full pb-8 pr-6 lg:w-1/2"
                            label="Title"
                            name="name"
                            errors={errors.name}
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        <TextInput
                            className="w-full pb-8 pr-6 lg:w-1/2"
                            label="ISBN"
                            name="isbn"
                            errors={errors.isbn}
                            value={data.isbn}
                            onChange={(e) => setData("isbn", e.target.value)}
                        />
                    </div>
                    <div className="flex items-center px-8 py-4 bg-gray-100 border-t border-gray-200">
 
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="ml-auto btn-indigo"
                        >
                            Update Contact
                        </LoadingButton>
                    </div>
                </form> */}
            </div>
        </div>
    );
};

Edit.layout = (page) => <Layout children={page} />;

export default Edit;
