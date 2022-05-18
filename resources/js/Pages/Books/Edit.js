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
        created_at: book.created_at || "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route("book.update", contact.id));
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
        <div>
            {/* <Helmet title={`${data.first_name} ${data.last_name}`} /> */}
            <h1 className="mb-8 text-3xl font-bold">
                <InertiaLink
                    // href={route("contacts")}
                    className="text-indigo-600 hover:text-indigo-700"
                >
                    Contacts
                </InertiaLink>
                <span className="mx-2 font-medium text-indigo-600">/</span>
                {data.name}
            </h1>
            {/* {contact.deleted_at && (
                // <TrashedMessage onRestore={restore}>
                //     This contact has been deleted.
                // </TrashedMessage>
            )} */}
            <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                        <TextInput
                            className="w-full pb-8 pr-6 lg:w-1/2"
                            label="First Name"
                            name="first_name"
                            errors={errors.name}
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        <TextInput
                            className="w-full pb-8 pr-6 lg:w-1/2"
                            label="Last Name"
                            name="last_name"
                            errors={errors.isbn}
                            value={data.isbn}
                            onChange={(e) => setData("isbn", e.target.value)}
                        />
                       

                    </div>
                    <div className="flex items-center px-8 py-4 bg-gray-100 border-t border-gray-200">
                        {/* {!contact.deleted_at && (
                            <DeleteButton onDelete={destroy}>
                                Delete Contact
                            </DeleteButton>
                        )} */}
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="ml-auto btn-indigo"
                        >
                            Update Contact
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Edit.layout = (page) => <Layout children={page} />;

export default Edit;
