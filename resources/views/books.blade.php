@extends('app')
@section('content')
<div class="container">
    <div class="row">
        <div class="col-12 pt-2">
            <div class="row">
                <div class="col-8">
                    <h1 class="display-one">Our eShelf!</h1>
                    <p>Below is our available catalogue. Click on a book to view details!</p>
                </div>
                <div class="col-4">
                    <p>Create new Book</p>
                    <a href="/create/book" class="btn btn-primary btn-sm">Add Book</a>
                </div>
            </div>
            @forelse($books as $book)
            <ul>
                <li><a href="./book/{{ $book->id }}">{{ ucfirst($book->name) }}</a></li>
            </ul>
            @empty
            <p class="text-warning">No Books available on eShelf</p>
            @endforelse
        </div>
    </div>
</div>
@endsection