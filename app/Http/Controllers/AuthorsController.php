<?php

namespace App\Http\Controllers;

use App\Models\Authors;
use App\Models\Books;
use Facade\FlareClient\Stacktrace\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

// use Illuminate\Support\Facades\File;

class AuthorsController extends Controller
{
    //

    public function index()
    {
        //get all Authors
        $books = Books::with('author')->get();
        $authors = Authors::with('book')->get();

       // dd($authors);
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
        return Redirect::back()->with('message', 'Author Details updated.');
    }
    public function create()
    {
        //create new auhtor form
        return Inertia::render('Authors/Create');
    }
    public function save(Request $request)
    {
        $avatar = $request->file('avatar');
        
        $rand =
        rand(0, 9999);
         // dd($rand);
        $image_name = $rand ."_" . $avatar->getClientOriginalName();
        $extension = $avatar->getClientOriginalExtension();

     
        $path = Storage::putFileAs('public/images', $avatar, $image_name);

        // insert new auhtor
        if  ($path){
            $newAuthor = Authors::create([
                'fname' => $request->fname,
                'lname' => $request->lname,
                'bio' => $request->bio,
                'image' => $image_name,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);
            if ($newAuthor) {
                // return response()->json(['message', 'Author added.'], 201);
                return Redirect::back()->with(['message' => 'Author added.']);
            }
        }
        
    }
}
