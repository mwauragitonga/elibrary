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
        return view('books', [
            'books' => $books,
        ]);

    }
    
    public function book($book){
        //get a book using id
        $bookDetails =
        Books::find($book);

       
        return view('book', [
            'book' => $bookDetails,
        ]);

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
