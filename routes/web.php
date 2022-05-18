<?php

use App\Http\Controllers\BooksController;
use App\Http\Controllers\AuthorsController;
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

Route::get('/', [BooksController::class, 'index']);

//get all books
Route::get('/books', [BooksController::class, 'index']);
//get a book using id
Route::get('/book/{id}', [BooksController::class, 'book']);
//get all authors
Route::get('/authors', [AuthorsController::class, 'index']);
//get an author using id
Route::get('/author/{id}', [AuthorsController::class, 'author']);

//Create Author routes
Route::get('/create/author/', [AuthorsController::class, 'create']);
Route::post('/create/author/', [AuthorsController::class, 'save'])->name('author.create');

//Create Book Routes
Route::get('/create/book/', [BooksController::class, 'create']);
Route::post('/create/book/', [BooksController::class, 'save'])->name('book.create');

//Edit Book Routes
// routes/web.php

Route::get('/edit/book/{book}/', [BooksController::class, 'edit'])->name('book.edit');
Route::put('/edit/book/{book}/', [BooksController::class, 'update'])->name('book.update');

// Author::routes();
Route::get('/edit/author/{author}/', [AuthorsController::class, 'edit'])->name('author.edit');
Route::put('/edit/author/{author}/', [AuthorsController::class, 'update'])->name('author.update');
