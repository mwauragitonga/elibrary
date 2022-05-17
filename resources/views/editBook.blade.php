@extends('app')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-12 pt-2">
            <a href="/books" class="btn btn-outline-primary btn-sm">Go back</a>
            <div class="border rounded mt-5 pl-4 pr-4 pt-4 pb-4">
                <h1 class="display-4">Edit Book Details</h1>
                <p>Edit and submit this form to update book details</p>

                <hr>

                <form action="" method="POST">
                    @csrf
                    @method('PUT')
                    <div class="row">
                        <div class="control-group col-12">
                            <label for="title">Book Title</label>
                            <input type="text" id="title" class="form-control" name="title" placeholder="Enter Post Title" value="{{ $book->name }}" required>
                        </div>
                        <div class="control-group col-12 mt-2">
                            <label for="body">ISBN </label>
                            <input type="text" id="isbn" class="form-control" name="isbn" placeholder="Enter ISBN" value="{{ $book->isbn }}" required>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="control-group col-12 text-center">
                            <button id="btn-submit" class="btn btn-primary">
                                Update Book
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>

@endsection