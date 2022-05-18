
// import React from "react";
 import React, { useState } from "react";

import { Inertia } from "@inertiajs/inertia";
    import {
        usePage,
        InertiaLink,
        useForm,
    } from "@inertiajs/inertia-react";


const Index = () => {
    const { books, authors } = usePage().props;
    const [data, setData] = useState(books);
    const [authors_data, setAuthor] = useState(authors);
    

    return (
        <div className="mt-20">
            <div class="row">
                <div class="col-md-7 mb-4">
                    <div class="card shadow">
                        <div class="card-header">
                            <strong class="card-title">Books</strong>
                        </div>
                        <div class="card-body">
                            <div class="list-group list-group-flush my-n3">
                                {data.map((book) => (
                                    <div
                                        class="list-group-item"
                                        key={"a_" + book.id}
                                    >
                                        {/* {book.author ? book.author[0].fname : ''} */}
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <span class="fe fe-book fe-24"></span>
                                            </div>
                                            <div class="col">
                                                <small>
                                                    <strong>{book.name}</strong>
                                                </small>
                                                <div class="my-0 text-muted small">
                                                    {book.isbn}
                                                </div>
                                            </div>

                                            <div class="col-auto">
                                                <InertiaLink
                                                    href={route(
                                                        "book.edit",
                                                        book.id
                                                    )}
                                                    className="text-indigo-600 hover:text-indigo-700"
                                                >
                                                    {" "}
                                                    <span class="badge badge-pill badge-primary">
                                                        View{" "}
                                                        <span class="fe fe-edit fe-12"></span>
                                                    </span>
                                                </InertiaLink>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {data.length === 0 && (
                                    <tr>
                                        <td
                                            className="px-6 py-4 border-t"
                                            colSpan="4"
                                        >
                                            No Books found.
                                        </td>
                                    </tr>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 mb-4">
                    <div class="card timeline">
                        <div class="card-header">
                            <strong class="card-title">Authors</strong>
                        </div>
                        <div class="card-body">
                            <div class="list-group list-group-flush my-n3">
                                {authors_data.map((author) => (
                                    <div class="list-group-item">
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <span class="fe fe-users fe-24"></span>
                                            </div>
                                            <div class="col">
                                                <small>
                                                    <strong>
                                                        {author.fname}{" "}
                                                        {author.lname}
                                                    </strong>
                                                </small>
                                                {/* <div class="my-0 text-muted small">
                                                    {author.bio}
                                                </div> */}
                                            </div>
                                            <div class="col-auto">
                                                <InertiaLink
                                                    href={route(
                                                        "author.edit",
                                                        author.id
                                                    )}
                                                    className="text-indigo-600 hover:text-indigo-700"
                                                >
                                                    {" "}
                                                    <span class="badge badge-pill badge-success">
                                                        View{" "}
                                                        <span class="fe fe-edit fe-12"></span>
                                                    </span>
                                                </InertiaLink>{" "}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {data.length === 0 && (
                                    <tr>
                                        <td
                                            className="px-6 py-4 border-t"
                                            colSpan="4"
                                        >
                                            No Authors found.
                                        </td>
                                    </tr>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
