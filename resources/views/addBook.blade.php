@extends('app')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-12 pt-2">
            <a href="/books" class="btn btn-outline-primary btn-sm">Go back</a>
            <div class="border rounded mt-5 pl-4 pr-4 pt-4 pb-4">
                <h1 class="display-4">Add New Book</h1>
                <p>Fill and submit this form to add a Book to eShelf</p>

                <hr>

                <form action="" method="POST">
                    @csrf
                    <div class="row">
                        <div class="control-group col-12">
                            <label for="title">Book Title</label>
                            <input type="text" id="title" class="form-control" name="title" placeholder="Enter Book Name" required>
                        </div>
                        <div class="control-group col-12 mt-2">
                            <label for="body">ISBN </label>
                            <input type="text" id="isbn" class="form-control" name="isbn" placeholder="Enter ISN" required>
                        </div>
                        <div class="control-group col-12 mt-2">
                            <label for="body">Author </label>
                            <input type="text" id="title" class="form-control" name="title" placeholder="Enter Book Author" required>
                    </div>
                    <div class="row mt-2">
                        <div class="control-group col-12 text-center">
                            <button id="btn-submit" class="btn btn-primary">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>

@endsection