@extends('app')
@section('content')
<div class="container">
    <div class="row">
        <div class="col-12 text-center pt-5">
            <h1 class="display-one mt-5">{{ config('app.name') }}</h1>
            <p>Welcome to the eLibrary, click the button below to see them</p>
            <br>
            <a href="/books" class="btn btn-outline-primary">Show Books</a>
        </div>
    </div>
</div>
@endsection