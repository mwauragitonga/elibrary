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

    public function author($author)
    {

        //Fetch Author details using id
        $authorDetails =
        Authors::find($author);
        return $authorDetails;
    }
}
