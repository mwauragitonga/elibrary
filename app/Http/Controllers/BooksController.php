<?php

namespace App\Http\Controllers;

use App\Models\Books;
use App\Models\Authors;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class BooksController extends Controller
{
    //
    public function index(){
        //get all books
        $books = Books::with('author')->get();
        $authors = Authors::with('book')->get();
            
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
        Books::with('author')->find($book);
        Log::info('$bookDetails');
        return Inertia::render('Books/Edit', [
            'book' => $bookDetails,
        ]);
    }
    public function create(){
        //create new book form
        return Inertia::render('Books/Create');
    }
    public function edit( $book){
        //edit book form
        $book = Books::with('author')->findOrfail($book);
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
        if($newBook){
            return Redirect::back()->with('success', 'Book added.');
        }
    }
    public function update(Request $request, Books $book)
    {
        //save the edited book details
        $book->update([
            'name' => $request->name,
            'isbn' => $request->isbn,
            'updated_at' => date('Y-m-d H:i:s'),

        ]);
        return Redirect::back()->with('success', 'Book updated.');

    }
}
