<?php

namespace App\Http\Controllers;

use App\Models\Authors;
use Illuminate\Http\Request;

class AuthorsController extends Controller
{
    //

    public function index()
    {
        //get all Authors
        $Authors = Authors::all(); 
        return $Authors; //returns the fetched post
    }

    public function book($book)
    {

        $bookDetails =
        Authors::find($book);

        //get a book using id
        return $bookDetails;
    }
}
