@extends('app')
@section('content')
<div class="container">
    <div class="row">
        <div class="col-12 pt-2">
            <a href="/books" class="btn btn-outline-primary btn-sm">Go back</a>
            <h1 class="display-one">{{ ucfirst($book->name) }}</h1>
            <h3 class="display-one">{{ ucfirst($book->isbn) }}</h3>
            <hr>
            <a href="/edit/book/{{ $book->id }}" class="btn btn-outline-primary">Edit Book</a>
            <br>
            
        </div>
    </div>
</div>
@endsection