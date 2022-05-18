import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import Layout from "../../Layout";
import DeleteButton from "../../Layout/DeleteButton";
import LoadingButton from "../../Layout/LoadingButton";
import TextInput from "../../Layout/TextInput";

const Edit = () => {
    const { book} = usePage().props;
    const { data, setData, errors, put, processing } = useForm({
        name: book.name || "",
        isbn: book.isbn || "",
        author: book.author || "",
        created_at: book.created_at || "",
    });
    console.log(book);
    function handleSubmit(e) {
        e.preventDefault();
        put(route("book.update", book.id));
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
            <div class="card shadow mb-4">
                <div class="card-header">
                    <strong class="card-title">Viewing Book Details</strong>
                </div>
                <div class="card-body">
                    <form onSubmit={handleSubmit}>
                        {" "}
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <TextInput
                                    className="form-group"
                                    label="Book Title"
                                    name="name"
                                    errors={errors.name}
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />{" "}
                            </div>
                            <div class="form-group col-md-4">
                                <TextInput
                                    className="form-group"
                                    label="ISBN"
                                    name="isbn"
                                    errors={errors.isbn}
                                    value={data.isbn}
                                    onChange={(e) =>
                                        setData("isbn", e.target.value)
                                    }
                                />{" "}
                            </div>

                            <div class="form-group col-md-4">
                                <TextInput
                                    className="form-group"
                                    label="ISBN"
                                    name="isbn"
                                    errors={errors.isbn}
                                    value={data.isbn}
                                    onChange={(e) =>
                                        setData("isbn", e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div class="form-group col-md-4">
                            {/* <TextInput
                                className="form-group"
                                label="Author"
                                name="author"
                                errors={errors.author}
                                value={data.author[0].fname}
                                onChange={(e) =>
                                    setData("author", e.target.value)
                                }
                            /> */}
                            {data.author.map((author) => (
                                <div class="form-group">
                                    <div class="form-check">
                                        <label class="form-check-label" for="gridCheck1">
                                            {author.fname}
                                        </label>
                                    </div>
                                </div>
                            ))
                                }
                        </div>
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="ml-auto btn-indigo"
                        >
                            Update Book
                        </LoadingButton>
                    </form>
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
