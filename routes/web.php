<?php

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
