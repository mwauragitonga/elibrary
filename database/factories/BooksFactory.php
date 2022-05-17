<?php

namespace Database\Factories;

use App\Models\Books;
use App\Models\Authors;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;


class BooksFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
            'name' => $this->faker->sentence(),
            'isbn' => $this->faker->isbn13,
            
        ];
    }
}
