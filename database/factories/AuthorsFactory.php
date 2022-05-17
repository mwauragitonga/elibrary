<?php

namespace Database\Factories;

use App\Models\Books;
use App\Models\Authors;
use Illuminate\Database\Eloquent\Factories\Factory;

class AuthorsFactory extends Factory
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
            'fname' => $this->faker->name(),
            'lname' => $this->faker->name(),
            'bio' => $this->faker->paragraph(30),
        ];
    }
}
