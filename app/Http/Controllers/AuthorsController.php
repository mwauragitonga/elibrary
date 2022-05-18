<?php

namespace App\Http\Controllers;

use App\Models\Authors;
use App\Models\Books;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AuthorsController extends Controller
{
    //

    public function index()
    {
        //get all Authors
        $books = Books::with('author')->get();
        $authors = Authors::with('book')->get();

        return Inertia::render('Authors/Index', [
            'books' =>
            $books,
            'authors' =>
            $authors,
        ]);
    }

    public function author($author)
    {

        //Fetch Author details using id
        $authorDetails =
        Authors::find($author);
        return $authorDetails;
    }

    public function edit($author)
    {
        //edit book form
        $author = Authors::with('book')->findOrfail($author);
        return Inertia::render('Authors/Edit', [
            'author' => $author,
        ]);
    }

    public function update(Request $request, Authors $author)
    {

        $author->update([
            'fname' => $request->fname,
            'lname' => $request->lname,
            'bio' => $request->bio,
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
        return Redirect::back()->with('success', 'Author Details updated.');
    }
}
