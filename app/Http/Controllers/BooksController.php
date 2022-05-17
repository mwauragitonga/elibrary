<?php

namespace App\Http\Controllers;

use App\Models\Books;
use Illuminate\Http\Request;

class BooksController extends Controller
{
    //
    public function index(){
        //get all books
        $books = Books::all(); 
        return $books; //returns the fetched post
    }
    
    public function book($book){

        $bookDetails =
        Books::find($book);

        //get a book using id
        return $bookDetails; 

    }
    public function create(){
        //create new book form
    }
    public function edit(Books $book){
            //edit book form
        }

    public function save(){
        // insert new book

    }
    public function update(Request $request, Books $book)
    {
        //save the edited book details
    }
}
