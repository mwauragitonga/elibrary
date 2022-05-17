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

        return view('addBook');

    }
    public function edit( $book){
            //edit book form

            $book = Books::find($book);
            return view('editBook', [
                'book' => $book,
            ]);
        }

    public function save(Request $request){
        // insert new book

        $newBook = Books::create([
            'name' => $request->title,
            'isbn' => $request->isbn,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);

        return redirect('book/' . $newBook->id);
    }
    public function update(Request $request, Books $book)
    {
        //save the edited book details
        $book->update([
            'name' => $request->title,
            'isbn' => $request->isbn,
            'updated_at' => date('Y-m-d H:i:s'),

        ]);

        return redirect('book/' . $book->id);
    }
}
