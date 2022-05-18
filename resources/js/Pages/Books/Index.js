
// import React from "react";
 import React, { useState } from "react";

import { Inertia } from "@inertiajs/inertia";
    import {
        usePage,
        InertiaLink,
        useForm,
    } from "@inertiajs/inertia-react";


const Index = () => {
    const { books } = usePage().props;
    const [data, setData] = useState(books);
    


    return (
        <div className="mt-20">
            <div className="container flex flex-col justify-center mx-auto">
                <div>
                    <h1 className="mb-8 text-3xl font-bold">
                        {/* <InertiaLink
                            href={route("posts.index")}
                            className="text-indigo-600 hover:text-indigo-700"
                        >
                            Posts
                        </InertiaLink> */}
                        <span className="font-medium text-indigo-600"> / </span>
                        Create
                    </h1>
                </div>
            </div>

            <div>
                <h1 className="mb-8 text-3xl font-bold">Contacts</h1>
                <div className="flex items-center justify-between mb-6"></div>
                <div className="overflow-x-auto bg-white rounded shadow">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">Name</th>
                                <th className="px-6 pt-5 pb-4">ISBN</th>
                                <th className="px-6 pt-5 pb-4">Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((book) => (
                                <tr
                                    key={book.id}
                                    className="odd:bg-gray-100 even:bg-white"
                                >
                                    <td className="border px-6 py-4">
                                        <InertiaLink
                                            tabIndex="-1"
                                            href={route("books.edit", book.id)}
                                            className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                        >
                                            {book.name}
                                        </InertiaLink>
                                    </td>
                                </tr>
                            ))}
                            {data.length === 0 && (
                                <tr>
                                    <td
                                        className="px-6 py-4 border-t"
                                        colSpan="4"
                                    >
                                        No contacts found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Index;
