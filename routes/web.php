<?php

use App\Http\Controllers\BooksController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//get all books
Route::get('/books', [\App\Http\Controllers\BooksController::class, 'index']);
//get a book using id
Route::get('/book/{id}', [\App\Http\Controllers\BooksController::class, 'book']);
//get all authors
Route::get('/authors', [\App\Http\Controllers\AuthorsController::class, 'index']);
//get an author using id
Route::get('/author/{id}', [\App\Http\Controllers\AuthorsController::class, 'author']);

//Create Author routes
Route::get('/create/author/', [\App\Http\Controllers\AuthorsController::class, 'create']);
Route::post('/create/author/', [\App\Http\Controllers\AuthorsController::class, 'save']);

//Create Book Routes
Route::get('/create/book/', [\App\Http\Controllers\BooksController::class, 'create']);
Route::post('/create/book/', [\App\Http\Controllers\BooksController::class, 'save']);

//Edit Book Routes
// routes/web.php

Route::get('/edit/book/{book}/', [BooksController::class, 'edit'])->name('book.edit');
Route::put('/edit/book/{book}/', [BooksController::class, 'update'])->name('book.update');
// Route::get('/edit/book/{book}/', [\App\Http\Controllers\BooksController::class, 'edit'])->name('books.edit'); 
// Route::put('/edit/book/{book}/', [\App\Http\Controllers\BooksController::class, 'update']); 


// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
