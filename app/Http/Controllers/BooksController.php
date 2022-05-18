<?php

namespace App\Http\Controllers;

use App\Models\Books;
use App\Models\Authors;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class BooksController extends Controller
{
    //
    public function index(){
        //get all books
        $books = Books::with('author')->get();
        $authors = Authors::with('books')->get();
       
       // dd($books);
        
        return Inertia::render('Books/Index', [
            'books' =>
            $books, 
            'authors' =>
            $authors,
        ]);

    }
    public function book($book){
        //get a book using id
        $bookDetails =
        Books::find($book);



        return Inertia::render('Books/Edit', [
            'book' => $bookDetails,

        ]);
    }
    public function create(){
        //create new book form

        return view('addBook');

    }
    public function edit( $book){
        //edit book form
        $book = Books::findOrfail($book);
        return Inertia::render('Books/Edit', [
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
       // var_dump($request);
        $book->update([
            'name' => $request->name,
            'isbn' => $request->isbn,
            'updated_at' => date('Y-m-d H:i:s'),

        ]);

        // return redirect('book/' . $book->id);
        return Redirect::back()->with('success', 'Book updated.');

    }
}
